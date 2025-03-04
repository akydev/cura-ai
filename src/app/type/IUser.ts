export interface Iuser {
  _id: string;
  patientID: number;
  firstName: string;
  lastName: string;
  email: string;
  dob: string;
  gender: string;
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
