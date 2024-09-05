// console.log("EXUCURED");

// import moment from "moment";

// const currentTime = moment().format("YYYY MM DD");
// console.log(currentTime);

// const person: string = "Martin";
// const count: number = 100;

import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
import app from "./app";

mongoose
  .connect(process.env.MONGO_URL as string, {})
  .then((data) => {
    console.log("MongoDB connection succeed");
    const PORT = process.env.PORT ?? 3003;
    app.listen(PORT, function () {
      console.log(`The server is running successfully on port: ${PORT}`);
    });
  })
  .catch((err) => console.log("ERROR on connection on MongoDB", err));