import React from "react";
import {
  Box,
  CircularProgress,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const Weekbar = () => {
  const week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const currentDate = new Date();

  // Calculates first date of the week
  const startDay = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate() - currentDate.getDay()
  );

  // Sets the following dates accordingly
  const setDate = (a, b) => {
    return a + b;
  };

  // Adds zero before single digit dates
  const pad = (num, len) => {
    return String(num).padStart(len, "0");
  };

  // Determines whether to add second letter to label
  const checkFirstLetter = (arr, str, substr) => {
    return arr.some((item) => item !== str && item.startsWith(substr));
  };

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "600px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {week.map((day, index) => {
          let randomNum = Math.floor(Math.random() * 100) + 1;

          return (
            <Box
              key={index}
              sx={{
                position: "relative",
                marginX: "auto",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-evenly",
                width: isDesktop ? "55px" : "40px",
                height: isDesktop ? "55px" : "40px",
                padding: 2.25,
                margin: 0.25,
              }}
            >
              {/* This progress bar serves as the gray border */}
              <CircularProgress
                size={"100%"}
                sx={{
                  color: "#A5ABA8",
                  zIndex: 2,
                  position: "absolute",
                }}
                variant="determinate"
                value={100}
              />
              {/* This progress bar displays the progress in green */}
              <CircularProgress
                size={"100%"}
                sx={{
                  color: "#64F94C",
                  zIndex: 2,
                  position: "absolute",
                }}
                variant="determinate"
                // Temporary: the value will be calculated later
                value={randomNum}
              />
              <Typography
                variant="subtitle2"
                color="text.secondary"
                sx={{ fontSize: isDesktop ? "14px" : "10px" }} // Adjust the font size based on desktop or mobile
              >
                {checkFirstLetter(week, day, day[0]) ? day.slice(0, 2) : day[0]}
              </Typography>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                sx={{ fontSize: isDesktop ? "14px" : "10px" }} // Adjust the font size based on desktop or mobile
              >
                {pad(setDate(startDay.getDate(), index), 2)}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Weekbar;
