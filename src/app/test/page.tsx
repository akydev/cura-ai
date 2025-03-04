"use client";
import React from "react";
import DoctorList from "../Components/DoctorList";
import SpecialtyList from "../Components/SpecialtyList";

function page() {
  return (
    <>
      <DoctorList />
      <SpecialtyList />
    </>
  );
}

export default page;
