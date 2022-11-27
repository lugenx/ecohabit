import { Router } from 'express';
import { getLocationDetails, getPostalData, searchLocations } from './controller/recycleCenterController.js';
const earth911Router = Router();

/* Recycle Centes. */
const recyclingCentersPrefix = '/recyclingcenters';

earth911Router.get(`${recyclingCentersPrefix}/getPostalData/country/:country/postal/:postal`, getPostalData);
earth911Router.get(`${recyclingCentersPrefix}/getLocationDetails/:locId`, getLocationDetails);
earth911Router.get(`${recyclingCentersPrefix}/searchLocations/log/:log/lat/:lat`, searchLocations);


export default earth911Router;