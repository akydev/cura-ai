import React, { useState } from "react";
import { Box, Tabs, Tab } from "@mui/material";
import SpecialtyList from "./specialty/SpecialtyList";
import DoctorList from "./doctor/DoctorList";
import { useFetch } from "../customhook/useFetch";
import { IDoctorList, ISpecialtyList } from "../type/IDoctor";
import { ISlotList } from "../type/ISlot";
import SlotList from "./appointment/SlotList";

const BookAppointment = () => {
  const [step, setStep] = React.useState(0);
  const [specialityId, setSpecialityId] = useState("");
  const [doctorId, setDoctorId] = useState("");
  const [slotId, setSlotId] = useState("");
  const [patientId, setPatientId] = useState("");
  // const [selectedSpecialty, setSelectedSpecialty] = useState();

  const { loading: specialtyLoader, data: specialities } =
    useFetch<ISpecialtyList>("/speciality/count");
  const { loading: doctorLoader, data: doctors } = useFetch<IDoctorList>(
    specialityId ? `/doctors?specializationId=${specialityId}` : "/doctors"
  );
  const { loading: slotLoader, data: slots } = useFetch<ISlotList>(
    doctorId ? `/slots?doctorId=${doctorId}` : null
  );

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setStep(newValue);
  };
  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper", paddingY: "2rem" }}>
      <Tabs value={step} onChange={handleChange} centered>
        <Tab label="Specialty" />
        <Tab
          label="Doctors"
          onClick={() => {
            setSpecialityId("");
          }}
        />
        <Tab label="Coming Soon..." disabled />
      </Tabs>
      {step === 0 && (
        <SpecialtyList
          loading={specialtyLoader}
          data={specialities}
          setSpecialityId={(id: string) => {
            setSpecialityId(id);
            setStep(1);
          }}
        />
      )}
      {step === 1 && (
        <DoctorList
          loading={doctorLoader}
          data={doctors}
          setDoctorId={(id: string) => setDoctorId(id)}
          setStep={(step: number) => setStep(step)}
        />
      )}
      {step === 2 && (
        <SlotList
          loading={slotLoader}
          doctors={doctors}
          doctorId={doctorId}
          data={slots}
          setSlotId={(id: string) => {
            setSlotId(id);
          }}
        />
      )}
    </Box>
  );
};

export default BookAppointment;
