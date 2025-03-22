"use client";
import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
} from "@mui/material/styles";
import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from "react";
import { PaletteMode } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

// Define types for context
interface ThemeContextType {
  toggleTheme: () => void;
  currentTheme: PaletteMode;
}

// Default values
const defaultTheme: PaletteMode = "light";

// Create context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Function to generate MUI theme based on mode
const getMuiTheme = (mode: PaletteMode) => {
  return createTheme({
    palette: {
      mode,
      primary: {
        main: mode === "light" ? "#1976d2" : "#90caf9", // Light/Dark Primary
      },
      secondary: {
        main: "#f50057",
      },
      background: {
        default: mode === "light" ? "#f5f5f5" : "#121212",
        paper: mode === "light" ? "#ffffff" : "#1e1e1e",
      },
      text: {
        primary: mode === "light" ? "#000000" : "#ffffff",
      },
    },
    typography: {
      fontFamily: "Arial, sans-serif",
    },
  });
};

interface ThemeProviderProps {
  children: ReactNode;
}

// Create the ThemeProvider component
export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [currentTheme, setCurrentTheme] = useState<PaletteMode>(defaultTheme);

  // Persist theme in localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as PaletteMode;
    if (savedTheme) setCurrentTheme(savedTheme);
  }, []);

  // Toggle between light and dark mode
  const toggleTheme = () => {
    setCurrentTheme((prev) => {
      const newTheme = prev === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme, currentTheme }}>
      <MUIThemeProvider theme={getMuiTheme(currentTheme)}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </ThemeContext.Provider>
  );
};

// Custom hook for context access
export const useThemeContext = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeContext must be used within a ThemeProvider");
  }
  return context;
};
