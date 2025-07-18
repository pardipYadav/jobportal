import { Label } from "@radix-ui/react-label";
import Navbar from "../shared/Navbar";
import { Input } from "../ui/input";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constant";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "@/redux/authSlice";
import { Loader2 } from "lucide-react";

// profile Image uploading funtionality its still pending
const SignUp = () => {
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    phone: "",
    password: "",
    role: "",
  });
  const { loading } = useSelector((store) => store.auth);
  const navigate = useNavigate();
  const eventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const dispatch = useDispatch();
  const changeFileHandler = (e) => {
    setInput({ ...input, file: e.target.files?.[0] });
  };

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("phone", input.phone);
    formData.append("password", input.password);
    formData.append("role", input.role);
    if (input.file) {
      formData.append("file", input.file);
    }
    // console.log(formData);
    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true,
      });
      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/login");
      }
    } catch (error) {
      toast.error(`server error ${error.response.data.message}`);
    } finally {
      dispatch(setLoading(false));
    }
  };
  return (
    <div className="">
      <Navbar />
      <div className="flex items-center justify-center mx-w-7xl mx-auto">
        <form
          onSubmit={formSubmitHandler}
          className="w-1/2 border border-grey-200 rounded-md p-4 my-10"
        >
          <h1 className="font-bold text-xl mb-5">Sign Up</h1>
          <div className="my-2">
            <Label>Full Name</Label>
            <Input
              type="text"
              placeholder="lorem kumar"
              name="fullname"
              value={input.fullname}
              onChange={eventHandler}
            />
          </div>
          <div className="my-2">
            <Label>Email</Label>
            <Input
              type="email"
              placeholder="abc@gmail.com"
              name="email"
              value={input.email}
              onChange={eventHandler}
            />
          </div>
          <div className="my-2">
            <Label>Phone Number</Label>
            <Input
              type="tel"
              placeholder="78946XXXXX"
              name="phone"
              value={input.phone}
              onChange={eventHandler}
            />
          </div>
          <div className="my-2">
            <Label>Password</Label>
            <Input
              type="password"
              placeholder="********"
              name="password"
              value={input.password}
              onChange={eventHandler}
            />
          </div>

          <div className="flex items-center justify-between">
            <RadioGroup className="flex items-center gap-4 my-5">
              <div className="flex items-center gap-3 space-x-2">
                {/* <RadioGroupItem value="default" id="r1" /> */}
                <Input
                  type="radio"
                  name="role"
                  value="student"
                  checked={input.role === "student"}
                  onChange={eventHandler}
                  className="cursor-pointer"
                />
                <Label htmlFor="r1">Student</Label>
              </div>
              <div className="flex items-center gap-3 space-x-2">
                {/* <RadioGroupItem value="comfortable" id="r2" /> */}
                <Input
                  type="radio"
                  name="role"
                  value="recruiter"
                  checked={input.role === "recruiter"}
                  onChange={eventHandler}
                  className="cursor-pointer"
                />
                <Label htmlFor="r2">Recruiter</Label>
              </div>
            </RadioGroup>
          </div>
          <div className="flex items-center gap-2">
            <Label>Profile:</Label>
            <div className="bg-[#6e6e6e]">
              <Input
                accept="image/*"
                type="file"
                onChange={changeFileHandler}
                className="cursor-pointer"
              />
            </div>
          </div>
          {loading ? (
            <Button className="w-full my-4">
              {" "}
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> please wait
            </Button>
          ) : (
            <Button type="submit" className="w-full my-4">
              Signup
            </Button>
          )}
          <span className="text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600">
              Login
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};
export default SignUp;
