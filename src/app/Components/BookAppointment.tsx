import React, { useContext, useState } from "react";
import { Box, Tabs, Tab } from "@mui/material";
import SpecialtyList from "./specialty/SpecialtyList";
import DoctorList from "./doctor/DoctorList";
import { useFetch } from "../customhook/useFetch";
import { IDoctorList, ISpecialtyList } from "../type/IDoctor";
import { ISlotList } from "../type/ISlot";
import SlotList from "./appointment/SlotList";
import Appointment from "./appointment/Appointment";
import { useAuth } from "../context/AuthContext";
import { IUser } from "../type/IUser";
import adminFetch from "../axiosBase/interceptors";
import { useToast } from "../context/ToastProvider";

const BookAppointment = () => {
  const toast = useToast();
  const [step, setStep] = React.useState(0);
  const [specialityId, setSpecialityId] = useState("");
  const [doctorId, setDoctorId] = useState("");
  const [slotId, setSlotId] = useState("");

  const { user } = useAuth() as { user: IUser | null };

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    // validate the form data and send it to the server
    if (!user?._id) return toast.error("Please login to book an appointment");
    if (!doctorId) return toast.error("Please select a doctor");
    if (!specialityId) return toast.error("Please select a specialty");
    if (!slotId) return toast.error("Please select a slot");
    const appointmentData = {
      userId: user?._id,
      doctorId: doctorId,
      specialityId: specialityId,
      slotId: slotId,
    };
    // Send appointmentData to the server or perform any other actions
    try {
      const response = await adminFetch.post("/appointment", appointmentData);
      if (response.status === 200) {
        // toast.success("Appointment booked successfully!");
        toast.success(response.data.msg);
      }
      console.log("Appointment Data:", appointmentData);
    } catch (error: any) {
      toast.error(error.response.data.msg);
    }
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
        <Tab label="Appointment" disabled />
        <Tab label="Coming Soon..." disabled />
      </Tabs>

      <form onSubmit={handleSubmit}>
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
              setStep(3);
            }}
          />
        )}
        {step === 3 && user && (
          <Appointment
            user={user as IUser}
            doctors={doctors?.doctors.find((doctor) => doctor._id === doctorId)}
            specialty={specialities?.specialities.find(
              (specialty) => specialty._id === specialityId
            )}
            slots={slots?.slots.find((slot) => slot._id === slotId)}
          />
        )}
      </form>
    </Box>
  );
};

export default BookAppointment;
