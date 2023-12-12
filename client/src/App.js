import axios from "axios";
import "./App.css";
import Headers from "./Headers";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";

function App() {
  const [healthdata, sethealthData] = useState([]);

  const getHealthData = async () => {
    try {
      const { data } = await axios.get(
        "https://lvl-alpha-deploy-iamshushants-projects.vercel.app/api/v1/data/healthdata" 
      );
      sethealthData(data?.info);
      console.log(data);
    } catch (error) {
      console.log(error);
      toast.error("Error in fetching data");
    }
  };

  // const loadData = async () => {
  //   try {
  //     const res = await axios.get("http://localhost:8080/api/v1/data/load");
  //     if (res?.data?.success) toast.success("Loaded");
  //   } catch (error) {
  //     toast.error("Error in loading CSV file");
  //   }
  // };

  useEffect(() => {
    getHealthData();
  }, []);

  setInterval(() => {
    getHealthData();
  }, 30000);

  return (
    <div className="App">
      <Headers />

      <table className="min-w-full divide-y divide-gray-200 mx-2 my-3">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left  font-bold text-gray-500  tracking-wider text-lg"
            >
              device_id
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left  font-bold text-gray-500  tracking-wider text-lg"
            >
              temperature
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left  font-bold text-gray-500  tracking-wider text-lg"
            >
              spo2
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left  font-bold text-gray-500  tracking-wider text-lg"
            >
              blood_pressure
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left  font-bold text-gray-500  tracking-wider text-lg"
            >
              health_score
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left  font-bold text-gray-500  tracking-wider text-lg"
            >
              weakness
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {healthdata?.map((record, ind) => (
            <tr key={ind}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {record?.device_id}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {record?.temperature}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {record?.spo2}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {record?.blood_pressure}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {record?.health_score}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {record?.weakness}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
