import { Button } from "@mui/material";
import { useThemeContext } from "../context/ThemeContext";

const ThemeSwitcher = () => {
  const { toggleTheme, mode } = useThemeContext();

  return (
    <Button variant="contained" color="primary" onClick={toggleTheme}>
      Switch to {mode === "light" ? "Dark" : "Light"} Mode
    </Button>
  );
};
export default ThemeSwitcher;
