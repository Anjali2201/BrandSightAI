import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import video from "../Assets/traffic.mp4";
import { Button, Typography } from "@mui/material";

const LandingPage = () => {
  return (
    <Grid
      container
      xs={12}
      justifyContent="center"
      sx={{
        p: 3,
      }}
    >
      {/* <Grid
        item
        xs={12}
        sx={{
          display: {
            xs: "block",
            sm: "block",
            md: "none",
            lg: "none",
          },
        }}
      >
        <video autoPlay muted loop style={{ width: "100%", height: "100%" }}>
          <source src={video} type="video/mp4" />
        </video>
      </Grid> */}
      {/* --------- Left Side ----------- */}

      <Grid
        container
        xs={12}
        md={6}
        sm={6}
        justifyContent="center"
        alignItems="left"
        sx={{
          px: {
            xs: "20px",
            sm: "20px",
            md: "100px",
          },

          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography sx={{ fontStyle: "normal", fontWeight: 700, fontSize: 25 }}>
          BrandSightAI.com
        </Typography>
        <Typography
          sx={{
            width: "auto",
            mt: "50px",
            fontStyle: "normal",
            fontWeight: 700,
            fontSize: "69px",
            lineHeight: "69px",
            color: "#6096ba",
            textAlign: "left",
          }}
        >
          "Unleash the <br />
          <span style={{ color: "#0E2368" }}>Power of AI </span> <br />
          to Identify Your Ride!"
        </Typography>
        <Typography
          sx={{
            width: "auto",
            my: 2,
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "16.4447px",
            lineHeight: "27px",
            color: "#444957",
            textAlign: "left",
          }}
        >
          "Get instant brand recognition for your vehicle with our cutting-edge
          AI technology. Say goodbye to the guessing game and hello to accurate
          identification!"
        </Typography>

        <Button
          href="/detection"
          variant="contained"
          sx={{
            display: "flex",
            flexDirection: "row",
            padding: "14px 34px",
            gap: "7px",
            mt: 3,
            width: "190px",
            height: "63px",
            background: "#0E2368",
            borderRadius: "34px",
            color: "#FFFFFF",
            fontSize: "14px",
            fontWeight: 700,
          }}
        >
          Explore Now!
        </Button>
      </Grid>

      {/* --------- Right Side ----------- */}
      <Grid
        item
        md={6}
        sm={6}
        sx={{
          display: {
            xs: "none",
            sm: "none",
            md: "block",
            lg: "block",
          },
          m: 0,
        }}
      >
        <video
          autoPlay
          muted
          loop
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            border: 0,
          }}
        >
          <source src={video} type="video/mp4" />
        </video>
      </Grid>
    </Grid>
  );
};

export default LandingPage;
