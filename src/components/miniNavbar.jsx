import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import {  Typography } from "@mui/material";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";

const miniNavbar = () => {
  return (
    <div>
      <Grid item xs={12}>
        <Grid
          container
          xs={12}
          justifyContent="center"
          alignItems="center"
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            p: 3,
          }}
        >
          <Link to="/" style={{ textDecoration: "none" }}>
            <HomeIcon sx={{ fontSize: 40, color: "#0E2368" }} />
          </Link>
          <Typography
            sx={{ fontStyle: "normal", fontWeight: 700, fontSize: 25 }}
          >
            BrandSightAI.com
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default miniNavbar;
