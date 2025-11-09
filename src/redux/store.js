import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/productSlice.js";
import categoryReducer from "./slices/CategorySlice.js";
import sparepartReducer from "./slices/sparepartSlice.js";
import statsReducer from "./slices/statsSlice.js";

export const store = configureStore({
  reducer: {
    products: productReducer,
    category: categoryReducer,
    sparepart: sparepartReducer,
    stats: statsReducer,
  },
});
