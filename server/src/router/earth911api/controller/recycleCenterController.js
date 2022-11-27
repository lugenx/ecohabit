import fetch from "node-fetch";
import { getCenterDataWithPostal } from "../services/recycleCenterService.js";
export const getPostalData = async (req, res, next) => {
    try {
        const response = (await fetch(`${process.env.EARTH911_BASE_URL}/earth911.getPostalData?api_key=${process.env.EARTH911_API_KEY}&country=${req.params.country}&postal_code=${req.params.postal}`));
        const data = (await response.json());
        res.status(200).send(data);
    } catch (err) {
        console.error(`Error fetching from EARTH911 Api`, err.message);
        res.status(500).send(`Error fetching from EARTH911 Api`);
    }
}

export const getLocationDetails = async (req, res, next) => {
    try {
        const response = await fetch(`${process.env.EARTH911_BASE_URL}/earth911.getLocationDetails?api_key=${process.env.EARTH911_API_KEY}&location_id=${req.params.locId}`);
        const data = await response.json();
        res.status(200).send(data);
    } catch (err) {
        console.error(`Error fetching from EARTH911 Api`, err.message);
        res.status(500).send(`Error fetching from EARTH911 Api`);
    }
}

export const searchLocations = async (req, res, next) => {
    try {
        const response = await fetch(`${process.env.EARTH911_BASE_URL}/earth911.searchLocations?api_key=${process.env.EARTH911_API_KEY}&longitude=${req.params.log}&latitude=${req.params.lat}`);
        const data = await response.json();
        res.status(200).send(data);
    } catch (err) {
        console.error(`Error fetching from EARTH911 Api`, err.message);
        res.status(500).send(`Error fetching from EARTH911 Api`);
    }
}

export const getCentersDetail = async (req, res, next) => {
    try {
        console.log('getCentersDetail');
        const centersData = await getCenterDataWithPostal(req.params.country, req.params.postal);
        res.status(200).send(centersData);
    } catch (err) {
        console.error(`Error fetching from EARTH911 Api`, err.message);
        res.status(500).send(`Error fetching from EARTH911 Api`);
    }
}