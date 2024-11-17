import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";

export const useProducts = (categoryId = '') => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadProducts = async () => {
    try {
      const data = await getProducts(categoryId);
      setProducts(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProducts();
  }, [categoryId]); //volver a consultar los productos si cambia la categoria

  return { products, loading, error };
}
