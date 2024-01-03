import React from "react";
import {
  Box,
  CircularProgress,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const Weekbar = ({ weekDaysWithAnswers }) => {
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
        {weekDaysWithAnswers.map((day, index) => {
          const completedPercentage = day.completedPercentage;
          const weekDayShortName = day.weekDay;
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
                value={completedPercentage}
              />
              <Typography
                variant="subtitle2"
                color="text.secondary"
                sx={{ fontSize: isDesktop ? "14px" : "10px" }} // Adjust the font size based on desktop or mobile
              >
                {weekDayShortName}
              </Typography>
              <Typography
                variant="subtitle2"
                color="text.secondary"
                sx={{ fontSize: isDesktop ? "14px" : "10px" }} // Adjust the font size based on desktop or mobile
              >
                {day.monthDay}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Weekbar;
