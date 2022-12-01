import express from "express";
import {} from "dotenv/config";
const router = express.Router();

import { fetchData } from "../functions/fetch-data.js";

router.get(`/`, async (req, res) => {
  if (req.query.api_key !== "dummykey") {
    res.send({ err: "invalid key" });
  }

  const obj = {
    api_key: process.env.API_KEY,
    business_only: req.query.business_only,
    hide_event_only: req.query.hide_event_only,
    latitude: req.query.latitude,
    longitude: req.query.longitude,
    matched_materials: req.query.matched_materials, //DOTO: fix this.
    material_id: req.query.material_id, //DOTO: fix this.
    max_distance: req.query.max_distance,
    max_results: req.query.max_results,
    residental_only: req.query.residental_only,
  };

  const arr = Object.entries(obj);
  const filteredArr = arr.filter(([key, value]) => value !== undefined);
  const filteredObj = Object.fromEntries(filteredArr);

  const queries = new URLSearchParams(filteredObj).toString();

  const url = `http://api.earth911.com/earth911.searchLocations?${queries}`;

  try {
    const data = await fetchData(url);
    res.send(data);
  } catch (error) {
    console.log("ERROR: ", error);
  }
});

export { router };
