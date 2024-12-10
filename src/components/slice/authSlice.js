import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  auth:""
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authAdd: (state,action) => {
        state.value
    },
   
  },
})

// Action creators are generated for each case reducer function
export const { authAdd } = authSlice.actions

export default authSlice.reducer