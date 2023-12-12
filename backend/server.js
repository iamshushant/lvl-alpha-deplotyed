import express from "express";
import morgan from "morgan";
import cors from "cors";
import connectDB from "./config/db.js";
import colors from "colors";
import dotenv from "dotenv";
import storeCSVDataInMongoDB from "./helper/store.js";
import dataRoutes from "./routes/dataRoutes.js";
import { checkController } from "./controller/chkcontroller.js";
const PORT = process.env.PORT || 8080;

const app = express();

dotenv.config();

connectDB();

setTimeout(() => {
  storeCSVDataInMongoDB();
}, 0);

setInterval(() => {
  checkController();
}, 30000);

app.use(cors(
  // {
  //   origin:["https://lvl-alpha-deploy-frontend.vercel.app/"],
  //   methods:["POST","GET"],
  //   credentials:true
  // }
));
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/v1/data", dataRoutes);

app.get("/",(req,res)=>{
  res.status(200).json("Hello");
})

app.listen(PORT, () => {
  console.log(`server running at port 8080`.bgBlue.white);
});
