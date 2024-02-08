// {/* <Grid
// container
// sx={{
//   height: {
//     xs: "300px",
//     sm: "300px",
//     md: "300px",
//     lg: "300px",
//   },
// }}
// >
// <Grid
//   item
//   xs={12}
//   sm={12}
//   md={4}
//   lg={4}
//   sx={{ backgroundColor: "#011e29" }}
// >
//   <Box
//     sx={{
//       display: "flex",
//       flexDirection: "column",
//       // justifyContent:"center",
//       // alignItems:"center",
//       marginTop: {
//         xs: "50px",
//         sm: "50px",
//         md: "60px",
//         lg: "60px",
//       },
//       paddingLeft: { xs: "30px", sm: "30px", md: "60px", lg: "60px" },
//       paddingRight: { xs: "30px", sm: "30px", md: "80px", lg: "80px" },
//     }}
//   >
//   {/* BREAKING NEWS AND CHUNAO */}
//     <Box
//       sx={{
//         display: "flex",
//         flexDirection: "row",
//         justifyContent: "space-between",
//       }}
//     >
//       {/* BREAKING NEWS */}
//       <Box
//         sx={{
//           borderLeft: "5px solid red",
//           marginTop: {
//             xs: "5px",
//             sm: "5px",
//             md: "10px",
//             lg: "10px",
//           },
//         }}
//       >
//         <Typography
//           sx={{
//             fontSize: {
//               xs: "16px",
//               sm: "16px",
//               md: "18px",
//               lg: "18px",
//             },
//             fontFamily: "'Mukta', sans-serif",
//             fontWeight: "600",
//             color: "#fff",
//             paddingLeft: {
//               xs: "10px",
//               sm: "10px",
//               md: "20px",
//               lg: "20px",
//             },
//             cursor: "pointer",
//           }}
//           onClick={() => {
//             navigate("/breaking-news");
//           }}
//         >
//           ब्रेकिंग न्यूज
//         </Typography>
//       </Box>

//       {/* CHUNAO */}
//       <Box
//         sx={{
//           borderLeft: "5px solid red",
//           marginTop: {
//             xs: "5px",
//             sm: "5px",
//             md: "10px",
//             lg: "10px",
//           },
//         }}
//       >
//         <Typography
//           sx={{
//             fontSize: {
//               xs: "16px",
//               sm: "16px",
//               md: "18px",
//               lg: "18px",
//             },
//             fontFamily: "'Mukta', sans-serif",
//             fontWeight: "600",
//             color: "#fff",
//             paddingLeft: {
//               xs: "10px",
//               sm: "10px",
//               md: "20px",
//               lg: "20px",
//             },
//             cursor: "pointer",
//           }}
//           onClick={() => {
//             navigate("/elections");
//           }}
//         >
//           चुनाव 2024
//         </Typography>
//       </Box>
//     </Box>
//     {/* SPORTS AND EDUCATION*/}
//     <Box
//       sx={{
//         display: "flex",
//         flexDirection: "row",
//         justifyContent: "space-between",
//       }}
//     >
//       {/* SPORTS AND EDUCATION */}
//       <Box
//         sx={{
//           borderLeft: "5px solid red",
//           marginTop: {
//             xs: "5px",
//             sm: "5px",
//             md: "10px",
//             lg: "10px",
//           },
//         }}
//       >
//         <Typography
//           sx={{
//             fontSize: {
//               xs: "25px",
//               sm: "25px",
//               md: "18px",
//               lg: "18px",
//             },
//             fontFamily: "'Mukta', sans-serif",
//             fontWeight: "600",
//             color: "#fff",
//             paddingLeft: {
//               xs: "5px",
//               sm: "5px",
//               md: "20px",
//               lg: "20px",
//             },
//             cursor: "pointer",
//           }}
//           onClick={() => {
//             navigate("/sports");
//           }}
//         >
//           स्पोर्ट्स
//         </Typography>
//       </Box>

