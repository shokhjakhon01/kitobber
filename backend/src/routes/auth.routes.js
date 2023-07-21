import { Router } from "express";

import authController from "../controllers/auth.controller.js";
import validate from "../middlewares/validate.js";
import { upload } from "../utils/upload.js";

const router = Router();

router.post(
  "/register",
  upload.single("avatar"),
  validate,
  authController.POST_REGISTER
);

router.post("/login", validate, authController.POST_LOGIN);

export default router;
