"use client";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./routes/ProtectedRoute";
import { usePathname } from "next/navigation";
import Navbar from "./components/Navbar";
import FooterBar from "./components/Footerbar";
import { useThemeContext } from "./context/ThemeContext";
// ✅ Client-side Pathname Check
function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { currentTheme } = useThemeContext(); // ✅ Get theme context

  const isPrivateRoute = !["/", "/login", "/signup"].includes(pathname);

  // ✅ Dynamic background color
  const backgroundColor = currentTheme === "light" ? "#f5f5f5" : "#121212";
  const textColor = currentTheme === "light" ? "#000" : "#fff";

  return (
    <div
      style={{
        backgroundColor,
        color: textColor,
        transition: "background-color 0.3s ease, color 0.3s ease",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Navbar />
      {isPrivateRoute ? (
        <ProtectedRoute>
          <AuthProvider>{children}</AuthProvider>
        </ProtectedRoute>
      ) : (
        children
      )}
      <FooterBar />
    </div>
  );
}

export default LayoutWrapper;
