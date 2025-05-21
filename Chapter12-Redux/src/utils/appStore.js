import {configureStore} from "@reduxjs/toolkit";
import reducer from "./cartSlice";
import cartReducer from "./cartSlice"

//Using configurestore creating the store and adding slice inside it9Within the {})
const appStore = configureStore({
    //This reducer for whole store and it consistes of the reducer of the slices in the store
  reducer : {
    //This is the reducer consists of the slices of the reducer
    cart : cartReducer
  }
});

export default appStore;

//RTK library do the redux hings like creating the store..
//Providing the store to the redux appliaction is the 