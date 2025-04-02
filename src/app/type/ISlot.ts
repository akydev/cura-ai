export interface ISlotList {
  slots: ISlots[];
}

interface ISlots {
  _id: string;
  date: string;
  time: string;
  isAvailable: boolean;
  doctorId: string;
  combinedDateTime: string;
}
