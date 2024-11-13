"use client";

import ProductsList from "./components/ProductsList";
import { useProducts } from "./hooks/useProducts";

const ProductsPage = () => {
  const { products, loading, error } = useProducts();

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && <ProductsList products={products} />}
    </>
  );
};

export default ProductsPage;
