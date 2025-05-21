import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    //Action
    addItem: (state, action) => {
      //Mutating the state over here - Directly Modifing the state
      //We have to mutate the state - No need to return (like older venella js)
      //Uses the immer behind the seen
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      //   state.items.pop();
      state.items = state.items.filter(
        (item) => item.card.info.id != action.payload.card.info.id
      );
    },
    //originalState = {items : ["Pizza"]}
    clearItem: (state) => {
      state.items.length = 0;
      //RtK - either return th existing state or retiurn a new state
      // Whatever we return from the reducer that will directly replace in to the state (Original state)
      //   return { items : [] }  - this new [] object  will be replaced inside the orginalState = []
    },
  },
});

export const { addItem, removeItem, clearItem } = cartSlice.actions;
export default cartSlice.reducer;
