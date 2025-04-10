import React, { useReducer } from "react";
import { Box, Tabs, Tab } from "@mui/material";
import SpecialtyList from "./specialty/SpecialtyList";
import { useFetch } from "../customhook/useFetch";
import { IDoctorList, ISpecialtyList } from "../type/IDoctor";
import { ISlotList } from "../type/ISlot";
import SlotList from "./appointment/SlotList";
import Appointment from "./appointment/Appointment";
import { useAuth } from "../context/AuthContext";
import { IUser } from "../type/IUser";
import adminFetch from "../axiosBase/interceptors";
import { useToast } from "../context/ToastProvider";
import {
  bookAppointmentReducer,
  initialState,
} from "../reducer/bookAppointmentReducer";
import DoctorList from "./doctor/DoctorList";

const BookAppointment = () => {
  const [state, dispatch] = useReducer(bookAppointmentReducer, initialState);
  const { step, selectedSpeciality, selectedDoctor, slotId } = state;
  const toast = useToast();
  const { user } = useAuth() as { user: IUser | null };
  console.log(state, "state");
  const { loading: specialtyLoader, data: specialities } =
    useFetch<ISpecialtyList>("/speciality/count");

  const { loading: doctorLoader, data: doctors } = useFetch<IDoctorList>(
    selectedSpeciality.id && selectedSpeciality.isFilter === "filterDoctors"
      ? `/doctors?specializationId=${selectedSpeciality.id}`
      : selectedSpeciality.isFilter === "allDoctors"
      ? `/doctors`
      : null
  );

  const { loading: slotLoader, data: slots } = useFetch<ISlotList>(
    selectedDoctor ? `/slots?doctorId=${selectedDoctor}` : null
  );

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    dispatch({ type: "SET_STEP", payload: newValue });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user?._id) return toast.error("Please login to book an appointment");
    if (!selectedDoctor) return toast.error("Please select a doctor");
    if (!selectedSpeciality.id) return toast.error("Please select a specialty");
    if (!slotId) return toast.error("Please select a slot");

    const appointmentData = {
      specializationId: selectedSpeciality.id,
      doctorId: selectedDoctor,
      slotId: slotId,
      patientId: user?._id,
    };
    try {
      const response = await adminFetch.post("/appointments", appointmentData);
      if (response.status === 200) {
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
        <Tab label="Specialty" onClick={() => dispatch({ type: "RESET" })} />
        <Tab
          label="Doctors"
          onClick={() => dispatch({ type: "OPEN_DOCTOR_TAB" })}
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
              dispatch({ type: "SET_SPECIALITY_ID", payload: id });
            }}
          />
        )}
        {step === 1 && (
          <DoctorList
            loading={doctorLoader}
            data={doctors}
            setDoctorId={(doctorId: string, specialityId: string) => {
              dispatch({
                type: "SET_DOCTOR_ID",
                payload: { doctorId, specialityId },
              });
            }}
            specialityId={selectedSpeciality} // Passing the specialityId to DoctorList
          />
        )}

        {step === 2 && (
          <SlotList
            loading={slotLoader}
            doctors={doctors}
            doctorId={selectedDoctor}
            data={slots}
            setSlotId={(id: string) => {
              dispatch({ type: "SET_SLOT_ID", payload: id });
            }}
          />
        )}
        {step === 3 && user && (
          <Appointment
            user={user as IUser}
            doctors={doctors?.doctors.find(
              (doctor) => doctor._id === selectedDoctor
            )}
            specialty={specialities?.specialities.find(
              (specialty) => specialty._id === selectedSpeciality.id
            )}
            slots={slots?.slots.find((slot) => slot._id === slotId)}
          />
        )}
      </form>
    </Box>
  );
};

export default BookAppointment;
