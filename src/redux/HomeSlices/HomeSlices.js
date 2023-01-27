import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const FetchTodo = createAsyncThunk("todo/fetchTodoStatus", async () => {
  const { data } = await axios.get(
    "https://63bfefe9e262345656f3dc05.mockapi.io/todo"
  );
  return data;
});

const initialState = {
  itemsHome: JSON.parse(localStorage.getItem("cart")) || [],
  staus: "loading",
  active: 0,
};

export const HomeSlice = createSlice({
  name: "Home",
  initialState,
  reducers: {
    addHome(state, action) {
      const findItem = state.itemsHome.find(
        (obj) => obj.id === action.payload.id
      );
      if (findItem) {
        findItem.count++;
      } else {
        state.itemsHome.push({
          ...action.payload,
          count: 1,
        });
      }
    },
    setActive(state, action) {
      state.itemsHome = action.payload;
    },
    setItems(state, action) {
      state.itemsHome = action.payload;
    },
    removeTask(state, action) {
      state.itemsHome = state.itemsHome.filter(
        (obj) => obj.id !== action.payload
      );
    },
  },
  extraReducers: {
    [FetchTodo.pending]: (state) => {
      state.status = "loading";
      state.itemsHome = [];
    },
    [FetchTodo.fulfilled]: (state, action) => {
      state.status = "success";
      state.itemsHome = action.payload;
    },
    [FetchTodo.rejected]: (state) => {
      state.status = "error";
      state.itemsHome = [];
    },
  },
});

export const selectItemsHome = (state) => state.Home;

export const { addHome, setActive, setItems, removeTask, status } =
  HomeSlice.actions;

export default HomeSlice.reducer;
