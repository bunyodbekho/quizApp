import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productName: "",
  productSize: 0,
  productAuthor: "",
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProductName: (state, action) => {
      state.productName = action.payload;
    },
    setProductSize: (state, action) => {
      state.productSize += action.payload;
    },
    setProductAuthor: (state, action) => {
      state.productAuthor = action.payload;
    },
  },
});

export const { setProductName, setProductSize, setProductAuthor } =
  productSlice.actions;

export default productSlice.reducer;
