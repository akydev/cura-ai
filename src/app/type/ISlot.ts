export interface ISlotList {
  slots: ISlots[];
}

export interface ISlots {
  _id: string;
  date: string;
  time: string;
  isAvailable: boolean;
  doctorId: string;
  combinedDateTime: string;
}
