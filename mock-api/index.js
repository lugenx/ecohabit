import express from "express";

import { router as getPostalDataMethod } from "./methods/getPostalData.js";
import { router as searchLocationsMethod } from "./methods/searchLocations.js";
import { router as getLocationDetailsMethod } from "./methods/getLocationDetails.js";

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use("/earth911.getPostalData", getPostalDataMethod);
app.use("/earth911.searchLocations", searchLocationsMethod);
app.use("/earth911.getLocationDetails", getLocationDetailsMethod);

app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});
