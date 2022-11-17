import express from "express";
import fs from "fs";
import { router as getPostalDataMethod } from "./methods/getPostalData.js";
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use("/earth911.getPostalData", getPostalDataMethod);

app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});
