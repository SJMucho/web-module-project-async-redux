import { FETCH_PIC_START, FETCH_PIC_SUCCESS } from "../actions/catPicActions";

const initialState = {
  jpeg: "Initial cat pic",
  loading: false,
  error: "",
};

export const picReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PIC_START:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PIC_SUCCESS:
      return {
        ...state,
        jpeg: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
