export const TOGGLE_PIC = "TOGGLE_EDITING";
export const UPDATE_PIC = "UPDATE_PIC";

export const toggleEditing = () => {
  return {
    type: TOGGLE_PIC
  }
};

export const updatePic = (newPic) => {
  return{
    type: UPDATE_PIC,
    payload: newPic
  }
};

