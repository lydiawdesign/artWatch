// import React, { useEffect } from 'react';
// import { loadStripe } from '@stripe/stripe-js';
// import { useLazyQuery } from '@apollo/client';
// import { QUERY_CHECKOUT } from '../../utils/queries';
// import { idbPromise } from '../../utils/helpers';
// import WatchlistItem from '../ProductItem';
// import Auth from '../../utils/auth';
// import { useStoreContext } from '../../utils/GlobalState';
// import { TOGGLE_WATCHLIST, ADD_MULTIPLE_TO_WATCHLIST } from '../../utils/actions';
// import './style.css';

import React, { useEffect } from 'react';
import ProductItem from '../Product';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_PRODUCTS } from '../../utils/actions';
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCTS } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';

const Watchlist = () => {
  const [state, dispatch] = useStoreContext();

  const { currentCategory } = state;

  const { loading, data } = useQuery(QUERY_PRODUCTS);

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });
      data.products.forEach((product) => {
        idbPromise('products', 'put', product);
      });
    } else if (!loading) {
      idbPromise('products', 'get').then((products) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: products,
        });
      });
    }
  }, [data, loading, dispatch]);

  function filterProducts() {
    if (!currentCategory) {
      return state.products;
    }

    return state.products.filter(
      (product) => product.category._id === currentCategory
    );
  }

  return (
    <div className="my-2">
      <h2>Artwork</h2>
      {state.products.length ? (
        <div className="flex-row">
          {filterProducts().map((product) => (
            <ProductItem
              // key={product._id}
              _id={product._id}
              title={product.title}
              description={product.description}
              image={product.image}
              startBid={product.startBid}
            />
          ))}
        </div>
      ) : (
        <h3>You don't have any artwork in your watchlist!</h3>
      )}
    </div>
  );

  
};



export default Watchlist;
