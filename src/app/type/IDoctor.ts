export interface IDoctorList {
  doctors: IDoctor[];
}

export interface ISpecialty {
  specialities: SpecializationId[];
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
  specializationId: SpecializationId;
  experience: string;
  phone: string;
  fullAddress: FullAddress;
  createdAt: string;
  __v: number;
}

export interface FullAddress {
  addressLine: string;
  city: string;
  state: string;
  country: string;
  pincode: string;
}

export interface SpecializationId {
  _id: string;
  title: string;
}
