import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// creating signup logic
export const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const user = await User.findOne({ email });
    if (user) {
      return res.status(409).json({ message: "User already exists." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const createdUser = new User({
      username: username,
      email: email,
      password: hashedPassword,
    });
    await createdUser.save();
    res.status(201).json({
      message: "User create successfully",
      user: {
        _id: createdUser._id,
        username: createdUser.username,
        email: createdUser.email,
      },
    });
  } catch (err) {
    console.log("Signup Error: " + err.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

// creating login logic
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found." });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(401).json({ message: "Invalid Credentials." });

    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "3d",
    });

    res.status(201).json({
      message: "Login successful",
      token,
      user: {
        _id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (err) {
    console.log("Login Error: " + err.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

// creating logout logic
