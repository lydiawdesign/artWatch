import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import Watchlist from '../components/Watchlist';
import { useStoreContext } from '../utils/GlobalState';
import {
  REMOVE_FROM_WATCHLIST,
  UPDATE_WATCHLIST_QUANTITY,
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
    // already in global store
    if (products.length) {
      setCurrentProduct(products.find((product) => product._id === id));
    }
    // retrieved from server
    else if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });

      data.products.forEach((product) => {
        idbPromise('products', 'put', product);
      });
    }
    // get cache from idb
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
      dispatch({
        type: UPDATE_WATCHLIST_QUANTITY,
        _id: id,
        purchaseQuantity: parseInt(itemInWatchlist.purchaseQuantity) + 1,
      });
      idbPromise('watchlist', 'put', {
        ...itemInWatchlist,
        purchaseQuantity: parseInt(itemInWatchlist.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_WATCHLIST,
        product: { ...currentProduct, purchaseQuantity: 1 },
      });
      idbPromise('watchlist', 'put', { ...currentProduct, purchaseQuantity: 1 });
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
            <strong>Price:</strong>${currentProduct.price}{' '}
            <button onClick={addToWatchlist}>Add to Watchlist</button>
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
