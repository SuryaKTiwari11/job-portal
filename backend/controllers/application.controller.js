// import { populate } from "dotenv";
import { Application } from "../models/application.model.js";
import { Job } from "../models/job.model.js";

export const applyJob = async (req, res) => {
  try {
    const userId = req.id;
    const jobId = req.params.id;
    if (!jobId) {
      return res.status(400).json({
        message: "jobId is required",
        success: false,
      });
    }
    //to check whether the person has
    //already applied for this job
    const existingApplication = await Application.findOne({
      job: jobId,
      applicant: userId,
    });
    if (existingApplication) {
      return res.status(400).json({
        message: "you have already applied for this jobs",
        success: false,
      });
    }

    //check if the jobs exists
    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(404).json({
        message: "job not found",
        success: false,
      });
    }
    // create a new application
    const newApplication = await Application.create({
      job: jobId,
      applicant: userId,
    });

    job.application.push(newApplication._id);
    await job.save();
    return res
      .status(201)
      .json({ message: "job applied successfully", success: true });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      message: "job was not applied properly",
      success: false,
    });
  }
};
export const getAppliedJobs = async (req, res) => {
  try {
    const userId = req.id;
    const application = await Application.find({ applicant: userId })
      .sort({
        createdAt: -1,
      })
      .populate({
        path: "job",
        options: { sort: { createdAt: -1 } },
        populate: {
          path: "company",
          options: { sort: { createdAt: -1 } },
        },
      });

    if (application.length === 0) {
      return res.status(404).json({
        message: "application wasn't found",
        success: false,
      });
    }

    return res.status(200).json({
      application,
      message: "all jobs found successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(404).json({
      message: "jobs not found",
      success: false,
    });
  }
};
//admin will see how many users have applied
export const getApplicants = async (req, res) => {
  try {
    const jobId = req.params.id;
    const job = await Job.findById(jobId).populate({
      path: "application",
      options: { sort: { createdAt: -1 } },
      populate: {
        path: "applicant",
        options: { sort: { createdAt: -1 } },
      },
    });
    if (!job)
      return res.status(404).json({
        message: "job not found",
        success: false,
      });

    return res.status(200).json({
      job,
      success: true,
      message: "all applicants fetched successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(404).json({
      message: "application wasn't found",
      success: false,
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
    // finding the application with
    // the help of the applicationId
    const application = await Application.findOne({
      _id: applicationId,
    });
    if (!application) {
      return res.status(404).json({
        message: "application not found",
        success: "false",
      });
    }
    //update the status
    application.status = status;
    //save the application
    await application.save();
    //finally we send the response
    return res.status(200).json({
      message: "status updated successfully",
      success: "true",
    });
  } catch (error) {
    console.log(error);
    return res.status(404).json({
      message: "status not updated",
      success: false,
    });
  }
};
