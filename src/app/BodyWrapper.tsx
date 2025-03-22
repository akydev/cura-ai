"use client";
import { useThemeContext } from "./context/ThemeContext";
import { ToastProvider } from "./context/ToastProvider";
import ProtectedRoute from "./routes/ProtectedRoute";
import Navbar from "./components/Navbar";
import FooterBar from "./components/Footerbar";

// ✅ Make this a client component

export default function BodyWrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { currentTheme } = useThemeContext(); // ✅ Access theme context

  // Dynamic background color
  const backgroundColor = currentTheme === "light" ? "#f5f5f5" : "#121212";
  const textColor = currentTheme === "light" ? "#000" : "#fff";

  return (
    <body
      className={className}
      style={{
        backgroundColor,
        color: textColor,
        transition: "background-color 0.3s ease, color 0.3s ease",
        minHeight: "100vh",
      }}
    >
      <ToastProvider>
        <ProtectedRoute>
          <Navbar />
          {children}
          <FooterBar />
        </ProtectedRoute>
      </ToastProvider>
    </body>
  );
}
