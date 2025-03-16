import { AppProps } from "next/app";
import { usePathname } from "next/navigation";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./routes/ProtectedRoute";
import { ThemeProvider } from "../app/context/ThemeContext"; // Import custom ThemeProvider
function MyApp({ Component, pageProps }: AppProps) {
  const pathname = usePathname();
  const isPrivateRoutes = !["/", "/login", "/signup"].includes(pathname);
  return (
    <ThemeProvider>
      <AuthProvider>
        {isPrivateRoutes ? (
          <ProtectedRoute>
            <Component {...pageProps} />
          </ProtectedRoute>
        ) : (
          <Component {...pageProps} />
        )}
      </AuthProvider>
    </ThemeProvider>
  );
}

export default MyApp;
