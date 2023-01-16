import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // itemsBasket: JSON.parse(localStorage.getItem("cart") || "[]"),
  itemsBasket: [],
};

export const BasketSlice = createSlice({
  name: "Basket",
  initialState,
  reducers: {
    addBasket(state, action) {
      const findItem = state.itemsBasket.find(
        (obj) => obj.id === action.payload.id
      );
      if (findItem) {
        findItem.count++;
      } else {
        state.itemsBasket.push({
          ...action.payload,
          count: 1,
        });
      }
    },
    removeTaskBask(state, action) {
      const filteredTask = state.itemsBasket.filter(
        (obj) => obj.id !== action.payload
      );
      state.itemsBasket = filteredTask;
      localStorage.setItem("cart", filteredTask);
    },
    clearItem(state) {
      state.itemsBasket = [];
      localStorage.setItem("cart", "[]");
    },
  },
});

export const selectItemsBasket = (state) => state.Basket;

export const { addBasket, removeTaskBask, clearItem } = BasketSlice.actions;

export default BasketSlice.reducer;
