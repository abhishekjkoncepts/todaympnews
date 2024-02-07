import React, { FC, ReactElement } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import Link from "@mui/material/Link";
import {
  Facebook,
  FiberSmartRecord,
  Instagram,
  Twitter,
} from "@mui/icons-material";

import instaLogo from "../../assets/images/insatIcon.png";
import fbLogo from "../../assets/images/fbicon.png";

function Footer() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        backgroundColor: "#A8A8A8",
        paddingTop: "1rem",
        paddingBottom: "1rem",
        position: "absolute",
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography color="black" variant="h5">
              आज का समाचार
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Box
              sx={{ display: "flex", flexDirection: "row", marginTop: "8px"  }}
            >
              <Typography
                variant="h6"
                color="text.primary"
                gutterBottom
                sx={{ fontSize: "16px", fontWeight: "600", marginRight: "5px" }}
              >
                Follow Us
              </Typography>

              <a
                href="https://www.facebook.com/ajkasmachar/"
                target="_blank"
                color="black"
              >
                <Box
                  component="img"
                  sx={{
                    height: {
                      xs: "20px",
                      sm: "20px",
                      md: "20px",
                      lg: "20px",
                    },
                    width: {
                      xs: "20px",
                      sm: "20px",
                      md: "20px",
                      lg: "20px",
                    },
                  }}
                  src={fbLogo}
                />
              </a>

              <a
                href="https://www.instagram.com/ajkasamachar/"
                color="black"
                target="_blank"
              >
                  <Box
                  component="img"
                  sx={{
                    height: {
                      xs: "21px",
                      sm: "21px",
                      md: "21px",
                      lg: "21px",
                    },
                    width: {
                      xs: "21px",
                      sm: "21px",
                      md: "21px",
                      lg: "21px",
                    },
                    marginLeft:"3px"
                  }}
                  src={instaLogo}
                />
              </a>

              {/* <Link href="https://www.twitter.com/" color="inherit">
                <Twitter />
              </Link> */}
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Typography
              variant="body2"
              color="text.secondary"
              align="center"
              sx={{ paddingTop: "10px" }}
            >
              {"© Todaympnews | All Rights Reserved "}
              <Link
                color="inherit"
                style={{ textDecoration: "none" }}
                href="https://www.todaympnews.com/"
              ></Link>
              {new Date().getFullYear()}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
