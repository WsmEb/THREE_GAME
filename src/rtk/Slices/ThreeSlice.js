import { createSlice } from "@reduxjs/toolkit";

const initialState = []
const ThreeSlice = createSlice({
  name : "ThreeSlice",
  initialState,
  reducers : {
    ClonePosition : (state,action) => {
      return [
        action.payload
      ]
    }
  }
})

export const { ClonePosition } = ThreeSlice.actions 
export default ThreeSlice.reducer;