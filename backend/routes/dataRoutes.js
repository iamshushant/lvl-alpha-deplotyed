import express from "express";
import { healthDataController } from "../controller/datacontroller.js";
// import { loadController } from "../controller/storecontroller.js";
// import { checkController } from "../controller/chkcontroller.js";

const router = express.Router();

router.get("/healthdata", healthDataController);
// router.get("/load", loadController);
// router.get("/check", checkController);

export default router;
