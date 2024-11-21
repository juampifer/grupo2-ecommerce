import { fetchProducts } from "../services/productService";
import { setProducts, startLoadingProducts, setError } from "./productSlice";

export const fetchProductsThunk = (categoryId='') => async (dispatch) => {
    try {
        dispatch(startLoadingProducts(true));
        const products = await fetchProducts(categoryId);
        dispatch(setProducts(products));
    } catch (error) {
        dispatch(setError(error.message));
    }
}