import { configureStore } from '@reduxjs/toolkit'
import Home from './HomeSlices/HomeSlices'
import Archive from './ArchiveSlices/ArchiveSlices'
import Basket from './BasketSlices/BasketSlices'

export const store = configureStore({
  reducer: {
    Home,
    Archive,
    Basket
  },
})