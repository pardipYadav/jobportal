import express from "express";
import {
  companiebyId,
  getCompany,
  register,
  updateCompany,
} from "../controllers/company.controller.js";
import isAuthentication from "../middleware/isAuthentication.js";

const router = express.Router();

router.route("/register").post(isAuthentication, register);
router.route("/get").get(isAuthentication, getCompany);
router.route("/get/:id").get(isAuthentication, companiebyId);
router.route("/update/:id").put(isAuthentication, updateCompany);

export default router;
