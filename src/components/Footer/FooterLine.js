import { Box, Container, Grid, Typography } from "@mui/material";
import Link from "@mui/material/Link";
import React, { useEffect } from "react";


const FooterLine = () => {
  return (
    <>
       <Grid container>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          sx={{ backgroundColor: "#011e29" }}
        >
          <Link
            style={{ textDecoration: "none" }}
            href="https://www.todaympnews.com/"
          >
            <Typography
              variant="body2"
              color="text.secondary"
              align="center"
              sx={{
                paddingTop: "10px",
                paddingBottom: "10px",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              © Todaympnews | All Rights Reserved {" "}
              {new Date().getFullYear()}
            </Typography>
          </Link>
        </Grid>
      </Grid> 
    </>
  )
}

export default FooterLine