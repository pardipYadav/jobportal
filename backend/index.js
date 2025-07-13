import express, { urlencoded } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDb from "./utils/db.js";
import userRoute from "./routes/user.routes.js";
import companyRoute from "./routes/company.route.js";
import useJob from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js";
dotenv.config({});
const app = express();
const corsOption = {
  origin: "http://localhost:5173",
  credentials: true,
};

app.use(cors(corsOption));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
const PORT = process.env.PORT || 3000;
app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", useJob);
app.use("/api/v1/application", applicationRoute);
app.listen(PORT, () => {
  connectDb({});
  console.log(`server is running on port ${PORT}`);
});
