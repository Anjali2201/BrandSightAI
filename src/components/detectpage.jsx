import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { Button, Divider, Typography } from "@mui/material";
import { useState } from "react";

const Detectpage = () => {
  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
  };
  return (
    <div>
      <Grid
        container
        xs={12}
        sx={{
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          p: 1,
        }}
      >
        {/* --------- Left Side ----------- */}

        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              width: "auto",
              mt: "50px",
              fontStyle: "normal",
              fontWeight: "bold",
              fontSize: "30px",
              lineHeight: "30px",
              color: "#0E2368",
              textAlign: "left",
            }}
          >
            Upload an image of a vehicle and we'll tell you the brand!
          </Typography>

          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            style={{ display: "none" }}
            id="image-upload"
          />
          <label htmlFor="image-upload">
            <Button
              variant="contained"
              color="primary"
              component="span"
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
              Upload Image
            </Button>
          </label>
        </Grid>
        <Grid container xs={6} justifyContent="center">
          {image && (
            <Grid
              item
              sx={{
                mt: 3,
                borderRadius: "34px",
                border: "1px solid #0E2368",
                padding: "10px",
                width: "700px",
                height: "500px",
              }}
            >
              <img
                src={image}
                alt="detect"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Grid>
          )}
        </Grid>
        <Grid
          container
          xs={5}
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "400px",
          }}
        >
          <Typography
            sx={{
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: 25,
              textAlign: "center",
            }}
          >
            Detected Brand
          </Typography>

          <Divider sx={{ m: 3 }} />

          <Typography
            sx={{
              fontStyle: "normal",
              fontSize: 25,
              textAlign: "center",
            }}
          >
            Toyota
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Detectpage;
