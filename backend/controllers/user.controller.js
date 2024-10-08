import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
export const register = async (req, res) => {
  try {
    const { fullname, email, phoneNumber, password, role } = req.body;
    if (!fullname || !email || !phoneNumber || !role) {
      return res.status(400).json({
        message: "something is missing",
        success: false,
      });
    }
    const personal = await User.findOne({ email });
    if (personal) {
      return res.status(400).json({
        message: "User already exist with this email",
        success: false,
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({
      fullname,
      email,
      phoneNumber,
      password: hashedPassword,
      role,
    });
    return res.status(201).json({
      message: "Account create successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const login = async (req, res) => {
  try {
    const { email, password, role } = req.body;

    if (!email || !role || !password) {
      return res.status(400).json({
        message: "Something is missing",
        success: false,
      });
    }
    const personal = await User.findOne({ email });
    if (!personal) {
      return res.status(400).json({
        message: "Incorrect email or password",
        success: false,
      });
    }
    //  console.log("Password from request:", password);
    // console.log("Password from database:", personal.password);
    if (!password || !personal.password) {
      return res.status(400).json({
        message: "Password is missing",
        success: false,
      });
    }
    const isPasswordMatch = await bcrypt.compare(password, personal.password);
    if (!isPasswordMatch) {
      return res.status(400).json({
        message: "Incorrect email or password",
        success: false,
      });
    }
    //    console.log(typeof password); //
    //   console.log(typeof personal.password); //
    //  should receive an output saying that this is string
    //  rather than undefined

    // convert to the same case before comparing
    if (role.toLowerCase() !== personal.role.toLowerCase()) {
      return res.status(400).json({
        message: "Account doesn't exist with the current role",
        success: false,
      });
    }

    const tokenData = { userId: personal._id };
    const token = jwt.sign(tokenData, process.env.SECRET_KEY, {
      expiresIn: "1d",
    });

    const userData = {
      _id: personal._id,
      fullname: personal.fullname,
      email: personal.email,
      phoneNumber: personal.phoneNumber,
      role: personal.role,
      profile: personal.profile,
    };

    return res
      .status(200)
      .cookie("token", token, {
        maxAge: 1 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: "strict",
        secure: false,
        path: "/",
        domain: "localhost",
      })
      .json({
        message: `Welcome back ${personal.fullname}`,
        personal: userData,
        success: true,
      });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Server error",
      success: false,
    });
  }
};

export const logout = async (req, res) => {
  try {
    return res.status(200).cookie(
      "token",
      "",
      { maxAge: 0 }.json({
        message: "logout successfully",
        success: true,
      })
    );
  } catch (error) {
    console.log(error);
    return status(400).json({
      message: "logout failed",
      success: false,
    });
  }
};
export const updateProfile = async (req, res) => {
  try {
    const { fullname, email, phoneNumber, bio, skills } = req.body;
    const file = req.file;
    // if (!fullname || !email || !phoneNumber || !bio || !skills) {
    //   return res.status(400).json({
    //     message: "something is missing",
    //     success: false,
    //   });
    // }
    //its not necessary that we are updating all things at once

    //cloudinary shall come here
    let skillsArray;
    if (skills) {
      skillsArray = skills.split(","); //agar skills hue toh
      //hi split karna hai
    }
    const userId = req.id; //middle ware authentication
    let user = await User.findById(userId);
    if (!user) {
      return res.status(400).json({
        message: "User not found",
        success: false,
      });
    }

    //updating data
    if (fullname) user.fullname = fullname;
    if (email) user.email = email;
    if (phoneNumber) user.phoneNumber = phoneNumber;
    if (bio) user.profile.bio = bio;
    if (skills) user.profile.skills = skillsArray;

    //resume comes later here...
    await user.save();
    userData = {
      _id: user._id,
      fullname: user.fullname,
      email: user.email,
      phoneNumber: user.phoneNumber,
      role: user.role,
      profile: user.profile,
    };
    return res.status(200).json({
      message: "profile updated successfully",
      user: userData,
      success: true,
    });
  } catch (error) {
    return res.status(400).json({
      message: "profile not updated successfully",
      success: false,
    });
  }
};
