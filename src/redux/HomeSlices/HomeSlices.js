import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const FetchTodo = createAsyncThunk("todo/fetchTodoStatus", async () => {
  const { data } = await axios.get(
    "https://63bfefe9e262345656f3dc05.mockapi.io/todo"
  );
  return data;
});

const initialState = {
  items: JSON.parse(localStorage.getItem("cart") || "[]"),
  staus: "loading",
  active: 0,
};

export const HomeSlice = createSlice({
  name: "Home",
  initialState,
  reducers: {
    addHome(state, action) {
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
    setActive(state, action) {
      state.items = action.payload;
    },
    setItems(state, action) {
      state.items = action.payload;
    },
    removeTask(state, action) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
    },
  },
  extraReducers: {
    [FetchTodo.pending]: (state) => {
      state.status = "loading";
      state.items = [];
    },
    [FetchTodo.fulfilled]: (state, action) => {
      state.status = "success";
      state.items = action.payload;
    },
    [FetchTodo.rejected]: (state) => {
      state.status = "error";
      state.items = [];
    },
  },
});

export const selectItems = (state) => state.Home;

export const { addHome, setActive, setItems, removeTask, status } =
  HomeSlice.actions;

export default HomeSlice.reducer;
