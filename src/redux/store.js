import { configureStore } from '@reduxjs/toolkit'
import ToDo from './ToDoSlices/ToDoSlices'

export const store = configureStore({
  reducer: {
    ToDo
  },
})