// "use client";
// import {
//   createTheme,
//   ThemeProvider as MUIThemeProvider,
// } from "@mui/material/styles";
// import {
//   createContext,
//   ReactNode,
//   useContext,
//   useState,
//   useEffect,
// } from "react";
// import { PaletteMode } from "@mui/material";
// import CssBaseline from "@mui/material/CssBaseline";

// // Define types for context
// interface ThemeContextType {
//   toggleTheme: () => void;
//   currentTheme: PaletteMode;
// }

// // Default values
// const defaultTheme: PaletteMode = "light";

// // Create context
// const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// // Function to create and return a Material-UI theme based on the mode (light or dark)
// // Cura AI Theme
// // const getMuiTheme = (mode: PaletteMode) => {
// //   return createTheme({
// //     palette: {
// //       mode, // Set the mode (light or dark)
// //       primary: {
// //         main: mode === "light" ? "#007BFF" : "#0056b3", // Blue for primary (Trust, Tech)
// //       },
// //       secondary: {
// //         main: "#00C853", // Green for secondary (Health, Wellness)
// //       },
// //       background: {
// //         default: mode === "light" ? "#F8F9FA" : "#121212", // Light grey for light mode, dark for dark mode
// //         paper: mode === "light" ? "#FFFFFF" : "#1E1E1E", // Clean white for paper in light mode
// //       },
// //       text: {
// //         primary: mode === "light" ? "#212529" : "#FFFFFF", // Dark grey for light mode text, white text in dark mode
// //       },
// //     },
// //     typography: {
// //       fontFamily: "Roboto, sans-serif", // Clean and modern font family for readability
// //     },
// //   });
// // };

// // Elegant Black and Gold Theme
// const getMuiTheme = (mode: PaletteMode) => {
//   return createTheme({
//     palette: {
//       mode, // Set the mode (light or dark)
//       primary: {
//         main: mode === "light" ? "#000000" : "#FFD700", // Black for light mode, Gold for dark mode
//       },
//       secondary: {
//         main: "#FFD700", // Gold color for secondary elements
//         // main: mode === "light" ? "#FFD700" : "#000000", // Black for light mode, Gold for dark mode
//       },
//       background: {
//         default: mode === "light" ? "#F5F5F5" : "#121212", // Light grey background for light mode, dark grey for dark mode
//         paper: mode === "light" ? "#FFFFFF" : "#1E1E1E", // White background for paper in light mode, dark for dark mode
//       },
//       text: {
//         primary: mode === "light" ? "#000000" : "#FFFFFF", // Black text in light mode, white text in dark mode
//       },
//     },
//     typography: {
//       fontFamily: "Roboto, sans-serif", // Clean and modern font family for readability
//     },
//   });
// };

// // Classic Blue Theme
// // const getMuiTheme = (mode: PaletteMode) => {
// //   return createTheme({
// //     palette: {
// //       mode, // Set the mode (light or dark)
// //       primary: {
// //         main: mode === "light" ? "#0D47A1" : "#0D47A1", // Classic Blue for primary color in both modes
// //       },
// //       secondary: {
// //         main: "#64B5F6", // Light Blue for secondary elements
// //       },
// //       background: {
// //         default: mode === "light" ? "#ECEFF1" : "#121212", // Light grey background for light mode, dark for dark mode
// //         paper: mode === "light" ? "#FFFFFF" : "#1E1E1E", // White paper for light mode, dark for dark mode
// //       },
// //       text: {
// //         primary: mode === "light" ? "#212121" : "#FFFFFF", // Dark grey text in light mode, white text in dark mode
// //       },
// //     },
// //     typography: {
// //       fontFamily: "Roboto, sans-serif", // Clean and modern font family for readability
// //     },
// //   });
// // };

// interface ThemeProviderProps {
//   children: ReactNode;
// }

// // Create the ThemeProvider component
// export const ThemeProvider = ({ children }: ThemeProviderProps) => {
//   const [currentTheme, setCurrentTheme] = useState<PaletteMode>(defaultTheme);

//   // Persist theme in localStorage
//   useEffect(() => {
//     const savedTheme = localStorage.getItem("theme") as PaletteMode;
//     if (savedTheme) setCurrentTheme(savedTheme);
//   }, []);

//   // Toggle between light and dark mode
//   const toggleTheme = () => {
//     setCurrentTheme((prev) => {
//       const newTheme = prev === "light" ? "dark" : "light";
//       localStorage.setItem("theme", newTheme);
//       return newTheme;
//     });
//   };

//   return (
//     <ThemeContext.Provider value={{ toggleTheme, currentTheme }}>
//       <MUIThemeProvider theme={getMuiTheme(currentTheme)}>
//         <CssBaseline />
//         {children}
//       </MUIThemeProvider>
//     </ThemeContext.Provider>
//   );
// };

// // Custom hook for context access
// export const useThemeContext = (): ThemeContextType => {
//   const context = useContext(ThemeContext);
//   if (!context) {
//     throw new Error("useThemeContext must be used within a ThemeProvider");
//   }
//   return context;
// };

// /context/ThemeContext.tsx
"use client";

import { createContext, useState, useMemo, useContext, ReactNode } from "react";
import { ThemeProvider, createTheme, Theme } from "@mui/material/styles";

interface ThemeContextType {
  toggleTheme: () => void;
  mode: "light" | "dark";
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useThemeContext = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error(
      "useThemeContext must be used within a ThemeContextProvider"
    );
  }
  return context;
};

interface ThemeContextProviderProps {
  children: ReactNode;
}

export const ThemeContextProvider = ({
  children,
}: ThemeContextProviderProps) => {
  const [mode, setMode] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  const theme: Theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: mode === "light" ? "#1976d2" : "#90caf9",
          },
          secondary: {
            main: mode === "light" ? "#9c27b0" : "#ce93d8",
          },
          background: {
            default: mode === "light" ? "#f5f5f5" : "#121212",
            paper: mode === "light" ? "#ffffff" : "#1e1e1e",
          },
          text: {
            primary: mode === "light" ? "#000000" : "#ffffff",
            secondary: mode === "light" ? "#555555" : "#bbbbbb",
          },
        },
        typography: {
          fontFamily: "Roboto, Arial, sans-serif",
          fontSize: 14,
        },
      }),
    [mode]
  );

  return (
    <ThemeContext.Provider value={{ toggleTheme, mode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
