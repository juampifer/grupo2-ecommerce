import React from "react";
import ProductsCard from "./ProductsCard";

const ProductsList = ({ products , items}) => {
  return (
    <div className="flex flex-wrap gap-4 justify-center mt-2">
      {products.map((product) => (
        <ProductsCard
          key={product.id}
          id={product.id}
          title={product.title}
          description={product.description}
          price={product.price}
          image={product.image}
          items={items}
        />
      ))}
    </div>
  );
};

export default ProductsList;
