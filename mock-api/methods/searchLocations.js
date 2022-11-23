import express from "express";
import {} from "dotenv/config";
const router = express.Router();

import { fetchData } from "../functions/fetch-data.js";

router.get(`/`, async (req, res) => {
  if (req.query.api_key !== "dummykey") {
    res.send({ err: "invalid key" });
  }

  const API_KEY = process.env.API_KEY;
  const businessOnly = req.query.business_only;
  const hideEventOnly = req.query.hide_event_only;
  const latitude = req.query.latitude;
  const longitude = req.query.longitude;
  const matchedMaterials = req.query.matched_materials;
  const materialId = req.query.material_id;
  const maxDistance = req.query.max_distance;
  const maxResults = req.query.max_results;
  const residentialOnly = req.query.residental_only;

  try {
    const data = await fetchData(
      `http://api.earth911.com/earth911.searchLocations?api_key=${API_KEY}&business_only=${businessOnly}&hide_event_only=${hideEventOnly}&latitude=${latitude}&longitude=${longitude}&matched_materials=${matchedMaterials}&material_id=${materialId}&max_distance=${maxDistance}&max_results=${maxResults}&residental_only=${residentialOnly}`
    );

    res.send(data);
  } catch (error) {
    console.log("ERROR: ", error);
  }
});

export { router };
