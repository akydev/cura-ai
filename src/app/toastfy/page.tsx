"use client";
import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Snackbar, { SnackbarOrigin } from "@mui/material/Snackbar";
import { SnackbarContent } from "@mui/material";

interface State extends SnackbarOrigin {
  open: boolean;
}

export default function PositionedSnackbar() {
  const [state, setState] = React.useState<State>({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = state;

  const handleClick = (newState: SnackbarOrigin) => () => {
    setState({ ...newState, open: true });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const buttons = (
    <React.Fragment>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          onClick={handleClick({ vertical: "top", horizontal: "center" })}
        >
          Top-Center
        </Button>
      </Box>
      {/* <Grid container sx={{ justifyContent: "center" }}>
        <Grid item xs={6}>
          <Button
            onClick={handleClick({ vertical: "top", horizontal: "left" })}
          >
            Top-Left
          </Button>
        </Grid>
        <Grid item xs={6} sx={{ textAlign: "right" }}>
          <Button
            onClick={handleClick({ vertical: "top", horizontal: "right" })}
          >
            Top-Right
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            onClick={handleClick({ vertical: "bottom", horizontal: "left" })}
          >
            Bottom-Left
          </Button>
        </Grid>
        <Grid item xs={6} sx={{ textAlign: "right" }}>
          <Button
            onClick={handleClick({ vertical: "bottom", horizontal: "right" })}
          >
            Bottom-Right
          </Button>
        </Grid>
      </Grid>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          onClick={handleClick({ vertical: "bottom", horizontal: "center" })}
        >
          Bottom-Center
        </Button>
      </Box> */}
    </React.Fragment>
  );

  return (
    <Box sx={{ width: 500 }}>
      {buttons}
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        key={vertical + horizontal}
      >
        <SnackbarContent
          sx={{
            // backgroundColor: "#f44336", // Red background color
            backgroundColor: "#4caf50", // Green background color
            color: "white", // White text color for better contrast
            fontWeight: "bold", // Optional: make the text bold
            padding: "8px 16px", // Adjust padding if needed
          }}
          message="I love snacks"
        />
      </Snackbar>
    </Box>
  );
}
