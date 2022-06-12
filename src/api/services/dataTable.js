import axios from "axios";

const getDataTable = async () => {
  let data;
  try {
    const table = await axios.get(`http://127.0.0.1:8000/data`, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    });
    data = table.data;
  } catch (error) {
    console.log(error);
  }
  return data;
};

export default getDataTable;
