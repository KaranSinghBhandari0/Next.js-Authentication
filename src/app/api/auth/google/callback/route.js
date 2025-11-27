import { NextResponse } from "next/server";
import axios from "axios";
import User from "@/models/userModel";
import { connectDB } from "@/lib/connectDB";
import jwt from "jsonwebtoken";
import { cookieOptions } from "@/utils/helper";

export async function GET(req) {
  try {
    await connectDB();

    const code = req.nextUrl.searchParams.get("code");
    const redirectUri = `${process.env.NEXT_PUBLIC_APP_URL}/api/auth/google/callback`;

    // 1. Exchange "code" for token
    const tokenRes = await axios.post(
      "https://oauth2.googleapis.com/token",
      {
        code,
        client_id: process.env.GOOGLE_CLIENT_ID,
        client_secret: process.env.GOOGLE_CLIENT_SECRET,
        redirect_uri: redirectUri,
        grant_type: "authorization_code"
      }
    );

    const { access_token } = tokenRes.data;

    // 2. Get Google user info
    const googleUser = await axios.get(
      `https://www.googleapis.com/oauth2/v1/userinfo?alt=json`,
      {
        headers: { Authorization: `Bearer ${access_token}` }
      }
    );

    const { email, name } = googleUser.data;

    // 3. Check if user exists
    let user = await User.findOne({ email });

    if (!user) {
      // Create new Google user
      user = new User({
        name,
        email
      });

      await user.save();
    }

    // 4. Generate JWT for session
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    // 5. Save JWT in cookie & redirect to app
    const response = NextResponse.redirect(`${process.env.NEXT_PUBLIC_APP_URL}/profile`);

    response.cookies.set("auth-token", token, cookieOptions);

    return response;

  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Google login failed" }, { status: 500 });
  }
}
