import { Box, IconButton, Switch } from "@mui/material";
import { useThemeContext } from "../../context/ThemeContext";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

const ThemeSwitcher = () => {
  const { toggleTheme, mode } = useThemeContext();

  return (
    <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
      <IconButton onClick={toggleTheme} color="inherit">
        {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
      </IconButton>
      <Switch checked={mode === "dark"} onChange={toggleTheme} />
    </Box>
  );
};
export default ThemeSwitcher;
