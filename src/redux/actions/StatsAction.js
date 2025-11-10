import api from "../../services/api";
import Constants from "../../services/constant";
import { setStats } from "../slices/statsSlice";

export const getStats = (setStatsLoading) => async (dispatch) => {
  setStatsLoading(true);
  const res = await api("get", Constants.END_POINT.STATS);
  if (res.success && res.data) {
    dispatch(setStats(res.data));
    setStatsLoading(false);
  }
};
