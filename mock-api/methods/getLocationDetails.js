import express from "express";
import {} from "dotenv/config";

const router = express.Router();

import { fetchData } from "../functions/fetch-data.js";

router.get("/", async (req, res) => {
  if (req.query.api_key !== "dummykey") {
    res.send({ err: "invalid key" });
  }

  const API_KEY = process.env.API_KEY;
  const locationId = req.query.location_id;

  try {
    const data = await fetchData(
      `http://api.earth911.com/earth911.getLocationDetails?api_key=${API_KEY}&location_id=${locationId}`
    );
    res.send(data);
  } catch (error) {
    console.log("ERROR: ", error);
  }
});

export { router };
