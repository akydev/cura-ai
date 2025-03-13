import { AppProps } from "next/app";
import { usePathname } from "next/navigation";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./routes/ProtectedRoute";

function MyApp({ Component, pageProps }: AppProps) {
  const pathname = usePathname();
  const isPrivateRoutes = !["/", "/login", "/signup"].includes(pathname);
  return (
    <AuthProvider>
      {isPrivateRoutes ? (
        <ProtectedRoute>
          <Component {...pageProps} />
        </ProtectedRoute>
      ) : (
        <Component {...pageProps} />
      )}
    </AuthProvider>
  );
}

export default MyApp;
