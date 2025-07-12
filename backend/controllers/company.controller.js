import { Company } from "../models/comapany.model.js";

export const register = async (req, res) => {
  try {
    const { companyname } = req.body;
    if (!companyname) {
      return res.status(201).json({
        message: "company name is required",
        success: false,
      });
    }
    let company = await Company.findOne({ name: companyname });
    if (company) {
      return res.status(201).json({
        message: "you can't resgiter the same company namne",
        success: false,
      });
    }
    company = await Company.create({
      name: companyname,
      userId: req.id,
    });
    if (company) {
      return res.status(200).json({
        message: "company register successfully",
        company,
        success: true,
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: `server error ${error} `,
    });
  }
};

export const getCompany = async (req, res) => {
  try {
    const userId = req.id;
    const companies = await Company.find({ userId });
    if (!companies) {
      return res.status(401).json({
        message: "company not found",
        success: false,
      });
    }
    return res.status(200).json({
      companies,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: `server error ${error}`,
    });
  }
};

export const companiebyId = async (req, res) => {
  try {
    const companyId = req.params.id;
    const companyFind = await Company.findById(companyId);
    if (!companyFind) {
      return res.status(401).json({
        message: "The company is not found",
      });
    }
    return res.status(200).json({
      companyFind,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: `server error ${error}`,
    });
  }
};

export const updateCompany = async (req, res) => {
  try {
    const { name, description, website, location } = req.body;
    const updateData = { name, description, website, location };
    const company = await Company.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
    });
    if (!company) {
      return res.status(401).json({
        message: "comapny not found",
      });
    }
    return res.status(200).json({
      message: "company information updated",
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: `server error ${error}`,
    });
  }
};
