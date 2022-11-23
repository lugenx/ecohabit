import fetch from "node-fetch";

const fetchData = async (URL) => {
  try {
    const data = await fetch(URL, { cache: "no-store" });
    return data.json();
  } catch (error) {
    console.log("Error here: ", error);
  }
};

export { fetchData };
