// slices/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { fetchCartItems, addCartItem, deleteCartItemThunk } from './cartThunks';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    clearCart: (state) => {
      state.items = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartItems.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCartItems.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchCartItems.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(addCartItem.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(addCartItem.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.error = null;
        const updatedItem = action.payload;
        const existingItem = state.items.find((item) => item.id === updatedItem.id);

        if (existingItem) {
          existingItem.quantity = updatedItem.quantity;
        } else {
          state.items.push(updatedItem);
        }
      })
      .addCase(addCartItem.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'Ocurrió un error desconocido.';
      })
      .addCase(deleteCartItemThunk.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload.id);
      });
  },
});

export const { clearCart } = cartSlice.actions;
export default cartSlice.reducer;
