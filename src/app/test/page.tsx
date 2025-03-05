"use client";
import React from "react";
import DoctorList from "../Components/DoctorList";
import SpecialtyList from "../Components/SpecialtyList";
import ViewAppointment from "../Components/ViewAppointment";
import SpecialtySkeleton from "../skeleton/SpecialtySkeleton";

function page() {
  return (
    <>
      {/* <ViewAppointment /> */}
      {/* <DoctorList /> */}
      <SpecialtySkeleton />
      <SpecialtyList />
    </>
  );
}

export default page;
