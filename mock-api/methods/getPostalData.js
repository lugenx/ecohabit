import express from "express";
import fs from "fs";
const router = express.Router();

router.get("/", (req, res) => {
  const api_key = req.query.api_key;
  const country = req.query.country;
  const postal_code = req.query.postal_code;

  fs.readFile("./data/postal-data.json", "utf8", (err, data) => {
    if (err) {
      throw err;
    }
    const fullData = JSON.parse(data);
    if (api_key !== "dummykey") res.send({ err: "invalid key" });
    res.send(fullData[`${postal_code}`]);
  });
});

export { router };
