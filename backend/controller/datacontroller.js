import healthModel from "../model/healthModel.js";

export const healthDataController = async (req, res) => {
  try {
    const info = await healthModel.find();
    // console.log(data);
    res.status(200).send({
      success: true,
      message: "Successfully fetched data",
      info,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in fetching API",
      error,
    });
  }
};
