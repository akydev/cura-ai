"use client";
import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

const PUBLIC_ROUTES = ["/", "/login", "/signup"]; // Public pages

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();

  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null; // Check token or cookies or session storage.

  useEffect(() => {
    // If the user is authenticated (token exists) and is trying to access a public route, redirect to profile page
    if (token && PUBLIC_ROUTES.includes(pathname)) {
      router.push("/profile"); // Redirect to profile page if already authenticated
    }

    // If the user is not authenticated and is trying to access a protected route, redirect to login
    if (!token && !PUBLIC_ROUTES.includes(pathname)) {
      router.push("/login"); // Redirect unauthenticated users to login
    }
  }, [router, pathname]); // Dependencies: run the effect on router or pathname change

  // If the user is authenticated or the route is public, render the children
  return PUBLIC_ROUTES.includes(pathname) || token ? <>{children}</> : null;
};

export default ProtectedRoute;
