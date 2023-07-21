import { AuthorizationError } from "../utils/errors";
import jwt from "../utils/jwt";

const protect = (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return next(
      new AuthorizationError(401, "You are not login! Please login for access")
    );
  }

  const decoded = jwt.verify(token);
  console.log(decoded);
};

export default protect;
