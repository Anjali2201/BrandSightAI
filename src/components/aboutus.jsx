import { Grid, Typography } from "@mui/material";
import React from "react";
import car from "../Assets/car.mp4";

const Aboutus = () => {
  return (
    <Grid
      container
      xs={12}
      sx={{
        width: "100%",
        height: "auto",
        background: "#FFFFFF",
      }}
    >
      <Grid
        container
        xs={12}
        sx={{
          width: "100%",
          height: "467px",
          mt: "100px",
          background:
            "linear-gradient(90.07deg, rgba(30, 42, 93, 0.04) 30.91%, rgba(48, 62, 130, 0.04) 64.79%, rgba(60, 80, 157, 0.04) 91.94%)",
        }}
      >
        <Grid
          item
          xs={5}
          sx={{
            justifyContent: "center",
            alignItems: "center",
            px: "100px",
            display: {
              xs: "none",
              sm: "none",
              md: "block",
              lg: "block",
            },
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
            }}
          >
            <source src={car} type="video/mp4" />
          </video>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sm={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: {
              xs: "center",
              sm: "center",
              md: "flex-start",
            },
          }}
        >
          <Typography
            sx={{
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "40px",
              lineHeight: "42px",
              color: "#0E2368",
              textAlign: "left",
            }}
          >
            About Us
          </Typography>
          <Typography
            sx={{
              width: "auto",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "15px",
              lineHeight: "27px",
              color: "#444957",
              mt: "10px",
              textAlign: {
                xs: "center",
                sm: "center",
                md: "left",
              },
              p: {
                xs: "30px",
                lg: "0px",
              },
            }}
          >
            Whether you're a car enthusiast, a mechanic, or just someone who
            wants to know more about their vehicle, our website is the perfect
            tool for you. We're dedicated to providing a seamless user
            experience and our goal is to help you save time and eliminate
            guesswork when it comes to vehicle identification. So why wait? Try
            our AI-powered platform today and discover the brand of your ride in
            no time!
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Aboutus;
