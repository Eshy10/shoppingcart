import { createSlice } from '@reduxjs/toolkit';
import { DataList } from './actionTypes';

interface cartList extends DataList {
    quantity: number
}


const cartSlice = createSlice({
  name: 'cart',
  initialState: [] as cartList[],
  reducers: {
    addToCart: (state, action) => {
      const existingCartItems = state.find((item) => item.id === action.payload.id);
      if (existingCartItems) {
        existingCartItems.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const existingCartItemsIndex = state.findIndex((item) => item.id === action.payload);
      if (state[existingCartItemsIndex].quantity > 1) {
        state[existingCartItemsIndex].quantity -= -1
      } else {
        return state.filter(item => item.id !== action.payload.id)
      }
    },
  },
});

export const cartReducer = cartSlice.reducer;

export const {
  addToCart,
  removeFromCart,
} = cartSlice.actions;