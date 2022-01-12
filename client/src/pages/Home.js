import React from "react";
import Gallery from "../components/Gallery";
import CategoryMenu from "../components/CategoryMenu";
import Watchlist from "../components/Watchlist";

const Home = () => {
  return (
    <div className="container">
      <CategoryMenu />
      <Gallery />
      <Watchlist />
    </div>
  );
};

export default Home;
