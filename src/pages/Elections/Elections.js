import React, { useState, useEffect } from "react";

// MUI
import { Grid, Typography, Button, Box } from "@mui/material";

// REACT_ROUTER_DOM
import { useNavigate } from "react-router-dom";
import { getArticles } from "../../redux/actions/Home";
import { useSelector } from "react-redux";

// PAGES
import HomeCard from "../Home/HomeCard";
import Electionpagecarousel from "../Carousels/Electionpagecarousel/Electionpagecarousel";

// IMAGES
import JanusAdd from "../../assets/images/Janus.jpg";

const Elections = () => {
  const { Articles } = useSelector((state) => state.HomeReducer);
  const navigate = useNavigate();

  useEffect(() => {
    getArticles();
  }, []);
  return (
    <Box sx={{ marginTop: "80px" }}>
      {/* Election carousel */}
      <Electionpagecarousel />

      <Grid
        container
        sx={{
          marginBottom: { xs: "0px", sm: "0px", md: "15px", lg: "15px" },
        }}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={0.6}
          lg={0.6}
          // sx={{ backgroundColor: "red" }}
        ></Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={8.5}
          lg={8.5}
          // sx={{ backgroundColor: "aqua" }}
        >
          <Box
            sx={{
              paddingLeft: { xs: "5px", sm: "5px", md: "0px", lg: "0px" },
              paddingRight: { xs: "5px", sm: "5px", md: "0px", lg: "0px" },
            }}
          >
            <Grid container spacing={3}>
              {Articles?.filter((item) => item.category[0] === "election").map(
                (result, index) => (
                  <HomeCard
                    key={index}
                    result={result}
                    onClick={() => {
                      console.log("navigate");
                      navigate(
                        `/${result?.category[0]}/${result?.subcategory[0]}/${result?.engtitle}`,
                        { state: { data: result } }
                      );
                    }}
                  />
                )
              )}
            </Grid>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={2.5}
          lg={2.5}
          // sx={{ backgroundColor: "green" }}
        >
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <a
              href="www.januskoncpets.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <Box
                sx={{
                  backgroundColor: "#F0F0F0",
                  height: "200px",
                  width: "200px",
                  marginTop: { xs: "10px", sm: "10px", md: "0px", lg: "0px" },
                  marginBottom: {
                    xs: "40px",
                    sm: "40px",
                    md: "0px",
                    lg: "0px",
                  },
                }}
              >
                <Box>
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "10px",
                        sm: "10px",
                        md: "9px",
                        lg: "9px",
                      },
                      fontWeight: "600",
                      textAlign: "center",
                      color: "black",
                    }}
                  >
                    ADVERTISEMENT
                  </Typography>
                </Box>
                <Box
                  component="img"
                  sx={{
                    width: {
                      xs: "200px",
                      sm: "200px",
                      md: "200px",
                      lg: "200px",
                    },
                    height: {
                      xs: "200px",
                      sm: "200px",
                      md: "200px",
                      lg: "200px",
                    },
                  }}
                  alt="redTriangleArrow"
                  src={JanusAdd}
                />
              </Box>
            </a>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={0.4}
          lg={0.4}
          // sx={{ backgroundColor: "purple" }}
        ></Grid>
      </Grid>
    </Box>
  );
};

export default Elections;
