import { Job } from "../models/job.model.js";
import { Company } from "../models/comapany.model.js";
export const postJob = async (req, res) => {
  try {
    const {
      title,
      description,
      requirments,
      salary,
      experiencelavel,
      jobtype,
      position,
      company,
    } = req.body;
    if (
      !title ||
      !description ||
      !requirments ||
      !salary ||
      !experiencelavel ||
      !jobtype ||
      !position ||
      !company
    ) {
      return res.status(401).json({
        message: "something is missing",
        success: false,
      });
    }
    const userId = req.id;
    const job = await Job.create({
      title,
      description,
      requirments: requirments.split(","),
      salary: Number(salary),
      experiencelavel,
      jobtype,
      position,
      company,
      created_by: userId,
    });
    return res.status(200).json({
      message: "job created successfully",
      job,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: `server error ${error}`,
    });
  }
};

export const getAllJob = async (req, res) => {
  try {
    const keyword = req.query.keyword || " ";
    const query = {
      $or: [
        { title: { $regex: keyword, $options: "i" } },
        { description: { $regex: keyword, $options: "i" } },
      ],
    };

    const jobs = await Job.find(query)
      .populate({
        path: "company",
      })
      .sort({ createdAt: -1 });
    if (!jobs) {
      return res.status(401).json({
        message: "jobs not found",
        success: true,
      });
    }
    return res.status(200).json({
      jobs,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: `server error ${error}`,
    });
  }
};
// student
export const getJobById = async (req, res) => {
  try {
    const jobId = req.params.id;
    const getJob = await Job.findById(jobId);
    if (!getJob) {
      return res.status(401).json({
        message: "job not found",
        success: false,
      });
    }
    return res.status(200).json({
      getJob,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: `server error ${error}`,
    });
  }
};

export const getAdminJobs = async (req, res) => {
  try {
    const adminId = req.id;
    console.log(adminId);
    const adminJob = await Job.find({ created_by: adminId })
      .populate({
        path: "company",
      })
      .sort({ createdAt: -1 });
    console.log(adminJob);
    if (!adminJob) {
      return res.status(401).json({
        message: "jobs not founds wsasdad",
        success: false,
      });
    }
    return res.status(200).json({
      adminJob,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: `server error: ${error}`,
    });
  }
};
