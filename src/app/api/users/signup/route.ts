import { connect } from "@/dbConfig/dbCongig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

connect();

export async function POST(request: NextRequest) {
    
  try {
    const reqBody = await request.json();
    // works like req.body in express
    const { email, username, password } = reqBody;
    console.log("body --->", reqBody);

    // check if already exists
    const user = await User.findOne({ email });
    if (user) {
      return NextResponse.json(
        {
          error: "User already exist for this mail",
        },
        { status: 400 }
      );
    }

    //  hash password 
const salt = await bcryptjs.genSalt(10);
const hashedPw =  await bcryptjs.hash(password,salt)
console.log("hashedPw", hashedPw)

// save new user in db
const newUser = new User({
    username,
    email,
    password: hashedPw
}
)
const savedUser = await newUser.save();
console.log("saved user in db -", savedUser)

return NextResponse.json(
    {message: "New User created successfully",
    success: true,
    status:201,
    savedUser
}
)

  } catch (error: any) {
    return NextResponse.json(
      {
        error: error.message,
      },
      // { status: 500 }
    );
  }
}
