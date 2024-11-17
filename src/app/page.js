import ProductsPage from "./(features)/products/page";
import OwlCarousel from "./(features)/owl-carousel/OwlCarousel";
import Video from "./(features)/video-nvidia/Video";

import React from "react";

const Home = () => {
  return (
    <main>
      <Video />
      <OwlCarousel />
      <ProductsPage />
    </main>
  );
};

export default Home;