//       {/* CHUNAO */}
//       <Box
//         sx={{
//           borderLeft: "5px solid red",
//           marginTop: {
//             xs: "5px",
//             sm: "5px",
//             md: "10px",
//             lg: "10px",
//           },
//         }}
//       >
//         <Typography
//           sx={{
//             fontSize: {
//               xs: "25px",
//               sm: "25px",
//               md: "18px",
//               lg: "18px",
//             },
//             fontFamily: "'Mukta', sans-serif",
//             fontWeight: "600",
//             color: "#fff",
//             paddingLeft: {
//               xs: "5px",
//               sm: "5px",
//               md: "20px",
//               lg: "20px",
//             },
//             cursor: "pointer",
//           }}
//           onClick={() => {
//             navigate("/education");
//           }}
//         >
//           एजुकेशन
//         </Typography>
//       </Box>
//     </Box>
//     {/* Education*/}
//     <Box
//       sx={{
//         borderLeft: "5px solid red",
//         marginTop: {
//           xs: "5px",
//           sm: "5px",
//           md: "10px",
//           lg: "10px",
//         },
//       }}
//     >
//       <Typography
//         sx={{
//           fontSize: { xs: "25px", sm: "25px", md: "18px", lg: "18px" },
//           fontFamily: "'Mukta', sans-serif",
//           fontWeight: "600",
//           color: "#fff",
//           paddingLeft: {
//             xs: "5px",
//             sm: "5px",
//             md: "20px",
//             lg: "20px",
//           },
//           cursor: "pointer",
//         }}
//         onClick={() => {
//           navigate("/education");
//         }}
//       >
//         एजुकेशन
//       </Typography>
//     </Box>
//     {/* technology*/}
//     <Box
//       sx={{
//         borderLeft: "5px solid red",
//         marginTop: {
//           xs: "5px",
//           sm: "5px",
//           md: "10px",
//           lg: "10px",
//         },
//       }}
//     >
//       <Typography
//         sx={{
//           fontSize: { xs: "25px", sm: "25px", md: "18px", lg: "18px" },
//           fontFamily: "'Mukta', sans-serif",
//           fontWeight: "600",
//           color: "#fff",
//           paddingLeft: {
//             xs: "5px",
//             sm: "5px",
//             md: "20px",
//             lg: "20px",
//           },
//           cursor: "pointer",
//         }}
//         onClick={() => {
//           navigate("/technology");
//         }}
//       >
//         टेक्नोलॉजी
//       </Typography>
//     </Box>
//     {/* manoranjan*/}
//     <Box
//       sx={{
//         borderLeft: "5px solid red",
//         marginTop: {
//           xs: "5px",
//           sm: "5px",
//           md: "10px",
//           lg: "10px",
//         },
//       }}
//     >
//       <Typography
//         sx={{
//           fontSize: { xs: "25px", sm: "25px", md: "18px", lg: "18px" },
//           fontFamily: "'Mukta', sans-serif",
//           fontWeight: "600",
//           color: "#fff",
//           paddingLeft: {
//             xs: "5px",
//             sm: "5px",
//             md: "20px",
//             lg: "20px",
//           },
//           cursor: "pointer",
//         }}
//         onClick={() => {
//           navigate("/entertainment");
//         }}
//       >
//         मनोरंजन
//       </Typography>
//     </Box>
//     {/* health*/}
//     <Box
//       sx={{
//         borderLeft: "5px solid red",
//         marginTop: {
//           xs: "5px",
//           sm: "5px",
//           md: "10px",
//           lg: "10px",
//         },
//       }}
//     >
//       <Typography
//         sx={{
//           fontSize: { xs: "25px", sm: "25px", md: "18px", lg: "18px" },
//           fontFamily: "'Mukta', sans-serif",
//           fontWeight: "600",
//           color: "#fff",
//           paddingLeft: {
//             xs: "5px",
//             sm: "5px",
//             md: "20px",
//             lg: "20px",
//           },
//           cursor: "pointer",
//         }}
//         onClick={() => {
//           navigate("/health");
//         }}
//       >
//         हेल्थ
//       </Typography>
//     </Box>
//   </Box>
// </Grid>
// <Grid
//   item
//   xs={12}
//   sm={12}
//   md={4}
//   lg={4}
//   sx={{ backgroundColor: "yellow" }}
// ></Grid>
// <Grid
//   item
//   xs={12}
//   sm={12}
//   md={4}
//   lg={4}
//   sx={{ backgroundColor: "#011e29" }}
// >
//   <Box
//     sx={{
//       display: "flex",
//       flexDirection: "column",
//       // justifyContent:"center",
//       // alignItems:"center",
//       marginTop: {
//         xs: "50px",
//         sm: "",
//         md: "60px",
//         lg: "60px",
//       },
//       paddingLeft: "40px",
//     }}
//   >
//     <Box>
//       <Typography
//         variant="h6"
//         component="div"
//         sx={{
//           fontSize: { xs: "25px", sm: "25px", md: "40px", lg: "40px" },
//           fontFamily: "'Mukta', sans-serif",
//           fontWeight: "600",
//           color: "#fff",
//         }}
//       >
//         आज का समाचार
//       </Typography>
//     </Box>
//     <Box
//       sx={{
//         display: "flex",
//         flexDirection: "row",
//         // justifyContent:"center",
//         alignItems: "center",
//       }}
//     >
//       <Typography
//         variant="h6"
//         component="div"
//         sx={{
//           fontSize: {
//             xs: "25px",
//             sm: "25px",
//             md: "20px",
//             lg: "20px",
//           },
//           fontFamily: "'Mukta', sans-serif",
//           fontWeight: "600",
//           color: "#fff",
//         }}
//       >
//         Follow Us
//       </Typography>
//       <a
//         href="https://www.facebook.com/ajkasmachar/"
//         target="_blank"
//         color="black"
//       >
//         <Box
//           component="img"
//           sx={{
//             height: {
//               xs: "20px",
//               sm: "20px",
//               md: "40px",
//               lg: "40px",
//             },
//             width: {
//               xs: "20px",
//               sm: "20px",
//               md: "40px",
//               lg: "40px",
//             },
//           }}
//           src={fbLogo}
//         />
//       </a>

//       <a
//         href="https://www.instagram.com/ajkasamachar/"
//         color="black"
//         target="_blank"
//       >
//         <Box
//           component="img"
//           sx={{
//             height: {
//               xs: "21px",
//               sm: "21px",
//               md: "40px",
//               lg: "40px",
//             },
//             width: {
//               xs: "21px",
//               sm: "21px",
//               md: "40px",
//               lg: "40px",
//             },
//             marginLeft: "3px",
//           }}
//           src={instaLogo}
//         />
//       </a>
//     </Box>
//   </Box>
// </Grid>
// </Grid> */}