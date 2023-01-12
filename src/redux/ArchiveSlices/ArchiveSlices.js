import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: JSON.parse(localStorage.getItem("cart") || "[]"),
};

export const ArchiveSlice = createSlice({
  name: "Archive",
  initialState,
  reducers: {
    addArchive(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload);
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }
    },
    removeTaskArchives(state, action) {
      const filteredTask = state.items.filter(
        (obj) => obj.id !== action.payload
      );
      state.items = filteredTask;
      localStorage.setItem("cart", filteredTask);
    },
  },
});

export const selectItems = (state) => state.Archive;

export const { addArchive, removeTaskArchives } = ArchiveSlice.actions;

export default ArchiveSlice.reducer;
