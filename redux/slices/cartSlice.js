import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedItems: { items: [], restaurantName: "" },
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      console.log(action.payload);
      if (action.payload.checkboxValue) {
        console.log("ADD TO CART");

        state.selectedItems = {
          items: [...state.selectedItems.items, action.payload.item],
          restaurantName: action.payload.restaurantName,
        };
      } else {
        console.log("REMOVE FROM CART");
        state.selectedItems = {
          items: [
            ...state.selectedItems.items.filter(
              (item) => item.title !== action.payload.item.title
            ),
          ],
          restaurantName: action.payload.restaurantName,
        };
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
