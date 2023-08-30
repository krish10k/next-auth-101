
import { connect } from "@/dbConfig/dbCongig";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import toast from "react-hot-toast";
import User from "@/models/userModel";
import jwt from "jsonwebtoken";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();

    console.log("body in login -->", reqBody)

    const { email, password } = reqBody;
    const user = await User.findOne({ email });
    if (user) {

      console.log("user found out in db --->",user)

      const validatePw = await bcryptjs.compare(password, user?.password);

      console.log("validated pass? -->",  validatePw)

      if (!validatePw) {
       return NextResponse.json({ error: "Password not matching" }, { status: 400 });
      }

      // create token as pw is verified!
      const tokenData = {
        id: user?._id,
        email: user?.email,
        username: user?.username,
      };
      const token = jwt.sign(tokenData, process.env.TOKEN_SECRET!, {
          expiresIn: "1d" });
      const response = NextResponse.json({
        message: "User logged in successfully",
        success: true,
      });
 
      console.log("token generated --> ", token)
      response.cookies.set("token", token, {
        httpOnly: true,
      });
      // return res
      return response;
    } else {
      return NextResponse.json({ error: "User does not exist" }, { status: 400 });
    }
  } catch (error: any) {
    console.log("Unable to login", error?.message);
    toast(error?.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
