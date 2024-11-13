import React from "react";
import ProductsCard from "./ProductsCard";

const ProductsList = ({ products }) => {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {products.map((product) => (
        <ProductsCard
          key={product.id}
          title={product.title}
          description={product.description}
          price={product.price}
          image={product.image}
        />
      ))}
    </div>
  );
};

export default ProductsList;
