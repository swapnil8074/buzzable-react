import axios from "axios";
import { GET_ERRORS, CLEAR_ERRORS } from "./types";

// return errors
export const returnErrors = (msg, status, id = null) => ({
  type: GET_ERRORS,
  payload: { msg, status, id }
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});
