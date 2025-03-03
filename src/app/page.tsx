"use client";
import DoctorList from "./Components/DoctorList";
import DoctorProfile from "./Components/DoctorProfile";
import FooterBar from "./Components/Footerbar";
import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/Navbar";
import SpecialtyList from "./Components/SpecialtyList";
import ViewAppointment from "./Components/ViewAppointment";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      {/* <DoctorProfile/> */}
      {/* <SpecialtyList/> */}

      {/* <DoctorList /> */}
      {/* <ViewAppointment /> */}
      <FooterBar />
    </>
  );
}
