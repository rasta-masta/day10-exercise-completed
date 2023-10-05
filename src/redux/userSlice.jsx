import React from "react";
import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name : "users",
  initialState: {
    value: []
  },
  reducers: {
    setData: (state, action) => {
      state.value = action.payload
    }
  }
}) 

export const { setData } = userSlice.actions;
export const userReducer = userSlice.reducer;






 
  
 
 
export default userSlice;
