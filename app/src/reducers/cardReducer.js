import { TOGGLE_PIC, UPDATE_PIC } from "../actions/picCardActions";

const initialState = {
  changing: false,
  jpeg: "Cat Pic Of the Day!",
};

export const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_PIC:
      return {
        ...state,
        changing: !state.changing,
      };
    case UPDATE_PIC:
      return {
        ...state,
        jpeg: action.payload,
        changing: false,
      };
    default:
      return state;
  }
};
