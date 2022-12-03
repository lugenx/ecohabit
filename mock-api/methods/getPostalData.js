import express from "express";
import { fetchData } from "../functions/fetch-data.js";
import {} from "dotenv/config";
const router = express.Router();

router.get("/", async (req, res) => {
  if (req.query.api_key !== "dummykey") {
    res.send({ err: "invalid key" });
  }
  const country = req.query.country;
  const postalCode = req.query.postal_code;

  const API_KEY = process.env.API_KEY;

  try {
    const data = await fetchData(
      `http://api.earth911.com/earth911.getPostalData?api_key=${API_KEY}&country=${country}&postal_code=${postalCode}`
    );

    res.send(data);
  } catch (error) {
    console.log("ERROR: ", error);
  }
});

export { router };
