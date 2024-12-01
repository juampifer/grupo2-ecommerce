import React from "react";
import OffersCard from "./OffersCard";

const OffersList = ({ offers }) => {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {offers.map((offer) => (
        <OffersCard
          key={offer.id}
          title={offer.title}
          description={offer.description}
          price={offer.price}
          offerPrice={offer.offerPrice}
          image={offer.image}
        />
      ))}
    </div>
  );
};

export default OffersList;
