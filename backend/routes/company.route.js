import express from "express";
import { register } from "../controllers/company.controller.js";
import isAuthentication from "../middleware/isAuthentication.js";

const router = express.Router();

router.route("/register").post(isAuthentication, register);

export default router;
