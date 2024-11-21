"use client";

import { useSearchParams } from "next/navigation";
import ProductsList from "./components/ProductsList";
import { useProducts } from "./hooks/useProducts";

const ProductsPage = () => {
  const searchParams = useSearchParams();
  const categoryId = searchParams.get('categoryId') || ''; // obtengo el parámetro desde la URL
  const { products, isLoading, error } = useProducts(categoryId);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!isLoading && !error && <ProductsList products={products} />}
    </>
  );
};

export default ProductsPage;
