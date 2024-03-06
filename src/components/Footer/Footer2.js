import React, { useEffect } from "react";

// MUI
import { Box, Container, Grid, Typography } from "@mui/material";

// REACT-ROUTER-DOM
import { useNavigate } from "react-router-dom";

// REDUX
import { getArticles } from "../../redux/actions/Home";
import { useSelector } from "react-redux";

// FooterLine
import FooterLine from "./FooterLine";

// Images
import ajkasamachar from "../../assets/images/Header/ajkasam.png";
import instaLogo from "../../assets/images/instagram2.png";
import fbLogo from "../../assets/images/facebook2.png";

const Footer2 = () => {
  const { Articles } = useSelector((state) => state.HomeReducer);
  const navigate = useNavigate();

  return (
    <Box>
      <Grid container sx={{ backgroundColor: "#011e29" }}>
        <Grid item xs={12} sm={12} md={0.6} lg={0.6}></Grid>
        <Grid item xs={12} sm={12} md={10.8} lg={10.8}>
          <Grid container>
            {/* GRID 1 */}
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <Box
                sx={{
                  paddingTop: {
                    xs: "40px",
                    sm: "40px",
                    md: "50px",
                    lg: "50px",
                  },
                  paddingBottom: {
                    xs: "10px",
                    sm: "10px",
                    md: "50px",
                    lg: "50px",
                  },
                  paddingLeft: {
                    xs: "40px",
                    sm: "40px",
                    md: "0px",
                    lg: "0px",
                  },
                  paddingRight: {
                    xs: "20px",
                    sm: "20px",
                    md: "0px",
                    lg: "0px",
                  },
                }}
              >
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  {/* 1 */}
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <Box sx={{ borderLeft: "5px solid red" }}>
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
                          navigate("/breaking-news");
                        }}
                      >
                        ब्रेकिंग न्यूज
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        borderLeft: "5px solid red",
                        marginLeft: {
                          xs: "140px",
                          sm: "140px",
                          md: "111px",
                          lg: "111px",
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
                  {/* 2 */}
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      marginTop: {
                        xs: "10px",
                        sm: "10px",
                        md: "20px",
                        lg: "20px",
                      },
                    }}
                  >
                    <Box sx={{ borderLeft: "5px solid red" }}>
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
                        स्पोर्ट्स
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        borderLeft: "5px solid red",
                        marginLeft: {
                          xs: "166px",
                          sm: "166px",
                          md: "140px",
                          lg: "140px",
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
                          navigate("/education");
                        }}
                      >
                        एजुकेशन
                      </Typography>
                    </Box>
                  </Box>
                  {/* 3 */}
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      marginTop: {
                        xs: "10px",
                        sm: "10px",
                        md: "20px",
                        lg: "20px",
                      },
                    }}
                  >
                    <Box sx={{ borderLeft: "5px solid red" }}>
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

                    <Box
                      sx={{
                        borderLeft: "5px solid red",
                        marginLeft: {
                          xs: "144px",
                          sm: "144px",
                          md: "116px",
                          lg: "116px",
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
                          navigate("/entertainment");
                        }}
                      >
                        मनोरंजन
                      </Typography>
                    </Box>
                  </Box>
                  {/* 4 */}
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      marginTop: {
                        xs: "10px",
                        sm: "10px",
                        md: "20px",
                        lg: "20px",
                      },
                    }}
                  >
                    <Box sx={{ borderLeft: "5px solid red" }}>
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
                          navigate("/health");
                        }}
                      >
                        हेल्थ
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        borderLeft: "5px solid red",
                        marginLeft: {
                          xs: "178px",
                          sm: "178px",
                          md: "153px",
                          lg: "153px",
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
                  </Box>
                </Box>
              </Box>
            </Grid>

            {/* GRID 2 */}
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <Box
                sx={{
                  paddingTop: {
                    xs: "0px",
                    sm: "0px",
                    md: "50px",
                    lg: "50px",
                  },
                  paddingBottom: {
                    xs: "20px",
                    sm: "20px",
                    md: "50px",
                    lg: "50px",
                  },
                  paddingLeft: {
                    xs: "40px",
                    sm: "40px",
                    md: "0px",
                    lg: "0px",
                  },
                  paddingRight: {
                    xs: "20px",
                    sm: "20px",
                    md: "0px",
                    lg: "0px",
                  },
                }}
              >
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  {/* 1 */}
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <Box sx={{ borderLeft: "5px solid red" }}>
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
                          navigate("/breaking-news");
                        }}
                      >
                        बीजेपी
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        borderLeft: "5px solid red",
                        marginLeft: {
                          xs: "166px",
                          sm: "166px",
                          md: "111px",
                          lg: "111px",
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
                        शिव सेना
                      </Typography>
                    </Box>
                  </Box>
                  {/* 2 */}
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      marginTop: {
                        xs: "10px",
                        sm: "10px",
                        md: "20px",
                        lg: "20px",
                      },
                    }}
                  >
                    <Box sx={{ borderLeft: "5px solid red" }}>
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
                        कांग्रेस
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        borderLeft: "5px solid red",
                        marginLeft: {
                          xs: "166px",
                          sm: "166px",
                          md: "111px",
                          lg: "111px",
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
                          navigate("/education");
                        }}
                      >
                        समाजवादी
                      </Typography>
                    </Box>
                  </Box>
                  {/* 3 */}
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      marginTop: {
                        xs: "10px",
                        sm: "10px",
                        md: "20px",
                        lg: "20px",
                      },
                    }}
                  >
                    <Box sx={{ borderLeft: "5px solid red" }}>
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
                        डीएमके
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        borderLeft: "5px solid red",
                        marginLeft: {
                          xs: "160px",
                          sm: "160px",
                          md: "105px",
                          lg: "105px",
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
                          navigate("/entertainment");
                        }}
                      >
                        आम आदमी पार्टी
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>

            {/* GRID 3 */}
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: {
                    xs: "center",
                    sm: "center",
                    md: "center",
                    lg: "center",
                  },
                  alignItems: {
                    xs: "center",
                    sm: "center",
                    md: "center",
                    lg: "center",
                  },
                  paddingTop: {
                    xs: "10px",
                    sm: "10px",
                    md: "50px",
                    lg: "50px",
                  },
                }}
              >
                <Box>
                  <Box
                    component="img"
                    src={ajkasamachar}
                    sx={{
                      width: {
                        xs: "100px",
                        sm: "100px",
                        md: "110px",
                        lg: "110px",
                      },
                      height: {
                        xs: "50px",
                        sm: "50px",
                        md: "50px",
                        lg: "50px",
                      },
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginLeft: {
                      xs: "0px",
                      sm: "0px",
                      md: "40px",
                      lg: "40px",
                    },
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
                    rel="noreferrer"
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
                    rel="noreferrer"
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
        <Grid item xs={12} sm={12} md={0.6} lg={0.6}></Grid>
      </Grid>
      <FooterLine />
    </Box>
  );
};

export default Footer2;
