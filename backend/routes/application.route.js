import express from "express";
import isAuthentication from "../middleware/isAuthentication.js";
import {
  applyjob,
  getApplicants,
  getAppliedJobs,
  updateStatus,
} from "../controllers/application.controller.js";

const router = express.Router();

router.route("/apply/:id").get(isAuthentication, applyjob);
router.route("/get").get(isAuthentication, getAppliedJobs);
router.route("/:id/applicants").get(isAuthentication, getApplicants);
router.route("/status/:id/update").post(isAuthentication, updateStatus);

export default router;
