"use client";
import React from "react";
import DoctorList from "../Components/DoctorList";
import SpecialtyList from "../Components/SpecialtyList";
import ViewAppointment from "../Components/ViewAppointment";
import SpecialtySkeleton from "../skeleton/SpecialtySkeleton";
import ViewAppointmentSkeleton from "../skeleton/ViewAppointmentSkeleton";

function page() {
  return (
    <>
      {/* <ViewAppointment /> */}
      <ViewAppointmentSkeleton />
      {/* <DoctorList /> */}
      {/* <SpecialtySkeleton /> */}
      {/* <SpecialtyList /> */}
    </>
  );
}

export default page;
