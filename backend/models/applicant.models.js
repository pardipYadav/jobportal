import mongoose from "mongoose";

const applicantSchema = new mongoose.Schema(
  {
    job: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "job",
      required: true,
    },
    applicant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "accept", "reject"],
    },
  },
  { timesstamps: true }
);

export const applicant = mongoose.model("Applicant", applicantSchema);
