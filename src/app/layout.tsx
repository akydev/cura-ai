import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "./context/ThemeContext";

import BodyWrapper from "./BodyWrapper"; // ✅ Import the new client component

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

// ✅ Keep this as a Server Component (NO "use client")
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <ThemeProvider>
        <BodyWrapper className={`${geistSans.variable} ${geistMono.variable}`}>
          {children}
        </BodyWrapper>
      </ThemeProvider>
    </html>
  );
}
