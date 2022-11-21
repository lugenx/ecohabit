import fetch from "node-fetch";

export async function fetchData(URL) {
  try {
    const data = await fetch(URL, { cache: "no-store" });
    return data.json();
  } catch (error) {
    console.log("Error here: ", error);
  }
}
