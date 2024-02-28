import { Box, Container, Grid, Typography } from "@mui/material";
import Link from "@mui/material/Link";
import {
  Facebook,
  FiberSmartRecord,
  Instagram,
  Twitter,
} from "@mui/icons-material";

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { getArticles } from "../../redux/actions/Home";
import { useSelector } from "react-redux";

import instaLogo from "../../assets/images/instagram2.png";
import fbLogo from "../../assets/images/facebook2.png";
import "./Footer.css";

import ajkasamachar from "../../assets/images/Header/ajkasam.png"

function Footer() {
  const { Articles } = useSelector((state) => state.HomeReducer);
  const navigate = useNavigate();

  useEffect(() => {
    getArticles();
  }, []);

  return (
    // <Box
    //   sx={{
    //     width: "100%",
    //     height: "auto",
    //     backgroundColor: "#A8A8A8",
    //     paddingTop: "1rem",
    //     paddingBottom: "1rem",
    //     position: "absolute",
    //   }}
    // >
    //   <Container maxWidth="lg">
    //     <Grid container direction="column" alignItems="center">
    //       <Grid item xs={12}>
    //         <Typography color="black" variant="h5">
    //           आज का समाचार
    //         </Typography>
    //       </Grid>

    //       <Grid item xs={12}>
    //         <Box
    //           sx={{ display: "flex", flexDirection: "row", marginTop: "8px" }}
    //         >
    //           <Typography
    //             variant="h6"
    //             color="text.primary"
    //             gutterBottom
    //             sx={{ fontSize: "16px", fontWeight: "600", marginRight: "5px" }}
    //           >
    //             Follow Us
    //           </Typography>

    // <a
    //   href="https://www.facebook.com/ajkasmachar/"
    //   target="_blank"
    //   color="black"
    // >
    //   <Box
    //     component="img"
    //     sx={{
    //       height: {
    //         xs: "20px",
    //         sm: "20px",
    //         md: "20px",
    //         lg: "20px",
    //       },
    //       width: {
    //         xs: "20px",
    //         sm: "20px",
    //         md: "20px",
    //         lg: "20px",
    //       },
    //     }}
    //     src={fbLogo}
    //   />
    // </a>

    // <a
    //   href="https://www.instagram.com/ajkasamachar/"
    //   color="black"
    //   target="_blank"
    // >
    //   <Box
    //     component="img"
    //     sx={{
    //       height: {
    //         xs: "21px",
    //         sm: "21px",
    //         md: "21px",
    //         lg: "21px",
    //       },
    //       width: {
    //         xs: "21px",
    //         sm: "21px",
    //         md: "21px",
    //         lg: "21px",
    //       },
    //       marginLeft: "3px",
    //     }}
    //     src={instaLogo}
    //   />
    // </a>

    //         </Box>
    //       </Grid>

    // <Grid item xs={12}>
    //   <Typography
    //     variant="body2"
    //     color="text.secondary"
    //     align="center"
    //     sx={{ paddingTop: "10px" }}
    //   >
    //     {"© Todaympnews | All Rights Reserved "}
    //     <Link
    //       color="inherit"
    //       style={{ textDecoration: "none" }}
    //       href="https://www.todaympnews.com/"
    //     ></Link>
    //     {new Date().getFullYear()}
    //   </Typography>
    // </Grid>
    //     </Grid>
    //   </Container>
    // </Box>
    <>
      {/* <Box
        sx={{
          height: {
            xs: "300px",
            sm: "300",
            lg: "350px",
            md: "350px",
          },
          width: {
            xs: "100%",
            sm: "100%",
            lg: "100%",
            md: "100%",
          },
          backgroundColor: "#011e29",
        }}
      >
        <Grid container>
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            lg={4}
            sx={{
              backgroundColor: "red",
              height: {
            xs: "300px",
            sm: "300",
            lg: "350px",
            md: "350px",
          },
          width: {
            xs: "100%",
            sm: "100%",
            lg: "100%",
            md: "100%",
          },
            }}
          >
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            lg={4}
            sx={{
              backgroundColor: "red",
            }}
          >
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            lg={4}
            sx={{
              backgroundColor: "red",
            }}
          >
          </Grid>
        </Grid>
      </Box> */}
      <Grid container>
        <Grid
          item
          xs={12}
          sm={12}
          md={0.6}
          lg={0.6}
          sx={{ backgroundColor: "#011e29" }}
        ></Grid>
        <Grid item xs={12} sm={12} md={11} lg={11}>
          <Grid
            container
            sx={{
              height: {
                xs: "300px",
                sm: "300px",
                md: "250px",
                lg: "250px",
              },
            }}
          >
            {/* GRID 1 */}
            <Grid
              item
              xs={12}
              sm={12}
              md={4}
              lg={4}
              sx={{ backgroundColor: "#011e29" }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: {
                    xs: "20px",
                    sm: "20px",
                    md: "60px",
                    lg: "60px",
                  },
                  paddingLeft: {
                    xs: "30px",
                    sm: "30px",
                    md: "0px",
                    lg: "0px",
                  },
                  paddingRight: {
                    xs: "30px",
                    sm: "30px",
                    md: "80px",
                    lg: "80px",
                  },
                }}
              >
                {/* BREAKING NEWS AND CHUNAO */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  {/* BREAKING NEWS */}
                  <Box
                    sx={{
                      borderLeft: "5px solid red",
                      marginTop: {
                        xs: "5px",
                        sm: "5px",
                        md: "10px",
                        lg: "10px",
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "16px",
                          sm: "16px",
                          md: "18px",
                          lg: "18px",
                        },
                        fontFamily: "'Mukta', sans-serif",
                        fontWeight: "600",
                        color: "#fff",
                        paddingLeft: {
                          xs: "10px",
                          sm: "10px",
                          md: "25px",
                          lg: "25px",
                        },
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        navigate("/breaking-news");
                      }}
                    >
                      ब्रेकिंग न्यूज
                    </Typography>
                  </Box>

                  {/* CHUNAO */}
                  <Box
                    sx={{
                      borderLeft: "5px solid red",
                      marginTop: {
                        xs: "5px",
                        sm: "5px",
                        md: "10px",
                        lg: "10px",
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "16px",
                          sm: "16px",
                          md: "18px",
                          lg: "18px",
                        },
                        fontFamily: "'Mukta', sans-serif",
                        fontWeight: "600",
                        color: "#fff",
                        paddingLeft: {
                          xs: "10px",
                          sm: "10px",
                          md: "20px",
                          lg: "20px",
                        },
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        navigate("/elections");
                      }}
                    >
                      चुनाव 2024
                    </Typography>
                  </Box>
                </Box>

                {/* SPORTS AND EDUCATION*/}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginTop: {
                      xs: "10px",
                      sm: "10px",
                      md: "5px",
                      lg: "5px",
                    },
                  }}
                >
                  {/* SPORTS */}
                  <Box
                    sx={{
                      borderLeft: "5px solid red",
                      marginTop: {
                        xs: "5px",
                        sm: "5px",
                        md: "10px",
                        lg: "10px",
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "16px",
                          sm: "16px",
                          md: "18px",
                          lg: "18px",
                        },
                        fontFamily: "'Mukta', sans-serif",
                        fontWeight: "600",
                        color: "#fff",
                        paddingLeft: {
                          xs: "10px",
                          sm: "10px",
                          md: "20px",
                          lg: "20px",
                        },
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        navigate("/sports");
                      }}
                    >
                      स्पोर्ट्स
                    </Typography>
                  </Box>

                  {/* education */}
                  <Box
                    sx={{
                      borderLeft: "5px solid red",
                      marginTop: {
                        xs: "5px",
                        sm: "5px",
                        md: "10px",
                        lg: "10px",
                      },
                      paddingLeft: {
                        xs: "12px",
                        sm: "12px",
                        md: "20px",
                        lg: "20px",
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "16px",
                          sm: "16px",
                          md: "18px",
                          lg: "18px",
                        },
                        fontFamily: "'Mukta', sans-serif",
                        fontWeight: "600",
                        color: "#fff",
                        paddingRight: {
                          xs: "15px",
                          sm: "5px",
                          md: "20px",
                          lg: "20px",
                        },
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        navigate("/education");
                      }}
                    >
                      एजुकेशन
                    </Typography>
                  </Box>
                </Box>
                {/* TECHNOLOGY AND MANORANJAN*/}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginTop: {
                      xs: "10px",
                      sm: "10px",
                      md: "5px",
                      lg: "5px",
                    },
                  }}
                >
                  {/* TECHNOLOGY */}
                  <Box
                    sx={{
                      borderLeft: "5px solid red",
                      marginTop: {
                        xs: "5px",
                        sm: "5px",
                        md: "10px",
                        lg: "10px",
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "16px",
                          sm: "16px",
                          md: "18px",
                          lg: "18px",
                        },
                        fontFamily: "'Mukta', sans-serif",
                        fontWeight: "600",
                        color: "#fff",
                        paddingLeft: {
                          xs: "10px",
                          sm: "10px",
                          md: "20px",
                          lg: "20px",
                        },
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        navigate("/technology");
                      }}
                    >
                      टेक्नोलॉजी
                    </Typography>
                  </Box>

                  {/* manoranjan*/}
                  <Box
                    sx={{
                      borderLeft: "5px solid red",
                      marginTop: {
                        xs: "5px",
                        sm: "5px",
                        md: "10px",
                        lg: "10px",
                      },
                      paddingLeft: {
                        xs: "16px",
                        sm: "16px",
                        md: "24px",
                        lg: "24px",
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "16px",
                          sm: "16px",
                          md: "18px",
                          lg: "18px",
                        },
                        fontFamily: "'Mukta', sans-serif",
                        fontWeight: "600",
                        color: "#fff",
                        paddingRight: {
                          xs: "15px",
                          sm: "5px",
                          md: "20px",
                          lg: "20px",
                        },
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        navigate("/education");
                      }}
                    >
                      मनोरंजन
                    </Typography>
                  </Box>
                </Box>
                {/* Health*/}
                <Box
                  sx={{
                    borderLeft: "5px solid red",
                    marginTop: {
                      xs: "10px",
                      sm: "10px",
                      md: "10px",
                      lg: "10px",
                    },
                    paddingLeft: {
                      xs: "12px",
                      sm: "12px",
                      md: "20px",
                      lg: "20px",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "16px",
                        sm: "16px",
                        md: "18px",
                        lg: "18px",
                      },
                      fontFamily: "'Mukta', sans-serif",
                      fontWeight: "600",
                      color: "#fff",
                      paddingRight: {
                        xs: "15px",
                        sm: "5px",
                        md: "20px",
                        lg: "20px",
                      },
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      navigate("/health");
                    }}
                  >
                    हेल्थ
                  </Typography>
                </Box>
              </Box>
            </Grid>

            {/* GRid 2 */}
            <Grid
              item
              xs={12}
              sm={12}
              md={4}
              lg={4}
              // sx={{ backgroundColor: "yellow" }}
              sx={{ backgroundColor: "#011e29" }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: {
                    xs: "6px",
                    sm: "6px",
                    md: "60px",
                    lg: "60px",
                  },
                  paddingLeft: {
                    xs: "30px",
                    sm: "30px",
                    md: "0px",
                    lg: "0px",
                  },
                  paddingRight: {
                    xs: "63px",
                    sm: "63px",
                    md: "80px",
                    lg: "80px",
                  },
                }}
              >
                {/* Todays news and BJP */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  {/* Todays news */}
                  <Box
                    sx={{
                      borderLeft: "5px solid red",
                      marginTop: {
                        xs: "5px",
                        sm: "5px",
                        md: "10px",
                        lg: "10px",
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "16px",
                          sm: "16px",
                          md: "18px",
                          lg: "18px",
                        },
                        fontFamily: "'Mukta', sans-serif",
                        fontWeight: "600",
                        color: "#fff",
                        paddingLeft: {
                          xs: "10px",
                          sm: "10px",
                          md: "25px",
                          lg: "25px",
                        },
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        navigate("/election/todays-news", {
                          state: {
                            data: Articles?.filter(
                              (item) => item.subcategory[0] === "todays-news"
                            ),
                          },
                        });
                      }}
                    >
                      टुडे न्यूज़
                    </Typography>
                  </Box>

                  {/* BJP */}
                  <Box
                    sx={{
                      borderLeft: "5px solid red",
                      marginTop: {
                        xs: "5px",
                        sm: "5px",
                        md: "10px",
                        lg: "10px",
                      },
                      // backgroundColor: "green",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "16px",
                          sm: "16px",
                          md: "18px",
                          lg: "18px",
                        },
                        fontFamily: "'Mukta', sans-serif",
                        fontWeight: "600",
                        color: "#fff",
                        paddingLeft: {
                          xs: "10px",
                          sm: "10px",
                          md: "20px",
                          lg: "20px",
                        },
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        console.log(
                          Articles?.filter(
                            (item) => item.subcategory[0] === "bjp"
                          ),
                          "BJPpppppp"
                        );
                        // navigate('/elections/politics/bjp', { state: { data: Articles?.filter(item => item.subcategory[0] === "bjp") } });
                        navigate("/election/bjp", {
                          state: {
                            data: Articles?.filter(
                              (item) => item.subcategory[0] === "bjp"
                            ),
                          },
                        });
                      }}
                    >
                      बीजेपी
                    </Typography>
                  </Box>
                </Box>
                {/* SHIV SENA AND CONGRESS*/}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginTop: {
                      xs: "10px",
                      sm: "10px",
                      md: "5px",
                      lg: "5px",
                    },
                  }}
                >
                  {/* Shiv sena  */}
                  <Box
                    sx={{
                      borderLeft: "5px solid red",
                      marginTop: {
                        xs: "5px",
                        sm: "5px",
                        md: "10px",
                        lg: "10px",
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "16px",
                          sm: "16px",
                          md: "18px",
                          lg: "18px",
                        },
                        fontFamily: "'Mukta', sans-serif",
                        fontWeight: "600",
                        color: "#fff",
                        paddingLeft: {
                          xs: "10px",
                          sm: "10px",
                          md: "20px",
                          lg: "20px",
                        },
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        console.log(
                          Articles?.filter(
                            (item) => item.subcategory[0] === "shiv-sena"
                          ),
                          "BJPpppppp"
                        );
                        // navigate('/elections/politics/shivsena', { state: { data: Articles?.filter(item => item.subcategory[0] === "shiv sena") } });
                        navigate("/election/shiv-sena", {
                          state: {
                            data: Articles?.filter(
                              (item) => item.subcategory[0] === "shiv-sena"
                            ),
                          },
                        });
                      }}
                    >
                      शिव सेना
                    </Typography>
                  </Box>

                  {/* congress */}
                  <Box
                    sx={{
                      borderLeft: "5px solid red",
                      marginTop: {
                        xs: "5px",
                        sm: "5px",
                        md: "10px",
                        lg: "10px",
                      },
                      // backgroundColor: "green",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "16px",
                          sm: "16px",
                          md: "18px",
                          lg: "18px",
                        },
                        fontFamily: "'Mukta', sans-serif",
                        fontWeight: "600",
                        color: "#fff",
                        paddingLeft: {
                          xs: "10px",
                          sm: "10px",
                          md: "20px",
                          lg: "20px",
                        },
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        console.log(
                          Articles?.filter(
                            (item) => item.subcategory[0] === "congress"
                          ),
                          "congressssss"
                        );
                        // navigate('/elections/politics/congress', { state: { data: Articles?.filter(item => item.subcategory[0] === "congress") } });
                        navigate("/election/congress", {
                          state: {
                            data: Articles?.filter(
                              (item) => item.subcategory[0] === "congress"
                            ),
                          },
                        });
                      }}
                    >
                      कांग्रेस
                    </Typography>
                  </Box>
                </Box>
                {/* SAMAJWADI AND DMK*/}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginTop: {
                      xs: "10px",
                      sm: "10px",
                      md: "5px",
                      lg: "5px",
                    },
                  }}
                >
                  {/* samajwadi  */}
                  <Box
                    sx={{
                      borderLeft: "5px solid red",
                      marginTop: {
                        xs: "5px",
                        sm: "5px",
                        md: "10px",
                        lg: "10px",
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "16px",
                          sm: "16px",
                          md: "18px",
                          lg: "18px",
                        },
                        fontFamily: "'Mukta', sans-serif",
                        fontWeight: "600",
                        color: "#fff",
                        paddingLeft: {
                          xs: "10px",
                          sm: "10px",
                          md: "20px",
                          lg: "20px",
                        },
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        console.log(
                          Articles?.filter(
                            (item) => item.subcategory[0] === "samajwadi"
                          ),
                          "BJPpppppp"
                        );
                        // navigate('/elections/politics/samajwadi', { state: { data: Articles?.filter(item => item.subcategory[0] === "samajwadi") } });
                        navigate("/election/samajwadi", {
                          state: {
                            data: Articles?.filter(
                              (item) => item.subcategory[0] === "samajwadi"
                            ),
                          },
                        });
                      }}
                    >
                      समाजवादी
                    </Typography>
                  </Box>

                  {/* DMK */}
                  <Box
                    sx={{
                      borderLeft: "5px solid red",
                      marginTop: {
                        xs: "5px",
                        sm: "5px",
                        md: "10px",
                        lg: "10px",
                      },
                      // backgroundColor: "green",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "16px",
                          sm: "16px",
                          md: "18px",
                          lg: "18px",
                        },
                        fontFamily: "'Mukta', sans-serif",
                        fontWeight: "600",
                        color: "#fff",
                        paddingLeft: {
                          xs: "5px",
                          sm: "5px",
                          md: "15px",
                          lg: "15px",
                        },
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        console.log(
                          Articles?.filter(
                            (item) => item.subcategory[0] === "congress"
                          ),
                          "congressssss"
                        );
                        // navigate('/elections/politics/congress', { state: { data: Articles?.filter(item => item.subcategory[0] === "congress") } });
                        navigate("/election/dmk", {
                          state: {
                            data: Articles?.filter(
                              (item) => item.subcategory[0] === "dmk"
                            ),
                          },
                        });
                      }}
                    >
                      डीएमके
                    </Typography>
                  </Box>
                </Box>
                {/* AAM AMDI PARTY*/}
                <Box
                  sx={{
                    borderLeft: "5px solid red",
                    marginTop: {
                      xs: "10px",
                      sm: "10px",
                      md: "10px",
                      lg: "10px",
                    },
                    paddingLeft: {
                      xs: "12px",
                      sm: "12px",
                      md: "20px",
                      lg: "20px",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "16px",
                        sm: "16px",
                        md: "18px",
                        lg: "18px",
                      },
                      fontFamily: "'Mukta', sans-serif",
                      fontWeight: "600",
                      color: "#fff",
                      paddingRight: {
                        xs: "15px",
                        sm: "5px",
                        md: "20px",
                        lg: "20px",
                      },
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      console.log(
                        Articles?.filter(
                          (item) => item.subcategory[0] === "aam-aadmi-party"
                        ),
                        "aam-aadmi-party"
                      );
                      // navigate('/elections/politics/others', { state: { data: Articles?.filter(item => item.subcategory[0] === "other") } });
                      navigate("/election/aam-aadmi-party", {
                        state: {
                          data: Articles?.filter(
                            (item) => item.subcategory[0] === "aam-aadmi-party"
                          ),
                        },
                      });
                    }}
                  >
                    आम आदमी पार्टी
                  </Typography>
                </Box>
              </Box>
            </Grid>

            {/* GRID 3 */}
            <Grid
              item
              xs={12}
              sm={12}
              md={4}
              lg={4}
              sx={{ backgroundColor: "#011e29" }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent:"center",
                  alignItems:"center",
                  marginTop: {
                    xs: "30px",
                    sm: "30px",
                    md: "60px",
                    lg: "60px",
                  },
                 
                }}
              >
                {/* <Box>
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{
                      fontSize: {
                        xs: "25px",
                        sm: "25px",
                        md: "40px",
                        lg: "40px",
                      },
                      fontFamily: "'Mukta', sans-serif",
                      fontWeight: "600",
                      color: "#fff",
                    }}
                  >
                    आज का समाचार
                  </Typography>
                </Box> */}
                <Box
              component="img"
              src={ajkasamachar}
              sx={{
                width: {
                  xs: "90px",
                  sm: "90px",
                  md: "150px",
                  lg: "150px",
                },
                height: {
                  xs: "40px",
                  sm: "40px",
                  md: "70px",
                  lg: "70px",
                },
                // marginLeft:{
                //   xs: "30px",
                //   sm: "30px",
                //   md: "0px",
                //   lg: "0px",
                // }
              }}
            />

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    // justifyContent:"center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{
                      fontSize: {
                        xs: "15px",
                        sm: "15px",
                        md: "20px",
                        lg: "20px",
                      },
                      fontFamily: "'Mukta', sans-serif",
                      fontWeight: "600",
                      color: "#fff",
                    }}
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
                          xs: "50px",
                          sm: "50px",
                          md: "70px",
                          lg: "70px",
                        },
                        width: {
                          xs: "50px",
                          sm: "50px",
                          md: "70px",
                          lg: "70px",
                        },
                        marginTop: "2px",
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
                          xs: "48px",
                          sm: "48px",
                          md: "70px",
                          lg: "70px",
                        },
                        width: {
                          xs: "48px",
                          sm: "48px",
                          md: "70px",
                          lg: "70px",
                        },
                        marginLeft: {
                          xs: "-10px",
                          sm: "-10px",
                          md: "-20px",
                          lg: "-20px",
                        },
                        marginTop: "2px",
                      }}
                      src={instaLogo}
                    />
                  </a>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>

        {/* COPYRIGHT */}
        <Grid
          item
          xs={12}
          sm={12}
          md={0.4}
          lg={0.4}
          sx={{ backgroundColor: "#011e29" }}
        ></Grid>
      </Grid>

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
  );
}

export default Footer;
