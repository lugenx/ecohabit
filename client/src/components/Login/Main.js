import React from "react";
import { Box, Typography, Button, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { Person, Menu } from "@mui/icons-material";

const MainBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  display: "flex",
  flexDirection: "column",
  flex: 2,
  justifyContent: "space-between",
  padding: "48px 115px",
  color: "white",
  minHeight: "630px",
  [theme.breakpoints.down("md")]: {
    flex: 1,
    padding: "15px",
    justifyContent: "flex-start",
    backgroundImage: "url('./images/pngegg1.png')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom 0 left 0",
  },
}));
const TrackButton = styled(Button)(({ theme }) => ({
  marginTop: "1rem",
  marginBottom: "16rem",
  color: "white",
  backgroundColor: theme.palette.secondary.main,
  [theme.breakpoints.up("md")]: { display: "none" },
}));
const LinkText = styled(Link)({
  textDecoration: "none",
  color: "white",
});

const Main = ({ setShowLogin }) => {
  const handleClick = () => {
    setShowLogin(true);
  };
  return (
    <MainBox>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography fontFamily="Kalam" fontSize="1.25rem" fontWeight="700">
          EcoHabit
        </Typography>
        <IconButton
          onClick={handleClick}
          sx={{ display: { xs: "block", md: "none" } }}
        >
          <Person sx={{ color: "white" }} />
          <Menu sx={{ color: "white" }} />
        </IconButton>
      </Box>
      <Box sx={{ width: { xs: "100%", md: "340px" } }}>
        <Typography
          variant="h2"
          fontFamily="Roboto"
          fontWeight="700"
          sx={{
            fontSize: { xs: "1.8rem", md: "3.2rem" },
            lineHeight: { xs: "1.8rem", md: "3.25rem" },
            marginTop: { xs: "2rem" },
          }}
        >
          Lorem ipsum dolor sit amet,{" "}
          <Box component="span" color="secondary.main">
            consectetur
          </Box>
          .
        </Typography>
        <Typography mt={2} variant="subtitle2">
          Join a community of like-minded individuals and make a positive impact
          on the planet &rarr;
        </Typography>
      </Box>
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          justifyContent: "space-between",
        }}
      >
        <LinkText to="/about">About EcoHabit</LinkText>
        <LinkText to="/terms">Privacy Policy - Terms and Conditions</LinkText>
      </Box>
      <TrackButton variant="contained" component={Link} to="../register">
        START TRACKING YOUR ECOHABITS
      </TrackButton>
    </MainBox>
  );
};

export default Main;
