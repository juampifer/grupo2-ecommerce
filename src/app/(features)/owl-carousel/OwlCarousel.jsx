
"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import OffersCard from "./OffersCard"; // Importa tu componente de card
import data from "../../db/db.json"; // Importa tus datos desde el archivo JSON


const OwlCarousel = () => {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 4 },
    desktop: { breakpoint: { max: 1024, min: 768 }, items: 3 },
    tablet: { breakpoint: { max: 768, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  return (
    <div className="relative bg-gray-600 py-8 mt-4 flex justify-center">
      <Carousel
      
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        showDots={true}
        dotListClass="flex justify-center space-x-2 mt-6"
        className="px-4 mb-8 pb-10"
        
      >
        {data.offers.map((offer) => (
          <OffersCard
            key={offer.id}
            title={offer.title}
            description={offer.description}
            price={offer.price}
            offerPrice={offer.offerPrice}
            image={offer.image}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default OwlCarousel;


