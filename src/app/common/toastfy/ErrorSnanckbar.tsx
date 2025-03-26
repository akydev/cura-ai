import { Box, Snackbar, SnackbarContent } from "@mui/material";
import ErrorIcon from "@mui/icons-material/Error";

const vertical = "top";
const horizontal = "center";

interface IToastProps {
  type: string;
  visible: boolean;
  message: string;
  onClose: () => void;
}

const ErrorSnanckbar = (props: IToastProps) => {
  return (
    <Box sx={{ width: 500 }}>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={props.visible && props.type === "Error"}
        key={vertical + horizontal}
        onClose={props.onClose}
        sx={{ marginTop: 6 }}
      >
        <SnackbarContent
          sx={{
            backgroundColor: "#F20505", // Red background color
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
              {props.message}
            </Box>
          }
        />
      </Snackbar>
    </Box>
  );
};

export default ErrorSnanckbar;
