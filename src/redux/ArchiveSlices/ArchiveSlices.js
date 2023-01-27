import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  itemsArchive: JSON.parse(localStorage.getItem("Archive")) || [],
};

export const ArchiveSlice = createSlice({
  name: "Archive",
  initialState,
  reducers: {
    addArchive(state, action) {
      const findItem = state.itemsArchive.find((obj) => obj.id === action.payload);
      if (findItem) {
        findItem.count++;
      } else {
        state.itemsArchive.push({
          ...action.payload,
          count: 1,
        });
      }
    },
    removeTaskArchives(state, action) {
      const filteredTask = state.itemsArchive.filter(
        (obj) => obj.id !== action.payload
      );
      state.itemsArchive = filteredTask;
      localStorage.setItem("cart", filteredTask);
    },
  },
});

export const selectItemsArchive = (state) => state.Archive;

export const { addArchive, removeTaskArchives } = ArchiveSlice.actions;

export default ArchiveSlice.reducer;
