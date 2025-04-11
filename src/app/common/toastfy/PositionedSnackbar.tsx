"use client";
import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Snackbar, { SnackbarOrigin } from "@mui/material/Snackbar";
import { SnackbarContent } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";

interface State extends SnackbarOrigin {
  open: boolean;
}
const vertical = "top";
const horizontal = "center";

interface ISnackbar {
  visible: boolean;
  message: string;
  type: string;
}

export default function PositionedSnackbar() {
  const [show, setShow] = React.useState<ISnackbar>({
    visible: false,
    message: "",
    type: "",
  });

  return (
    <>
      <Button
        onClick={() =>
          setShow({ visible: true, message: "Successful", type: "success" })
        }
      >
        Success
      </Button>
      <Button
        onClick={() =>
          setShow({ visible: true, message: "Error", type: "error" })
        }
      >
        Error
      </Button>

      <Box sx={{ width: 500 }}>
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={show.visible && show.type === "success"}
          key={vertical + horizontal}
          onClose={() => setShow({ ...show, visible: false })}
        >
          <SnackbarContent
            sx={{
              backgroundColor: "#078C03", // Green background color
              color: "white", // White text color for better contrast
              fontWeight: "bold", // Optional: make the text bold
              padding: "8px 16px", // Adjust padding if needed
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            message={
              <Box style={{ display: "flex", alignItems: "center" }}>
                <CheckCircleIcon sx={{ marginRight: 2 }} />{" "}
                {/* Add success icon */}
                {show.message}
              </Box>
            }
          />
        </Snackbar>
      </Box>

      <Box sx={{ width: 500 }}>
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={show.visible && show.type === "error"}
          key={vertical + horizontal}
          onClose={() => setShow({ ...show, visible: false })}
        >
          <SnackbarContent
            sx={{
              backgroundColor: "#F20505", // Red background color

              // background:
              //   "linear-gradient(to right,rgb(255, 100, 89),rgb(255, 42, 42),rgb(255, 0, 0))", // Gradient from red to orange
              color: "white", // White text color for better contrast
              fontWeight: "bold", // Optional: make the text bold
              padding: "8px 16px", // Adjust padding if needed
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            message={
              <Box style={{ display: "flex", alignItems: "center" }}>
                <ErrorIcon sx={{ marginRight: 2 }} /> {/* Add error icon */}
                {show.message}
              </Box>
            }
          />
        </Snackbar>
      </Box>
    </>
  );
}
