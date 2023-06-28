import express from "express";
import {} from "dotenv/config";

const router = express.Router();

import { fetchData } from "../functions/fetch-data.js";

router.get("/", async (req, res) => {
  if (req.query.api_key !== "dummykey") {
    res.send({ err: "invalid key" });
  }

  const query = req.query;
  const locationId = req.query.location_id;
  delete query.location_id;
  query.api_key = process.env.API_KEY;

  let locationIdStr = "";
  if (Array.isArray(locationId)) {
    for (let id of locationId) {
      locationIdStr = locationIdStr + `&location_id[]=${id}`;
    }
  } else if (locationId) {
    locationIdStr = `&location_id=${locationId}`;
  }

  const str = new URLSearchParams(query).toString() + locationIdStr;

  const url = `http://api.earth911.com/earth911.getLocationDetails?${str}`;

  try {
    const data = await fetchData(url);
    res.send(data);
  } catch (error) {
    console.log("ERROR: ", error);
  }
});

export { router };
