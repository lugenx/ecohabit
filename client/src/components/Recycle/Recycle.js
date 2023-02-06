import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import LocationCard from "./LocationCard";

const Recycle = () => {
  const [data, setData] = useState([]);
  const [country, setCountry] = useState("US");
  const [postal, setPostal] = useState("02116");
  const fetchData = async () => {
    const response = await fetch(
      `https://api.ecohabit.org/recyclingcenters/country/${country}/postal/${postal}`
    );
    const data = await response.json();
    setData(data);
  };
  return (
    <>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        sx={{ "& > :not(style)": { display: "flex", m: 5, width: "60ch" } }}
      >
        <Box>
          <TextField
            required
            id="outlined-required"
            label="Country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            defaultValue="US"
            sx={{ m: 1 }}
          />
          <TextField
            required
            id="outlined-required"
            label="Postal Code"
            value={postal}
            onChange={(e) => setPostal(e.target.value)}
            defaultValue="02116"
            sx={{ m: 1 }}
          />
          <Button
            variant="outlined"
            sx={{ height: "4ch", mt: 2.4, ml: 1 }}
            onClick={() => fetchData()}
          >
            Search
          </Button>
        </Box>
      </Box>
      <Box sx={{}}>
        {data.map((recyclingCenter) => (
          <LocationCard recyclingCenter={recyclingCenter} />
        ))}
      </Box>
    </>
  );
};

export default Recycle;
