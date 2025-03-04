"use client";
import React from "react";
import DoctorList from "../Components/DoctorList";
import SpecialtyList from "../Components/SpecialtyList";
import ViewAppointment from "../Components/ViewAppointment";

function page() {
  return (
    <>
      <ViewAppointment />
      {/* <DoctorList />
      <SpecialtyList /> */}
    </>
  );
}

export default page;
