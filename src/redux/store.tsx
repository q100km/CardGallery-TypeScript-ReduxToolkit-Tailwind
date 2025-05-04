import { configureStore } from '@reduxjs/toolkit'
import cardSlice from './slices/cardSlice'
import filterSlice from './slices/filterSlice'
import errorSlice from './slices/errorSlice.tsx'

const store = configureStore({
  reducer: {
    card: cardSlice,
    filter: filterSlice,
    error: errorSlice,
  },
})

export default store
