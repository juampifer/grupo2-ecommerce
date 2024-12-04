
"use client";
import React, { useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import OffersCard from "./OffersCard"; // Importa tu componente de card
import data from "../../db/db.json"; // Importa tus datos desde el archivo JSON
import { useSelector } from "react-redux";


const OwlCarousel = () => {
  const { items } = useSelector((state) => state.cart);
  const offers = data.products.filter((product)=>product.offerPrice);

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 4 },
    desktop: { breakpoint: { max: 1024, min: 768 }, items: 3 },
    tablet: { breakpoint: { max: 768, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };
  
  return (
    <div className="relative bg-gray-700 py-8 mt-4 flex justify-center">
      
      <Carousel
        
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        showDots={true}
        dotListClass="flex justify-center space-x-2 mt-6"
        className="px-16  mb-8 pb-10"
        centerMode={false}
        
      >
        {offers.map((offer) => (
          <OffersCard
          
            key={offer.id}
            id={offer.id}
            title={offer.title}
            description={offer.description}
            price={offer.price}
            offerPrice={offer.offerPrice}
            image={offer.image}
            items={items}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default OwlCarousel;


