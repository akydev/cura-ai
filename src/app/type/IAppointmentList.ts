export interface IAppointmentList {
  appointments: Appointment[];
}

export interface Appointment {
  _id: string;
  specializationId: SpecializationId;
  doctorId: DoctorId;
  patientId: PatientId;
  slotId: SlotId;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface SpecializationId {
  _id: string;
  title: string;
}

export interface DoctorId {
  _id: string;
  doctorID: number;
  firstName: string;
  lastName: string;
}

export interface PatientId {
  _id: string;
  patientID: number;
  firstName: string;
  lastName: string;
}

export interface SlotId {
  _id: string;
  date: string;
  time: string;
}
