import axios from "axios";

export const FETCH_PIC_START = "FETCH_PIC_START";
export const FETCH_PIC_SUCCESS = "FETCH_PIC_SUCCESS";
export const FETCH_PIC_FAILURE = "FETCH_PIC_FAILURE";

export const fetchCat = () => (dispatch) => {
  dispatch({ type: FETCH_PIC_START });
  axios
    .get("https://http.cat.jpeg/")

    .then((res) => {
      console.log(res);
      dispatch({ type: FETCH_PIC_SUCCESS, payload: res.data.jpeg });
    })

    .catch((err) => {
      console.log(err);
      dispatch({ type: FETCH_PIC_FAILURE, payload: err });
    });
};
