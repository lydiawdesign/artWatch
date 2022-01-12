import React from "react";
import Gallery from "../components/Gallery";
import CategoryMenu from "../components/CategoryMenu";
import WatchList from "../components/WatchList";

const Home = () => {
  return (
    <div className="container">
      <CategoryMenu />
      <Gallery />
      <WatchList />
    </div>
  );
};

export default Home;
