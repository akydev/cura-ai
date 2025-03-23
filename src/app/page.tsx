"use client"; // This is the client-side component
import RootLayout from "./layout"; // ✅ Import the Server side components
import HeroSection from "./components/HeroSection";

export default function Home() {
  return <HeroSection />;
}
