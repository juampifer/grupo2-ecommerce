"use client";

import { useSearchParams } from "next/navigation";
import ProductsList from "./components/ProductsList";
import { useProducts } from "./hooks/useProducts";

const ProductsPage = () => {
  const searchParams = useSearchParams();
  const categoryId = searchParams.get('categoryId') || ''; // obtengo el parámetro desde la URL
  const { products, loading, error } = useProducts(categoryId);

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && <ProductsList products={products} />}
    </>
  );
};

export default ProductsPage;
