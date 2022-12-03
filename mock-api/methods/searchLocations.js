import express from "express";
import {} from "dotenv/config";
const router = express.Router();

import { fetchData } from "../functions/fetch-data.js";

router.get(`/`, async (req, res) => {
  if (req.query.api_key !== "dummykey") {
    res.send({ err: "invalid key" });
  }

  const query = req.query;
  const materialId = req.query.material_id;
  delete query.material_id;
  query.api_key = process.env.API_KEY;

  let materialIdStr = "";
  if (Array.isArray(materialId)) {
    for (let id of materialId) {
      materialIdStr = materialIdStr + `&material_id[]=${id}`;
    }
  } else if (materialId) {
    materialIdStr = `&material_id=${materialId}`;
  }

  const str = materialIdStr
    ? new URLSearchParams(query).toString() + materialIdStr
    : new URLSearchParams(query).toString();

  const url = `http://api.earth911.com/earth911.searchLocations?${str}`;

  try {
    const data = await fetchData(url);
    res.send(data);
  } catch (error) {
    console.log("ERROR: ", error);
  }
});

export { router };
