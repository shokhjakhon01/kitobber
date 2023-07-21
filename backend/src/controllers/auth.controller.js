import User from "../models/user.model.js";
import {
  AuthorizationError,
  InternalServerError,
  NotFountError,
} from "../utils/errors.js";
import jwt from "../utils/jwt.js";

const POST_REGISTER = async (req, res, next) => {
  try {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      avatar: req.file.path,
    });

    const user = await newUser.save();

    res.status(201).json({
      status: 201,
      message: "User created !",
      access_token: jwt.sign({ user: user._id }),
      data: user,
    });
  } catch (error) {
    return next(new InternalServerError(500, error.message));
  }
};

const POST_LOGIN = async (req, res, next) => {
  try {
    const { password, email } = req.body;
    console.log(password, email);
    if (!email || !password) {
      return next(NotFountError(404, "Invalid Value"));
    }

    const user = await User.findOne({ email });
    const correctPassword = await user.correctPassword(password);

    if (!user || !correctPassword) {
      return next(AuthorizationError(401, "Incorrect email and password"));
    }

    res.status(200).json({
      status: 200,
      message: "Succesfully log in !",
      access_token: jwt.sign({ user: user._id }),
      data: user,
    });
  } catch (error) {
    return next(new InternalServerError(500, error.message));
  }
};

export default { POST_REGISTER, POST_LOGIN };
