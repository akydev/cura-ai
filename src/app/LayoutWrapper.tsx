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
  const { mode } = useThemeContext(); // ✅ Get theme context

  const isPrivateRoute = !["/", "/login", "/signup"].includes(pathname);

  // ✅ Dynamic background color
  const backgroundColor = mode === "light" ? "#f5f5f5" : "#121212";
  const textColor = mode === "light" ? "#000" : "#fff";

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

{
  /* <Grid2
// spacing={2}
sx={{
  backgroundColor,
  color: textColor,
  transition: "background-color 0.3s ease, color 0.3s ease",
}}
>
{/* First Column: Navbar */
}
{
  /* <Grid2 columns={{ xs: 12, sm: 12, md: 12 }}>
  <Navbar />
</Grid2> */
}

{
  /* Second Column: Children Content */
}
{
  /* <Grid2 columns={{ xs: 12, sm: 12, md: 12 }}>
  {isPrivateRoute ? (
    <ProtectedRoute>
      <AuthProvider>{children}</AuthProvider>
    </ProtectedRoute>
  ) : (
    children
  )}
</Grid2> */
}

{
  /* Third Column: Footer */
}
{
  /* <Grid2 columns={{ xs: 12, sm: 12, md: 12 }}>
  <FooterBar />
</Grid2>
</Grid2> */
}
