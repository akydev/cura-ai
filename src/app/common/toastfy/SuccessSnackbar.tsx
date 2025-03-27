import { Box, Snackbar, SnackbarContent } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const vertical = "top";
const horizontal = "center";

interface IToastProps {
  type: string;
  visible: boolean;
  message: string;
  onClose: () => void;
}

const SuccessSnackbar = (props: IToastProps) => {
  return (
    <Box sx={{ width: 500 }}>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={props.visible && props.type === "Success"}
        key={vertical + horizontal}
        onClose={props.onClose}
        sx={{ marginTop: 8 }}
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
              {props.message}
            </Box>
          }
        />
      </Snackbar>
    </Box>
  );
};

export default SuccessSnackbar;
