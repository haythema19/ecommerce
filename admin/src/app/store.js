import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import authReducer from "../features/auth/authSlice";
import customerReducer from "../features/customers/customerSlice";
import productReducer from "../features/product/productSlice";
import brandReducer from "../features/brand/brandSlice";
import colorReducer from "../features/color/colorSlice";
import pCategoryReducer from "../features/category/pcategorySlice";
import bCategoryReducer from "../features/category/bcategorySlice";
import blogReducer from "../features/blog/blogSlice";
import enquiryReducer from "../features/enquiry/enquirySlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    customer: customerReducer,
    product: productReducer,
    brand: brandReducer,
    color: colorReducer,
    pCategory: pCategoryReducer,
    bCategory: bCategoryReducer,
    blog: blogReducer,
    enquiry: enquiryReducer,
  },
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
  ],
});
