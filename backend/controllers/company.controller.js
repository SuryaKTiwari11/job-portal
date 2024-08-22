import { Company } from "../models/company.model.js";
export const registerCompany = async (req, res) => {
  try {
    const { companyName } = req.body;
    if (!companyName) {
      return res.status(400).json({
        message: "Company name is required",
        successful: false,
      });
    }
    let company = await Company.findOne({ name: companyName });
    if (company) {
      return res.status(400).json({
        message: "you can't register same company",
        success: false,
      });
    }
    company = await Company.create({
      name: companyName,
      userId: req.id,
    });

    return res.status(201).json({
      message: "company registered successfully",
      company,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getCompany = async (req, res) => {
  //we only want to get the company registered by that
  //particular user
  //user id of the person that has been logged in
  try {
    const UserId = req.id;
    const companies = await Company.find({ UserId });
    if (!companies) {
      return res.status(404).json({
        message: "Companies not found",
        success: false,
      });
    }
    return res.status(200).json({
      companies,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};
export const getCompanyById = async (req, res) => {
  try {
    const companyId = req.params.id;
    const company = await Company.findById(companyId);
    if (!company) {
      return res.status(404).json({
        message: "company doesn't exist",
        success: false,
      });
    }
    return res.status(200).json({
      company,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};
export const updateCompany = async (req, res) => {
  try {
    //things that can get updated
    const { name, description, location, website } = req.body;
    const file = req.file;
    //cloudinary

    const upadateData = { name, description, website, location };
    const company = await Company.findByIdAndUpdate(req.param.id, upadateData, {
      new: true,
    });
    if (!company) {
      return res.status(404).json({
        message: "company doesn't exist",
        success: false,
      });
    }
    return res.status(200).json({
      message: "company information has been updated",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};
