import React, { useEffect, Suspense, lazy, useState, useCallback } from "react";

// MATERIAL-UI
import { Typography, Grid, Box } from "@mui/material";

// REACT-HELMET
import { Helmet } from "react-helmet";

// CARD
import { CardActionArea, CardMedia, CardContent, Card } from "@mui/material";

// CSS
import "./Fullnews.css";

// REACT-ROUTER-DOM
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// REDUX
import { getArticleById, getRelatedArticle } from "../../redux/actions/Home";
import { useSelector } from "react-redux";

// IMAGES
import JanusAdd from "../../assets/images/Janus.jpg";
import R2 from "../../assets/images/R2.png";
import janusAdver from "../../assets/images/JanusAdvertisement.jpeg";


import Fullpageadvertisement from "../FullPageAdvertisement/Fullpageadvertisement";
// LAZY-LOAD
import LazyLoad from "react-lazyload";

function createMarkup(htmlContent) {
  return { __html: htmlContent };
}

const FullNews = () => {
  const { param3 } = useParams();

  const [ArticleId, setArticleId] = useState("");
  const [Page, setPage] = useState(1);

  const FullArticle = useSelector((state) => state.HomeReducer.FullArticle);
  const RelatedArticles = useSelector((state) => state.HomeReducer.Related);

  // const handleScroll = () => {
  //   const { scrollTop, clientHeight, scrollHeight } = document.documentElement || document.body;

  //   if (scrollTop + clientHeight >= scrollHeight - 100) {

  //   }
  // };

  useEffect(() => {
    // getArticleById(param3)
    getArticleById(param3).then((res) => {
      getRelatedArticle(res?._id);
      setArticleId(res?._id);
    });
  }, []);

  let handleScroll = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      // When the user reaches the bottom of the page
      getRelatedArticle(ArticleId, RelatedArticles?.page + 1);
    }
  }, [ArticleId, RelatedArticles]);

  useEffect(() => {
    // Add event listener for scroll when component mounts
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  const navigate = useNavigate();
  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
        <meta
          name="google-site-verification"
          content="bbYxZyvg0xdO06ERBW-d0lDObNAaAyf47w8mh5rdk_M"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>
          {FullArticle?.seotitle ? FullArticle?.seotitle : FullArticle?.title}
        </title>
        <meta
          name="description"
          content={
            FullArticle?.seodescription
              ? FullArticle?.seodescription
              : FullArticle?.description
          }
        />
      </Helmet>

      <Box
        sx={{ marginTop: { xs: "60px", sm: "60px", md: "80px", lg: "80px" } }}
      >
        <Grid
          container
          sx={{
            // backgroundColor: "green",
            marginTop: "10px",
          }}
        >
          <Grid
            xs={12}
            sm={12}
            md={0.6}
            lg={0.6}
            // sx={{ backgroundColor: "orange" }}
          ></Grid>

          <Grid
            item
            xs={12}
            sm={12}
            md={8.5}
            lg={8.5}
            sx={{
              width: "800px",
              alignItems: "center",
              // backgroundColor: "aqua",
            }}
          >
            {/* TITLE */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                paddingLeft: { xs: "5px", sm: "5px", md: "0px", lg: "0px" },
                paddingRight: { xs: "5px", sm: "5px", md: "0px", lg: "0px" },
                height: "auto",
              }}
            >
              <Box
                component="img"
                sx={{
                  width: {
                    xs: "0px",
                    sm: "0px",
                    md: "23px",
                    lg: "23px",
                  },
                  height: {
                    xs: "0px",
                    sm: "0px",
                    md: "23px",
                    lg: "23px",
                  },
                  marginTop: { xs: "12px", sm: "12px", md: "9px", lg: "9px" },
                }}
                alt="redTriangleArrow"
                src={R2}
              />

              <Typography
                sx={{
                  color: "#D2122E",
                  fontSize: { xs: "25px", sm: "25px", md: "27px", lg: "27px" },
                  fontFamily: " 'Mukta', sans-serif",
                  fontWeight: "600",
                  textAlign: "justify",
                  marginTop: { xs: "3px", sm: "3px", md: "0px", lg: "0px" },
                  paddingLeft: { xs: "5px", sm: "5px", md: "5px", lg: "5px" },
                  paddingRight: { xs: "5px", sm: "5px", md: "5px", lg: "5px" },
                  // wordSpacing: "-1px"
                  lineHeight: { xs: "1.2", sm: "1.2" },
                  paddingTop: "3px",
                  paddingBottom: "3px",
                }}
              >
                {FullArticle?.title}
              </Typography>
            </Box>

            {/* IMAGE */}
            <Box>
              <Box
                component="img"
                sx={{
                  width: {
                    xs: "100%",
                    sm: "100%",
                    md: "100%",
                    lg: "100%",
                  },
                  height: {
                    xs: "100%",
                    sm: "100%",
                    md: "100%",
                    lg: "100%",
                  },
                  padding: {
                    xs: "10px",
                    sm: "10px",
                    md: "0px",
                    lg: "0px",
                  },
                }}
                alt={FullArticle?.title}
                src={FullArticle?.photo}
              />
            </Box>

            {/* DESCRIPTION */}
            <Box>
              <Typography
                sx={{
                  // marginTop: "10px",
                  fontSize: { xs: "17px", sm: "17px", md: "19px", lg: "19px" },
                  backgroundColor: "#fff",
                  // fontFamily: "'Noto Sans', sans-serif",
                  fontFamily: " 'Mukta', sans-serif",

                  fontWeight: "500",
                  textAlign: "justify",
                  paddingLeft: { xs: "10px", sm: "10px", md: "0px", lg: "0px" },
                  paddingRight: {
                    xs: "10px",
                    sm: "10px",
                    md: "0px",
                    lg: "0px",
                  },
                }}
                dangerouslySetInnerHTML={createMarkup(FullArticle?.description)}
              />
            </Box>

            {/* Related Articles */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                paddingLeft: { xs: "5px", sm: "5px", md: "0px", lg: "0px" },
                paddingRight: { xs: "5px", sm: "5px", md: "0px", lg: "0px" },
                height: "auto",
              }}
            >
              <Box
                component="img"
                sx={{
                  width: {
                    xs: "0px",
                    sm: "0px",
                    md: "23px",
                    lg: "23px",
                  },
                  height: {
                    xs: "0px",
                    sm: "0px",
                    md: "23px",
                    lg: "23px",
                  },
                  marginTop: { xs: "12px", sm: "12px", md: "9px", lg: "9px" },
                }}
                alt="redTriangleArrow"
                src={R2}
              />
              <Typography
                sx={{
                  color: "#D2122E",
                  fontSize: {
                    xs: "25px",
                    sm: "25px",
                    md: "27px",
                    lg: "27px",
                  },
                  fontFamily: " 'Mukta', sans-serif",
                  fontWeight: "600",
                  marginBottom: {
                    xs: "10px",
                    sm: "10px",
                    md: "30px",
                    lg: "30px",
                  },
                  paddingLeft: {
                    xs: "10px",
                    sm: "10px",
                    md: "5px",
                    lg: "5px",
                  },
                }}
              >
                {/* संबंधित लेख... */}
                रिलेटेड न्यूज़
              </Typography>
            </Box>

            <LazyLoad>
              <Grid container spacing={1}>
                {RelatedArticles?.data?.map((item, index) => (
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={4}
                    lg={4}
                    onClick={() => {
                      console.log("navigate", item);
                      navigate(
                        `/${item?.category[0]}/${item?.subcategory[0]}/${item?.engtitle}`,
                        { state: { data: item } }
                      );
                      window.location.reload();
                    }}
                    sx={{
                      paddingLeft: {
                        xs: "10px",
                        sm: "10px",
                        md: "0px",
                        lg: "0px",
                      },
                      paddingRight: {
                        xs: "10px",
                        sm: "10px",
                        md: "0px",
                        lg: "0px",
                      },
                      marginBottom: {
                        xs: "10px",
                        sm: "10px",
                        md: "10px",
                        lg: "10px",
                      },
                      display:"flex",
                      justifyContent:{
                        xs:"center",
                        sm:"center",
                        md:"none",
                        lg:"none"
                      },
                      alignItems:{
                        xs:"center",
                        sm:"center",
                        md:"none",
                        lg:"none"
                      }
                      // backgroundColor:"grey"
                    }}
                  >
                    <Card
                      variant="outlined"
                      sx={{ border: "1px solid #D2122E" }}
                    >
                      <CardActionArea>
                        <Box>
                          <CardMedia
                            component="img"
                            height="160"
                            image={item?.photo}
                            alt="Main Image"
                          />
                        </Box>
                        <CardContent>
                          <Box sx={{}}>
                            <Typography
                              gutterBottom
                              sx={{
                                display: "-webkit-box",
                                overflow: "hidden",
                                WebkitBoxOrient: "vertical",
                                WebkitLineClamp: 2,
                                color: "#D2122E",
                                fontSize: {
                                  xs: "16px",
                                  sm: "16px",
                                  md: "17px",
                                  lg: "17px",
                                },
                                fontFamily: " 'Mukta', sans-serif",
                                fontWeight: "600",
                                // textAlign: "justify",
                                wordSpacing: "1px",
                              }}
                            >
                              {item?.title}
                            </Typography>
                            <Typography
                              color="text.secondary"
                              sx={{
                                display: "-webkit-box",
                                overflow: "hidden",
                                WebkitBoxOrient: "vertical",
                                WebkitLineClamp: 3,
                                color: "black",
                                fontSize: {
                                  xs: "16px",
                                  sm: "16px",
                                  md: "16px",
                                  lg: "16px",
                                },
                                fontWeight: "500",
                                fontFamily: " 'Mukta', sans-serif",
                                // textAlign: "justify"
                              }}
                              dangerouslySetInnerHTML={createMarkup(
                                item?.description
                              )}
                            />
                          </Box>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </LazyLoad>
          </Grid>

          {/* Advertisment */}
          <Grid
            item
            xs={12}
            sm={12}
            md={2.5}
            lg={2.5}
            sx={{
              // backgroundColor: "green",
              // marginTop:"10px"
            }}
          >
          <Fullpageadvertisement/>
          </Grid>

          <Grid
            item
            xs={12}
            sm={12}
            md={0.4}
            lg={0.4}
            // sx={{ backgroundColor: "orange" }}
          ></Grid>
        </Grid>

        <LazyLoad>
          {/* <Grid container>
            <Grid item xs={12} sm={12} md={0.6} lg={0.6}></Grid>
            <Grid item xs={12} sm={12} md={8.5} lg={8.5}>
              <Grid container spacing={3}>
                {RelatedArticles?.data?.map((item, index) => (
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={4}
                    lg={4}
                    onClick={() => {
                      console.log("navigate", item);
                      navigate(
                        `/${item?.category[0]}/${item?.subcategory[0]}/${item?.engtitle}`,
                        { state: { data: item } }
                      );
                      window.location.reload();
                    }}
                    sx={{
                      paddingLeft: {
                        xs: "10px",
                        sm: "10px",
                        md: "0px",
                        lg: "0px",
                      },
                      paddingRight: {
                        xs: "10px",
                        sm: "10px",
                        md: "0px",
                        lg: "0px",
                      },
                      marginBottom: {
                        xs: "10px",
                        sm: "10px",
                        md: "10px",
                        lg: "10px",
                      },
                      // backgroundColor:"grey"
                    }}
                  >
                    <Card
                      variant="outlined"
                      sx={{ border: "1px solid #D2122E" }}
                    >
                      <CardActionArea>
                        <Box>
                          <CardMedia
                            component="img"
                            height="160"
                            image={item?.photo}
                            alt="Main Image"
                          />
                        </Box>
                        <CardContent>
                          <Box sx={{}}>
                            <Typography
                              gutterBottom
                              sx={{
                                display: "-webkit-box",
                                overflow: "hidden",
                                WebkitBoxOrient: "vertical",
                                WebkitLineClamp: 2,
                                color: "#D2122E",
                                fontSize: "16px",
                                fontSize: {
                                  xs: "16px",
                                  sm: "16px",
                                  md: "17px",
                                  lg: "17px",
                                },
                                fontFamily: " 'Mukta', sans-serif",
                                fontWeight: "600",
                                // textAlign: "justify",
                                wordSpacing: "1px",
                              }}
                            >
                              {item?.title}
                            </Typography>
                            <Typography
                              color="text.secondary"
                              sx={{
                                display: "-webkit-box",
                                overflow: "hidden",
                                WebkitBoxOrient: "vertical",
                                WebkitLineClamp: 3,
                                color: "black",
                                fontSize: {
                                  xs: "16px",
                                  sm: "16px",
                                  md: "16px",
                                  lg: "16px",
                                },
                                fontWeight: "500",
                                fontFamily: " 'Mukta', sans-serif",
                                // textAlign: "justify"
                              }}
                              dangerouslySetInnerHTML={createMarkup(
                                item?.description
                              )}
                            />
                          </Box>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={2.9} lg={2.9}></Grid>
          </Grid> */}
        </LazyLoad>
      </Box>
    </>
  );
};

export default FullNews;
