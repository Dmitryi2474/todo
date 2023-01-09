import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: JSON.parse(localStorage.getItem('cart') || []),
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
    removeTaskBask(state, action) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
    },
    clearItem(state) {
      state.items = [];
    },
  },
});

export const selectItems = (state) => state.Basket;

export const { addBasket, removeTaskBask, clearItem } = BasketSlice.actions;

export default BasketSlice.reducer;
