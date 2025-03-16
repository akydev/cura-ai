import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
} from "@mui/material/styles"; // Correct import for MUI's ThemeProvider
import { createContext, ReactNode, useContext, useState } from "react";

// Define types for the context
interface ThemeContextType {
  toggleTheme: () => void;
  currentTheme: "light" | "dark"; // Restrict currentTheme to 'light' or 'dark'
}

// Default theme (light mode as an example)
const defaultTheme: "light" | "dark" = "light"; // Explicitly set the default as 'light' | 'dark'

// Define the context (do not import from @emotion/react)
const themeContext = createContext<ThemeContextType | undefined>(undefined);

// Function to get the MUI Theme based on the current theme
const getMuiTheme = (theme: "light" | "dark") => {
  // Specify the type for theme
  return createTheme({
    palette: {
      mode: theme, // Now it's guaranteed to be 'light' or 'dark'
      primary: {
        main: "#1976d2", // Example color
      },
      secondary: {
        main: "#dc004e", // Example color
      },
    },
  });
};

// Create a custom ThemeProvider component
interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [currentTheme, setCurrentTheme] = useState<"light" | "dark">(
    defaultTheme
  ); // Explicitly type state

  const toggleTheme = () => {
    setCurrentTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light")); // Ensure toggling is between 'light' and 'dark'
  };

  return (
    <themeContext.Provider value={{ toggleTheme, currentTheme }}>
      <MUIThemeProvider theme={getMuiTheme(currentTheme)}>
        {children}
      </MUIThemeProvider>
    </themeContext.Provider>
  );
};

// Hook to access the theme context
export const useThemeContext = (): ThemeContextType => {
  const context = useContext(themeContext); // Using the defined themeContext
  if (!context) {
    throw new Error("useThemeContext must be used within a ThemeProvider");
  }
  return context;
};
