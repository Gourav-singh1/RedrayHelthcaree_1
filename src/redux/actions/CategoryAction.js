import api from "../../services/api";
import Constants from "../../services/constant";
import { setCategory } from "../slices/CategorySlice";

export const getCategory = (setCategoryLoading) => async (dispatch) => {
  setCategoryLoading(true);
  const res = await api("get", Constants.END_POINT.CATEGORY);
  if (res.success && res.data) {
    dispatch(setCategory(res.data));
    setCategoryLoading(false);
  }
};
