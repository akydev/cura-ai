import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
  Avatar,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Tabs,
  Tab,
} from "@mui/material";
import { AccessTime, LocationOn, DateRange } from "@mui/icons-material";
import SpecialtyList from "./specialty/SpecialtyList";
import DoctorList from "./doctor/DoctorList";
import { useFetch } from "../customhook/useFetch";
import { IDoctorList, ISpecialtyList } from "../type/IDoctor";

const BookAppointment = () => {
  const [step, setStep] = React.useState(0);
  const [specialityId, setSpecialityId] = useState("");
  const [doctorId, setDoctorId] = useState();
  const [slotId, setSlotId] = useState();
  const [patientId, setPatientId] = useState();

  const { loading: specialtyLoader, data: specialities } =
    useFetch<ISpecialtyList>("/speciality/count");
  const { loading: doctorLoader, data: doctors } =
    useFetch<IDoctorList>("/doctors");

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setStep(newValue);
  };
  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper", paddingY: "2rem" }}>
      <Tabs value={step} onChange={handleChange} centered>
        <Tab label="Specialty" />
        <Tab label="Doctors" />
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
      {step === 1 && <DoctorList loading={doctorLoader} data={doctors} />}
    </Box>
  );
};

export default BookAppointment;
