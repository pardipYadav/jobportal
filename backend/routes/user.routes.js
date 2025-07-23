import express from "express";
import {
  login,
  logout,
  register,
  updateProfile,
} from "../controllers/user.controllers.js";
import isAuthentication from "../middleware/isAuthentication.js";
import { singleUpload } from "../middleware/multer.js";
const router = express.Router();

router.route("/register").post(singleUpload, register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router
  .route("/profile/update")
  .post(isAuthentication, singleUpload, updateProfile);

export default router;
