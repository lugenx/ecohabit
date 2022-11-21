import express from "express";

import { router as getPostalDataMethod } from "./methods/getPostalData.js";
import { router as searchLocationsMethod } from "./methods/searchLocations.js";

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use("/earth911.getPostalData", getPostalDataMethod);
app.use("/earth911.searchLocations", searchLocationsMethod);

app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});
