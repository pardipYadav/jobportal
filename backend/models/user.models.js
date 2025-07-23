import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["student", "recuritor"],
    },
    // profile: {
    //   bio: {
    //     type: String,
    //     skills: [{ type: String }],
    //     resume: { type: String },
    //     resumeOriginalName: { type: String },
    //     company: { type: mongoose.Schema.Types.ObjectId, ref: "company" },
    //     profilePhoto: {
    //       type: String,
    //       default: "",
    //     },
    //   },
    // },

    profile: {
      bio: { type: String },
      skills: [{ type: String }],
      resume: { type: String }, // URL to resume file
      resumeOriginalName: { type: String },
      company: { type: mongoose.Schema.Types.ObjectId, ref: "Company" },
      profilePhoto: {
        type: String,
        default: "",
      },
    },
  },
  { timesStamps: true }
);

export const User = mongoose.model("User", userSchema);
