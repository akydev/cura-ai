import { Button } from "@mui/material";
import { useThemeContext } from "../context/ThemeContext";

const ThemeSwitcher = () => {
  const { toggleTheme, currentTheme } = useThemeContext();

  return (
    <Button variant="contained" color="primary" onClick={toggleTheme}>
      Switch to {currentTheme === "light" ? "Dark" : "Light"} Mode
    </Button>
  );
};
