import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "@/models/userModel";
import { cookies } from "next/headers";
import { connectDB } from "@/lib/connectDB";
import { cookieOptions } from "@/utils/helper";
import { errorResponse, successResponse } from "@/utils/responseHelper";

// LOGIN
export async function login(req) {
  try {
    await connectDB();

    const body = await req.json();
    const { email, password } = body;

    const user = await User.findOne({ email });
    if (!user) {
      return errorResponse({ message: "User not found" });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return errorResponse({ message: "Invalid password" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    const cookieStore = await cookies();
    cookieStore.set("auth-token", token, cookieOptions);

    const { password: _, ...safeUser } = user._doc;

    return successResponse({ message: "Login successful", user: safeUser });
  } catch (error) {
    console.error("Login Error:", error);
    return errorResponse({ message: "Server error", error: error.message });
  }
}

// LOGOUT
export async function logout() {
  try {
    const cookieStore = await cookies();
    cookieStore.delete("auth-token");
    return successResponse({ message: "Logged out successfully" });
  } catch (error) {
    console.error("Logout error:", error);
    return errorResponse({ message: "Server error", error: error.message });
  }
}