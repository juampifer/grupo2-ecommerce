"use client";

import { useSearchParams } from "next/navigation";
import ProductsList from "./components/ProductsList";
import { useProducts } from "./hooks/useProducts";
import { useEffect, useState } from "react";
import { fetchCartItems } from "../cart/slices/cartThunks";
import { useDispatch, useSelector } from "react-redux";

const ProductsPage = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);
  const searchParams = useSearchParams();
  const categoryId = searchParams.get('categoryId') || ''; // obtengo el parámetro desde la URL
  const { products, isLoading, error } = useProducts(categoryId);

  // bloque agregado para mostrar el loading mientras se cargan los productos
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    dispatch(fetchCartItems());
      if (isLoading) {
          setShowLoading(true);
      } else {
          // Retrasa la ocultación del indicador para asegurar que sea visible
          const timer = setTimeout(() => setShowLoading(false), 600);
          return () => clearTimeout(timer);
      }
  }, [dispatch, isLoading]);

  return (
    <>
      {showLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!showLoading && !error && <ProductsList products={products} items={items} />}
    </>
  );
};

export default ProductsPage;
