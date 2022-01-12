import React, { useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useLazyQuery } from '@apollo/client';
import { QUERY_CHECKOUT } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import WatchlistItem from '../WatchlistItem';
import Auth from '../../utils/auth';
import { useStoreContext } from '../../utils/GlobalState';
import { TOGGLE_WATCHLIST, ADD_MULTIPLE_TO_WATCHLIST } from '../../utils/actions';
import './style.css';

const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const Watchlist = () => {
  const [state, dispatch] = useStoreContext();
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);

  useEffect(() => {
    async function getWatchlist() {
      const watchlist = await idbPromise('watchlist', 'get');
      dispatch({ type: ADD_MULTIPLE_TO_WATCHLIST, products: [...watchlist] });
    }

    if (!state.watchlist.length) {
      getWatchlist();
    }
  }, [state.watchlist.length, dispatch]);

  function toggleWatchlist() {
    dispatch({ type: TOGGLE_WATCHLIST });
  }

  function calculateTotal() {
    let sum = 0;
    state.watchlist.forEach((item) => {
      sum += item.price * item.purchaseQuantity;
    });
    return sum.toFixed(2);
  }

  function submitCheckout() {
    const productIds = [];

    state.watchlist.forEach((item) => {
      for (let i = 0; i < item.purchaseQuantity; i++) {
        productIds.push(item._id);
      }
    });

    getCheckout({
      variables: { products: productIds },
    });
  }

  if (!state.watchlistOpen) {
    return (
      <div className="watchlist-closed" onClick={toggleWatchlist}>
        <span role="img" aria-label="trash">
          🛒
        </span>
      </div>
    );
  }

  return (
    <div className="watchlist">
      <div className="close" onClick={toggleWatchlist}>
        [close]
      </div>
      <h2>Shopping Watchlist</h2>
      {state.watchlist.length ? (
        <div>
          {state.watchlist.map((item) => (
            <WatchlistItem key={item._id} item={item} />
          ))}

          <div className="flex-row space-between">
            <strong>Total: ${calculateTotal()}</strong>

            {Auth.loggedIn() ? (
              <button onClick={submitCheckout}>Checkout</button>
            ) : (
              <span>(log in to check out)</span>
            )}
          </div>
        </div>
      ) : (
        <h3>
          <span role="img" aria-label="shocked">
            😱
          </span>
          You haven't added anything to your watchlist yet!
        </h3>
      )}
    </div>
  );
};

export default Watchlist;
