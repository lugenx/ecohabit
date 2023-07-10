import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { CircularProgress } from "@mui/material";
import LocationCard from "./LocationCard";

const Recycle = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [country, setCountry] = useState("US");
  const [postal, setPostal] = useState("02116");
  const fetchData = async () => {
    setIsLoading(true);
    const response = await fetch(
      `https://api.ecohabit.org/recyclingcenters/country/${country}/postal/${postal}`
    );
    const data = await response.json();
    setData(data);
    setIsLoading(false);
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
            value={country ?? "US"}
            onChange={(e) => setCountry(e.target.value)}
            sx={{ m: 1 }}
          />
          <TextField
            required
            id="outlined-required"
            label="Postal Code"
            value={postal ?? "02116"}
            onChange={(e) => setPostal(e.target.value)}
            sx={{ m: 1 }}
          />
          <Button
            variant="outlined"
            sx={{ height: "4ch", mt: 2.4, ml: 1 }}
            onClick={() => fetchData()}
            disabled={isLoading && true}
          >
            Search
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexFlow: "row wrap",
          justifyContent: "center", 
          gap: 2,
          m: "0 0 20px 0",
        }}
      >
        {isLoading ? (
          <CircularProgress />
        ) : (
          data.map((recyclingCenter, index) => (
            <LocationCard key={index} recyclingCenter={recyclingCenter} />
          ))
        )}
      </Box>
    </>
  );
};

export default Recycle;
