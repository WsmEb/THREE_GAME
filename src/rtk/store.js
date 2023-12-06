import { configureStore } from "@reduxjs/toolkit";
import ThreeSlice from "./Slices/ThreeSlice";


const store = configureStore({
  reducer : {
    Three : ThreeSlice
  }
})
 
export default store;