"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useAuth } from "../context/AuthContext";

const PUBLIC_ROUTES = ["/", "/login", "/signup", "/test", "/doctorsignup","/profile"]; // Public pages

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!login && !logout && !PUBLIC_ROUTES.includes(pathname)) {
      router.push("/login"); // Redirect unauthenticated users
    }
  }, [login, logout, router, pathname]);

  //   if (login) return <p>Loading...</p>;

  return PUBLIC_ROUTES.includes(pathname) ? <>{children}</> : null;
};

export default ProtectedRoute;
