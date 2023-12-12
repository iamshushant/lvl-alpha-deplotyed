import fs from "fs";
import csv from "csv-parser";
import healthModel from "../model/healthModel.js";
import path from "path";

const storeCSVDataInMongoDB = () => {
  const results = [];
  fs.createReadStream("sample.csv")
    .pipe(csv())
    .on("data", (data) => results.push(data))
    .on("end", () => {
      healthModel
        .insertMany(results)
        .then(() => {
          console.log("Data inserted successfully into MongoDB");
        })
        .catch((err) => {
          console.log(results);
          console.error("Error inserting data:", err);
        });
    });
};

export default storeCSVDataInMongoDB;
