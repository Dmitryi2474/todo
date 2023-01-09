import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: JSON.parse(localStorage.getItem('cart') || []),
  count: 0,
};

export const ArchiveSlice = createSlice({
  name: "Archive",
  initialState,
  reducers: {
    addArchive(state, action) {
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
    removeTaskArchives(state, action) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
    },
  },
});

export const selectItems = (state) => state.Archive;

export const { addArchive, removeTaskArchives } = ArchiveSlice.actions;

export default ArchiveSlice.reducer;
