import express from "express";
import {
  login,
  logout,
  register,
  updateProfile,
} from "../controllers/user.controllers.js";
import isAuthentication from "../middleware/isAuthentication.js";
const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/profile/update").post(isAuthentication, updateProfile);

export default router;
