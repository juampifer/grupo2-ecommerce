import { configureStore } from "@reduxjs/toolkit";
import { productsSlice } from "../(features)/products/slices/productSlice";

export const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
  },
});