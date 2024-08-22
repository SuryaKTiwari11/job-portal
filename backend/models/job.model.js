import { application } from "express";
import mongoose from "mongoose";
const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    requirement: [
      {
        type: String,
      },
    ],
    salary: {
      type: Number,
      require: true,
    },
    location: {
      type: String,
      required: true,
    },
    JobType: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
      required: true,
    },
    created_by: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    experienceLevel: {
      type: Number,
      required: true,
    },
    application: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "application",
      },
    ],
  },
  { timestamps: true }
);
export const Job = mongoose.model("Job", jobSchema);
