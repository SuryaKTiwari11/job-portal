import Navbar from "../shared/Navbar";
import { RadioGroup } from "../ui/radio-group";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Link } from "react-router-dom";
import { useState } from "react";

function Signup() {
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    password: "",
    phoneNumber: "",
    file: "",
    role: "",
  });
  const changeEventHandler = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const changeFileHandler = (e) => {
    setInput({
      ...input,
      file: e.target.files?.[0],
    });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
   try {
  
   } catch (error) {
    
   }
    
  };
  return (
    <div>
      <Navbar />
      <div className="flex items-center align-middle justify-center max-w-7xl mx-auto ">
        <form
          onSubmit={submitHandler}
          className="  w-full max-w-md border border-gray-300 rounded-lg p-6 my-10 shadow-2xl"
        >
          <h1 className="font-bold text-2xl mb-6 text-gray-800">Sign Up</h1>

          <div className="mb-4">
            <Label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </Label>
            <input
              type="text"
              value={input.fullname}
              name="fullname"
              onChange={changeEventHandler}
              placeholder="Enter your name"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

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

          <div className="mb-4">
            <Label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </Label>
            <input
              type="text"
              value={input.phoneNumber}
              name="phoneNumber"
              onChange={changeEventHandler}
              placeholder="Enter your number"
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
                  className="text-sm font-medium text-gray-700 text-lg"
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
                  className="text-sm font-medium text-gray-700 text-lg"
                >
                  Recruiter
                </Label>
              </div>
            </RadioGroup>
            <div className="flex items-center justify-between gap-4 p-2 bg-gray-50 rounded-md">
              <Label className="font-medium text-gray-700">Profile </Label>
              <Input
                accept="image/*"
                type="file"
                onChange={changeFileHandler}
                name="file"
                className="cursor-pointer border border-gray-300 text-sm rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Sign Up
          </button>
          <span className="block text-sm text-gray-500 mt-4 ">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600">
              Login
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
}

export default Signup;
