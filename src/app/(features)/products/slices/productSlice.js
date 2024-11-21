import { createSlice } from '@reduxjs/toolkit';

export const productsSlice = createSlice({
    name: 'product',
    initialState: {
        products: [],
        isLoading: false,
        error: null,
    },
    reducers: {
        startLoadingProducts: (state, /* action */ ) => {
            state.isLoading = true;
        },
        setProducts: (state, action) => {
            state.isLoading = false;
            state.products = action.payload;
            state.error = null; //Limpiar errores en caso de éxito
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
    }
});
// Action creators are generated for each case reducer function
export const { startLoadingProducts, setProducts, setError } = productsSlice.actions;