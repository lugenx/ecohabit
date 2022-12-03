import fetch from "node-fetch";

const getPostalData = async (country, postalCode) => {
    const response = (await fetch(`${process.env.EARTH911_BASE_URL}/earth911.getPostalData?api_key=${process.env.EARTH911_API_KEY}&country=${country}&postal_code=${postalCode}`));
    return await response.json();
}

const searchLocations = async (longitude, latitude) => {
    const response = await fetch(`${process.env.EARTH911_BASE_URL}/earth911.searchLocations?api_key=${process.env.EARTH911_API_KEY}&longitude=${longitude}&latitude=${latitude}`);
    return await response.json();
}

const getLocationDetails = async (locationIds) => {
    const response = await fetch(`${process.env.EARTH911_BASE_URL}/earth911.getLocationDetails?api_key=${process.env.EARTH911_API_KEY}&${locationIds}`);
    return await response.json();
}


const getCenterDataWithPostal = async (country, postal_code) => {
    try {
        console.log("getCenterDataWithPostal");
        const postalData = (await getPostalData(country, postal_code)).result;
        if (!postalData) return [];
        const locationsData = (await searchLocations(postalData.longitude, postalData.latitude)).result;
        if (!locationsData) return [];
        const query = ('location_id[]=' + locationsData.map((location) => location.location_id).join("&location_id[]="));
        const locationDetails = (await getLocationDetails(query)).result;
        if (!locationDetails) return [];
        return locationsData.map((location) => {
            const locationDetail = locationDetails[location.location_id] || {};
            return {
                ...location,
                detail: locationDetail
            }
        });
    } catch (err) {
        console.error(`Error fetching from EARTH911 Api`, err.message);
    }
}

export { getCenterDataWithPostal };
