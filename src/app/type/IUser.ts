import { IFullAddress } from "./IFullAddress";

export interface IUser {
  _id: string;
  patientID: number;
  firstName: string;
  lastName: string;
  email: string;
  dob: string;
  gender: string;
  phone: string;
  fullAddress: IFullAddress;
  createdAt: string;
  __v: number;
}
