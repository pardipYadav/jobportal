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
        success: false,
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: `server error ${error} `,
    });
  }
};
