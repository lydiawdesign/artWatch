import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import Watchlist from '../components/Watchlist';
import { useStoreContext } from '../utils/GlobalState';
import {
  REMOVE_FROM_WATCHLIST,
  ADD_TO_WATCHLIST,
  UPDATE_PRODUCTS,
} from '../utils/actions';
import { QUERY_PRODUCTS } from '../utils/queries';
import { idbPromise } from '../utils/helpers';
import spinner from '../assets/spinner.gif';

function Detail() {
  const [state, dispatch] = useStoreContext();
  const { id } = useParams();

  const [currentProduct, setCurrentProduct] = useState({});

  const { loading, data } = useQuery(QUERY_PRODUCTS);

  const { products, watchlist } = state;

  useEffect(() => {
    if (products.length) {
      setCurrentProduct(products.find((product) => product._id === id));
    }
    else if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });

      data.products.forEach((product) => {
        idbPromise('products', 'put', product);
      });
    }
    else if (!loading) {
      idbPromise('products', 'get').then((indexedProducts) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: indexedProducts,
        });
      });
    }
  }, [products, data, loading, dispatch, id]);

  const addToWatchlist = () => {
    const itemInWatchlist = watchlist.find((watchlistItem) => watchlistItem._id === id);
    if (itemInWatchlist) {
  
    } else {
      dispatch({
        type: ADD_TO_WATCHLIST,
        product: { ...currentProduct, },
      });
      idbPromise('watchlist', 'put', { ...currentProduct,  });
    }
  };

  const removeFromWatchlist = () => {
    dispatch({
      type: REMOVE_FROM_WATCHLIST,
      _id: currentProduct._id,
    });

    idbPromise('watchlist', 'delete', { ...currentProduct });
  };

  return (
    <>
      {currentProduct && watchlist ? (
        <div className="container my-1">
          <Link to="/">← Back to Products</Link>

          <h2>{currentProduct.name}</h2>

          <p>{currentProduct.description}</p>

          <p>
            <strong>Starting Price:</strong>${currentProduct.price}{' '}
            <button onClick={addToWatchlist}>Add to Watchlist</button>
            {/* need to add functionality of bidding */}
            <button onClick={addToWatchlist}>Make a Bid</button>

            <button
              disabled={!watchlist.find((p) => p._id === currentProduct._id)}
              onClick={removeFromWatchlist}
            >
              Remove from Watchlist
            </button>
          </p>

          <img
            src={`/images/${currentProduct.image}`}
            alt={currentProduct.name}
          />
        </div>
      ) : null}
      {loading ? <img src={spinner} alt="loading" /> : null}
      <Watchlist />
    </>
  );
}

export default Detail;
