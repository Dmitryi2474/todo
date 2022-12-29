import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const FetchTodo = createAsyncThunk('odo/fetchTodoStatus', async () => {
  const { data } = await axios.get(
    'https://6363c19237f2167d6f828690.mockapi.io/todo'
  );
  return data;
});

const initialState = {
  items: [],
  staus: 'loading',
};

export const ToDoSlice = createSlice({
  name: 'ToDo',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
    removeTask(state, action) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
    },
  },
  extraReducers: {
    [FetchTodo.pending]: (state) => {
      state.status = 'loading';
      state.items = [];
    },
    [FetchTodo.fulfilled]: (state, action) => {
      state.status = 'success';
      state.items = action.payload;
    },
    [FetchTodo.rejected]: (state) => {
      state.status = 'error';
      state.items = [];
    },
  },
});

export const selectItems = (state) => state.ToDo;

export const { setItems, removeTask, status } = ToDoSlice.actions;

export default ToDoSlice.reducer;
