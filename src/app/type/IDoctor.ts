import { SpecializationId } from "./IAppointmentList";
import { IFullAddress } from "./IFullAddress";

export interface IDoctorList {
  doctors: IDoctor[];
}

export interface IDoctor {
  _id: string;
  doctorID: number;
  firstName: string;
  lastName: string;
  email: string;
  dob: string;
  gender: string;
  licenseNumber: string;
  specializationId: SpecializationId[];
  fees: number;
  experience: string;
  phone: string;
  fullAddress: IFullAddress;
  createdAt: string;
  __v: number;
}

export interface ISpecialtyList {
  specialities: ISpecialty[];
}

interface ISpecialty {
  _id: string;
  title: string;
  doctorCount: number;
}
