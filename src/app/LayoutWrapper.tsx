"use client";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./routes/ProtectedRoute";
import { usePathname } from "next/navigation";
import Navbar from "./components/Navbar";
import FooterBar from "./components/Footerbar";
import { useThemeContext } from "./context/ThemeContext";
import { Grid2, Stack, Box } from "@mui/material";

// ✅ Client-side Pathname Check
const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const { mode } = useThemeContext(); // ✅ Get theme context

  const isPrivateRoute = !["/", "/login", "/signup", "/doctorsignup"].includes(
    pathname
  );

  // ✅ Dynamic background color
  const backgroundColor = mode === "light" ? "#f5f5f5" : "#121212";
  const textColor = mode === "light" ? "#000" : "#fff";

  return (
    <Stack
      sx={{
        minHeight: "100vh",
        backgroundColor,
        color: textColor,
        transition: "background-color 0.3s ease, color 0.3s ease",
      }}
    >
      {/* Navbar */}
      <Box>
        <Navbar />
      </Box>

      {/* Children Content with Flex Growth */}
      <Box sx={{ flex: 1, overflowY: "auto" }}>
        <ProtectedRoute>
          {isPrivateRoute ? <AuthProvider>{children}</AuthProvider> : children}
        </ProtectedRoute>
      </Box>

      {/* Footer */}
      <Box>
        <FooterBar />
      </Box>
    </Stack>
  );
};

export default LayoutWrapper;
