import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import { COMPANY_API_END_POINT } from "@/utils/constant";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import axios from "axios";
const CompanyCreate = () => {
  const navigate = useNavigate();
  const [companyName, setCompanyName] = useState();
  const dispatch = useDispatch();
  const registerNewCompany = (e) => {
    alert(e.target.value);
    setCompanyName(e.target.value);
  };
  const registerNewCompanyo = async () => {
    try {
      const res = await axios.post(`${COMPANY_API_END_POINT}/register`, {
        companyName,
        header: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      if (res?.data?.success) {
        dispatch(singleCompany(res.data.company));
        toast.success(res.data.success);
        const companyId = res?.data?.company?._id;
        navigate(`/admin/companies/${companyId}`);
      }
    } catch (error) {
      console.log("forntend error-", error);
    }
  };
  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto">
        <div className="my-10">
          <h1 className="font-bold text-2xl">Your Company Name</h1>
          <p className="text-gray-500">
            What would you like to give your company name? you can change this
            later.
          </p>
        </div>
        <Label>Company name</Label>
        <Input
          type="text"
          className="my-2"
          placeholder="jobhunt, Microsoft etc"
        />
        <div className="flex items-center gap-2 my-10">
          <Button
            variant="outline"
            onClick={() => navigate("/admin/companies")}
          >
            Cancel
          </Button>
          <Button onChange={registerNewCompany}>Continue</Button>
        </div>
      </div>
    </div>
  );
};
export default CompanyCreate;
