import fetch from "node-fetch";
export const getPostalData = async (req, res) => {
    try {
        const response = (await fetch(`https://${process.env.EARTH911_BASE_URL}/earth911.getPostalData?api_key=${process.env.EARTH911_API_KEY}&country=${req.params.country}&postal_code=${req.params.postal}`));
        const data = await response.json();
        res.status(200).send(data);
    } catch (err) {
        console.error(`Error fetching from EARTH911 Api`, err.message);
        next(err);
    }
}

export const getLocationDetails = async (req, res, next) => {
    try {
        const response =await fetch(`${process.env.EARTH911_BASE_URL}/earth911.getLocationDetails?api_key=${process.env.EARTH911_API_KEY}&location_id=${req.params.locId}`);
        const data = await response.json();
        res.status(200).send(data);
    } catch (err) {
        console.error(`Error fetching from EARTH911 Api`, err.message);
        next(err);
    }
}

export const searchLocations = async (req, res, next) => {
    try {
        const response = await fetch(`${process.env.EARTH911_BASE_URL}/earth911.searchLocations?api_key=${process.env.EARTH911_API_KEY}&longitude=${req.params.log}&latitude=${req.params.lat}`);
        const data = await response.json();
        res.status(200).send(data);
    } catch (err) {
        console.error(`Error fetching from EARTH911 Api`, err.message);
        next(err);
    }
}