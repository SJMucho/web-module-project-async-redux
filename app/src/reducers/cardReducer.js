import { TOGGLE_CARD, UPDATE_PIC } from "./picCardActions";

const initialState = {
  changing: false,
  jpeg: "Cat Pic Of the Day!"
};

export const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_CARD,
    return {
      ...state,
      changing: !state.changing
    }
    case UPDATE_PIC:
      return {
        ...state,
        jpeg: action.payload,
        changing: false
      }
      default:
        return state;
  }
}

