import { configureStore } from '@reduxjs/toolkit'
import productSlice  from './components/slice/productSlice'
import authSlice from './components/slice/authSlice'

export const store = configureStore({
  reducer: {
    product:productSlice,
    auth:authSlice
  },
})