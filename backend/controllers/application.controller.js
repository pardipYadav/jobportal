import { Application } from "../models/applicant.models.js";
import { Job } from "../models/job.model.js";

export const applyjob = async (req, res) => {
  try {
    const userId = req.id;
    const jobId = req.params.id;
    if (!jobId) {
      return res.status(401).json({
        message: "job Id is required",
        success: false,
      });
    }

    const existingApplication = await Application.findOne({
      job: jobId,
      applicant: userId,
    });
    if (existingApplication) {
      return res.status(401).json({
        message: "you have already applied for this job",
        success: false,
      });
    }
    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(404).json({
        message: "job not found",
        success: false,
      });
    }
    const newApplication = await Application.create({
      job: jobId,
      applicant: userId,
    });
    console.log(newApplication);
    if (!Array.isArray(job.applications)) {
      job.applications = [];
    }
    job.applications.push(newApplication._id);
    await job.save();
    return res.status(200).json({
      message: "job applied successfully",
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: `server error ${error}`,
    });
  }
};
export const getAppliedJobs = async (req, res) => {
  try {
    const userId = req.id;
    const applicatioin = await Application.find({ applicant: userId })
      .sort({ createdAt: -1 })
      .populate({
        path: "job",
        sort: { sort: { createdAt: -1 } },
        populate: {
          path: "company",
          options: { sort: { createdAt: -1 } },
        },
      });

    if (!applicatioin) {
      return res.status(404).json({
        message: "No Application",
        success: false,
      });
    }
    return res.status(200).json({
      applicatioin,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: `server error ${error}`,
    });
  }
};

export const getApplicants = async (req, res) => {
  try {
    const { id } = req.params;
    const job = await Job.findById(id).populate({
      path: "applications",
      options: { sort: { createdAt: -1 } },
      populate: {
        path: "applicant",
        options: { sort: { creratedAt: -1 } },
      },
    });
    if (!job) {
      return res.status(401).json({
        message: "job not found",
        success: false,
      });
    }
    return res.status(200).json({
      job,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: `server error ${error}`,
    });
  }
};

export const updateStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const applicationId = req.params.id;
    if (!status) {
      return res.status(400).json({
        message: "status is required",
        success: false,
      });
    }
    const application = await Application.findOne({ _id: applicationId });

    if (!application) {
      return res.status(404).json({
        message: "Application not found",
        success: false,
      });
    }
    application.status = status.toLowerCase();
    await application.save();
    return res.status(200).json({
      message: "status update successfully",
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      messaage: `server error ${error}`,
    });
  }
};
