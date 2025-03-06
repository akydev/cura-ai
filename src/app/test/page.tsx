"use client";
import React from "react";
import DoctorList from "../components/DoctorList";
import SpecialtyList from "../components/SpecialtyList";
import ViewAppointment from "../components/ViewAppointment";
import SpecialtySkeleton from "../common/skeleton/SpecialtySkeleton";
import ViewAppointmentSkeleton from "../common/skeleton/ViewAppointmentSkeleton";
import DoctorLIstSkeleton from "../common/skeleton/DoctorLIstSkeleton";
import PositionedSnackbar from "../common/toastfy/PositionedSnackbar";

function page() {
  return (
    <>
      {/* <ViewAppointment /> */}
      <ViewAppointmentSkeleton />
      {/* <DoctorList /> */}
      <DoctorLIstSkeleton />
      <SpecialtySkeleton />
      {/* <SpecialtyList /> */}
      <PositionedSnackbar />
    </>
  );
}

export default page;
