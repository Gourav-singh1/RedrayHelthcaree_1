import api from "../../services/api";
import Constants from "../../services/constant";
import { setSparepart } from "../slices/sparepartSlice";

export const getSpareparts = (setSparePartLoading) => async (dispatch) => {
  setSparePartLoading(true);
  const res = await api("get", Constants.END_POINT.SPAREPARTS);
  if (res.success && res.data) {
    dispatch(setSparepart(res.data));
    setSparePartLoading(false);
  } else {
    // optional: handle error
  }
};
