import React from "react";
import ProductList from "../components/ProductList";
import ProductTest from "../components/ProductTest";

// import CategoryMenu from "../components/CategoryMenu";
// import Watchlist from "../components/Watchlist";

const Home = () => {
  return (
    <div className="container">
      <ProductList/>
      {/* <CategoryMenu /> */}
      {/* <Watchlist /> */}
      <ProductTest/>
    
    </div>
  );
};

export default Home;
