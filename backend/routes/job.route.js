import express from "express";

import isAuthentication from "../middleware/isAuthentication.js";

import {
  getJobById,
  getAdminJobs,
  getAllJob,
  postJob,
} from "../controllers/job.controller.js";

const router = express.Router();

router.route("/createpost").post(isAuthentication, postJob);
router.route("/get").get(isAuthentication, getAllJob);
router.route("/getadminjobs").get(isAuthentication, getAdminJobs);
router.route("/get/:id").get(isAuthentication, getJobById);

export default router;
