import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const BasketSlice = createSlice({
  name: "Basket",
  initialState,
  reducers: {
    addBasket(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }
    },
  },
});

export const selectItems = (state) => state.Basket;

export const { addBasket } = BasketSlice.actions;

export default BasketSlice.reducer;
