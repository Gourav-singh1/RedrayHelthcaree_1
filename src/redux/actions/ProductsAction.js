import api from "../../services/api";
import Constants from "../../services/constant";
import { setProduct } from "../slices/productSlice";

export const getProducts = (setLoading) => async (dispatch) => {
  setLoading(true)
  const res = await api("get", Constants.END_POINT.PRODUCT);
  if (res.success && res.data) {
    dispatch(setProduct(res.data));
    setLoading(false)
  } else {
    // optional: handle error
  }
};
