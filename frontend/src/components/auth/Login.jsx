import Navbar from "../shared/Navbar";
import { RadioGroup } from "../ui/radio-group";
import { Label } from "../ui/label";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { USER_API_END_POINT } from "../../utlis/constant";
import axios from "axios";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../../redux/authSlice";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";
import Footer from "../Footer";

function Login() {
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading } = useSelector((store) => store.auth);
  const changeEventHandler = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  //   const changeFileHandler = (e) => {
  //     setInput({
  //       ...input,
  //       file: e.target.files?.[0],
  //     });
  //   };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${USER_API_END_POINT}/login`, input, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      if (res.data.success) {
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      dispatch(setLoading(false));
    }
  };
  return (
    <>
    <div>
      <Navbar />
      <div className="flex items-center align-middle justify-center max-w-7xl mx-auto ">
        <form
          onSubmit={submitHandler}
          className="  w-full max-w-md border border-gray-300 rounded-lg p-6 my-10 shadow-2xl"
        >
          <h1 className="font-bold text-2xl mb-6 text-gray-800">Login</h1>

          <div className="mb-4">
            <Label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </Label>
            <input
              type="email"
              value={input.email}
              name="email"
              onChange={changeEventHandler}
              placeholder="Enter your email"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <Label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </Label>
            <input
              type="password"
              value={input.password}
              name="password"
              onChange={changeEventHandler}
              placeholder="Enter your password"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6">
            <RadioGroup defaultValue="comfortable">
              <div className="flex items-center space-x-2 mb-1">
                <input
                  type="radio"
                  name="role"
                  value="student"
                  checked={input.role === "student"}
                  onChange={changeEventHandler}
                  className="cursor-pointer h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <Label
                  htmlFor="r1"
                  className="text-sm font-medium text-gray-700"
                >
                  Student
                </Label>
              </div>
              <div className="flex text-xl items-center space-x-2 ">
                <input
                  type="radio"
                  name="role"
                  value="recruiter"
                  checked={input.role === "recruiter"}
                  onChange={changeEventHandler}
                  className="cursor-pointer h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <Label
                  htmlFor="r2"
                  className="text-sm font-medium text-gray-700"
                >
                  Recruiter
                </Label>
              </div>
            </RadioGroup>
          </div>
          {loading ? (
            <Button className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              please Wait
            </Button>
          ) : (
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Login
            </button>
          )}

          <span className="block text-sm text-gray-500 mt-4 ">
            Dont have an account?{" "}
            <Link to="/signup" className="text-blue-600">
              Sign Up
            </Link>
          </span>
        </form>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default Login;
