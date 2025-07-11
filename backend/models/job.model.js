import { application } from "express";
import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      tyepe: String,
      required: true,
    },
    requirments: [
      {
        type: String,
      },
    ],
    salary: {
      type: Number,
      required: String,
    },
    jobtype: {
      type: string,
      required: true,
    },
    positioin: {
      type: String,
      required: true,
    },
    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "company",
      required: true,
    },
    created_by: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    application: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Application",
    },
  },
  { timestamps: true }
);
export const Job = mongoose.model("Job", jobSchema);
