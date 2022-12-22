import { Router } from "express";
import {
  getLocationDetails,
  getPostalData,
  searchLocations,
  getCentersDetail,
} from "../controller/earth911controller.js";
const earth911Router = Router();
import { verifyToken } from "../middleware/auth.js";

/* Recycle Centes. */
const recyclingCentersPrefix = "/recyclingcenters";

earth911Router.get(
  `${recyclingCentersPrefix}/getPostalData/country/:country/postal/:postal`,
  verifyToken,
  getPostalData
);
earth911Router.get(
  `${recyclingCentersPrefix}/getLocationDetails/:locId`,
  verifyToken,
  getLocationDetails
);
earth911Router.get(
  `${recyclingCentersPrefix}/searchLocations/log/:log/lat/:lat`,
  verifyToken,
  searchLocations
);
earth911Router.get(
  `${recyclingCentersPrefix}/country/:country/postal/:postal`,
  verifyToken,
  getCentersDetail
);

export default earth911Router;
