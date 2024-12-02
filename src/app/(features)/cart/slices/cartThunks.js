import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCart, addToCart, updateCartItem, deleteCartItem } from '../services/cartService';

export const fetchCartItems = createAsyncThunk(
  'cart/fetchCartItems',
  async (_, { rejectWithValue }) => {
    try {
      return await fetchCart();
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const addCartItem = createAsyncThunk(
  'cart/addCartItem',
  async (product,{ getState, rejectWithValue }) => {
    try {
      const { cart } = getState();
      const existingItem = cart.items.find((item) => item.id === product.id);
      if (existingItem) {
        const updatedProduct = {
          ...existingItem,
          quantity: product.quantity,
        };
        return await updateCartItem(updatedProduct);
      } else {
        return await addToCart({ ...product, quantity: 1 });
      }
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const deleteCartItemThunk = createAsyncThunk(
  'cart/deleteCartItem',
  async (id, { rejectWithValue }) => {
    try {
      return await deleteCartItem(id);
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
