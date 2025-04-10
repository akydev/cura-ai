// Step 1: Define the initial state and the action types
export const initialState = {
  step: 0,
  selectedSpeciality: {
    id: "",
    isFilter: "filterDoctors",
  },
  selectedDoctor: "",
  slotId: "",
};

type Action =
  | { type: "SET_STEP"; payload: number }
  | { type: "SET_SPECIALITY_ID"; payload: string }
  | {
      type: "SET_DOCTOR_ID";
      payload: { doctorId: string; specialityId: string };
    }
  | { type: "SET_SLOT_ID"; payload: string }
  | { type: "RESET" }
  | { type: "OPEN_DOCTOR_TAB" };

export const bookAppointmentReducer = (
  state: typeof initialState,
  action: Action
) => {
  switch (action.type) {
    case "SET_STEP":
      return { ...state, step: action.payload };

    case "SET_SPECIALITY_ID":
      return {
        ...state,
        selectedSpeciality: { id: action.payload, isFilter: "filterDoctors" },
        step: state.step + 1,
      };

    case "SET_DOCTOR_ID":
      return {
        ...state,
        selectedDoctor: action.payload.doctorId,
        selectedSpeciality: {
          id: action.payload.specialityId,
          isFilter: "selectedDoctor",
        },
        step: state.step + 1,
      };

    case "OPEN_DOCTOR_TAB":
      return {
        ...state,
        step: 1,
        selectedDoctor: "",
        selectedSpeciality: { id: "", isFilter: "allDoctors" }, // Reset specialty filter
      };

    case "SET_SLOT_ID":
      return { ...state, slotId: action.payload, step: state.step + 1 };

    case "RESET":
      return { ...initialState };

    default:
      return state;
  }
};
