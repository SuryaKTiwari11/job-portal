import { query } from "express";
import { Job } from "../models/job.model.js";

export const postJob = async (req, res) => {
  try {
    const {
      title,
      description,
      requirement,
      salary,
      location,
      jobType,
      experience,
      position,
      companyId,
    } = req.body;
    const UserId = req.id;
    if (
      !title ||
      !description ||
      !requirement ||
      !salary ||
      !location ||
      !jobType ||
      !experience ||
      !position ||
      !companyId
    ) {
      return res.status(404).json({
        message: "something is missing",
        success: false,
      });
    }
    const job = await Job.create({
      title,
      description,
      requirement: requirement.split(","),
      salary: Number(salary),
      location,
      jobType,
      experienceLevel: Number(experience),
      position,
      company: companyId,
      created_by: UserId,
    });

    return res.status(201).json({
      message: "new job created successfully",
      success: true,
      job,
    });
  } catch (error) {
    return res.status(400).json({
      message: "job wasn't created properly ",
    });
  }
};
export const getAllJobs = async (req, res) => {
  try {
    const keywords = req.query.keywords || "";
    const query = {
      $or: [
        { title: { $regex: keywords, $options: "i" } },
        { description: { $regex: keywords, $options: "i" } },
      ],
    };
    const jobs = await Job.find(query)
      .populate({
        path: "company",
      })
      .sort({
        createdAt: -1,
      });
    if (!jobs) {
      return res.status(404).json({
        message: "Job not found",
        success: false,
      });
    }
    return res.status(200).json({
      jobs,
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(404).json({
      message: "Job not found",
      success: false,
    });
  }
};

export const getJobById = async (req, res) => {
  try {
    const jobId = req.param.id;
    const job = Job.findById(jobId);
    if (!job) {
      return res.status(404).json({
        message: "Job not found",
        success: false,
      });
    }
    return res.status(200).json({ job, success: true });
  } catch (error) {
    console.log(error);
    return res.status(404).json({
      message: "Job not found",
      success: false,
    });
  }
};

export const getAdminJobs = async (req, res) => {
  try {
    const adminId = req.id;
    const jobs = await Job.find({ created_by: adminId });
    if (!jobs) {
      return res.status(404).json({
        message: "Jobs not found",
        success: false,
      });
    }
    return res.status(200).json({
      jobs,
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(404).json({
      message: "Job not found",
      success: false,
    });
  }
};
