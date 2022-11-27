import fetch from "node-fetch";

const getPostalCode = async (country, postalCode) => {
    const response = (await fetch(`${process.env.EARTH911_BASE_URL}/earth911.getPostalData?api_key=${process.env.EARTH911_API_KEY}&country=${country}&postal_code=${postalCode}`));
    return await response.json();
}

const searchLocations = async (longitude, latitude) => {
    const response = await fetch(`${process.env.EARTH911_BASE_URL}/earth911.searchLocations?api_key=${process.env.EARTH911_API_KEY}&longitude=${longitude}&latitude=${latitude}`);
    return await response.json();
}

const getLocationDetails = async (locationIds) => {
    const response = await fetch(`${process.env.EARTH911_BASE_URL}/earth911.getLocationDetails?api_key=${process.env.EARTH911_API_KEY}&location_id=${locationIds}`);
    return await response.json();
}


export const getCenterDataWithPostal = async (country, postal_code) => {
    try {
        const postalData = await getPostalCode(country, postal_code);
        const searchLocationsData = await searchLocations(postalData.result.longitude, postalData.result.latitude);
        const locationDetails = await getLocationDetails(searchLocationsData.map((location) => location.location_id));
        return searchLocationsData.map((location) => {
            const locationDetail = locationDetails.find((detail) => detail.location_id === location.location_id);
            return {
                ...location,
                detail: locationDetail
            }
        });
    } catch (err) {
        console.error(`Error fetching from EARTH911 Api`, err.message);
    }
}

