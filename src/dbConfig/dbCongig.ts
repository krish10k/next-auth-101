import mongoose from "mongoose";
export async function connect() {
  try {
    mongoose.connect(process.env.mongo_uri!);
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("mongo connected success");
    });

    // connection.on("error", (err) =>{
    //     console.log(err);
    //     process.exit();
    // }

  } catch (error) {
    console.log("error in connection /n", error);
  }
}
