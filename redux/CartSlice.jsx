/* eslint-disable react-refresh/only-export-components */
import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find(
        (item) => item.name === newItem.name
      );
      if (existingItem) {
        console.log(`${newItem.name} sudah ada`);
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...newItem, quantity: 1 }); // pastikan quantity diset
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    updateQuantity: (state, action) => {
      const { id, type } = action.payload;
      switch (type) {
        case "delete":
          state.items.map((item) => {
            if (item.id === id) {
              if (item.quantity > 1) item.quantity -= 1;
            }
          });
          break;
        case "add":
          state.items.map((item) => {
            if (item.id === id) {
              item.quantity += 1;
            }
          });
          break;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
