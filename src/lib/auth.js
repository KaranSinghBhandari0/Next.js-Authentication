import jwt from "jsonwebtoken";
import User from "@/models/userModel";
import { connectDB } from "./connectDB";
import { cookies } from "next/headers";

export const getCurrentUser = async () => {
  try {
    await connectDB();

    const cookieStore = await cookies();
    const token = cookieStore.get("auth-token")?.value;

    if (!token) return null;

    const decoded = jwt.verify(token, process.env.JWT_SECRET);


    if (!decoded?.id) return null;

    const user = await User.findById(decoded.id).lean();

    return JSON.parse(JSON.stringify(user)) || null;
  } catch (err) {
    console.error("Auth error:", err);
    return null;
  }
}