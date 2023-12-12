import healthModel from "../model/healthModel.js";
import fs from "fs";
import csv from "csv-parser";

export const checkController = async () => {
  try {
    const info = await healthModel.find({}, "-_id -__v");
    // console.log(JSON.stringify(info));

    const results = [];
    let arr2 = [];
    let isDataChanged = false;
    fs.createReadStream("./sample.csv")
      .pipe(csv())
      .on("data", (data) => results.push(data))
      .on("end", () => {
        // console.log(results);
        arr2 = results;
        // console.log(info);
        // console.log(arr2);
        isDataChanged = JSON.stringify(info) !== JSON.stringify(arr2);
        if (isDataChanged) {
          try {
            healthModel.deleteMany().then(() => {
              healthModel.insertMany(arr2);
              console.log("Data updated");
            });
          } catch (error) {
            console.error("Error updating data:", error);
          }
        } else {
          console.log("data is not altered");
        }
      });

    // console.log(info);
    // console.log(arr2);
    // console.log(isDataChanged);

    // console.log(results);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "error in checking API",
      error,
    });
  }
};
