import React from 'react';
import { useStoreContext } from "../../utils/GlobalState";
import { REMOVE_FROM_WATCHLIST, UPDATE_WATCHLIST_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";

const WatchlistItem = ({ item }) => {

  const [, dispatch] = useStoreContext();

  const removeFromWatchlist = item => {
    dispatch({
      type: REMOVE_FROM_WATCHLIST,
      _id: item._id
    });
    idbPromise('watchlist', 'delete', { ...item });

  };

  const onChange = (e) => {
    const value = e.target.value;
    if (value === '0') {
      dispatch({
        type: REMOVE_FROM_WATCHLIST,
        _id: item._id
      });
      idbPromise('watchlist', 'delete', { ...item });

    } else {
      dispatch({
        type: UPDATE_WATCHLIST_QUANTITY,
        _id: item._id,
        purchaseQuantity: parseInt(value)
      });
      idbPromise('watchlist', 'put', { ...item, purchaseQuantity: parseInt(value) });

    }
  }

  return (
    <div className="flex-row">
      <div>
        <img
          src={`/images/${item.image}`}
          alt=""
        />
      </div>
      <div>
        <div>{item.name}, ${item.price}</div>
        <div>
          <span>Qty:</span>
          <input
            type="number"
            placeholder="1"
            value={item.purchaseQuantity}
            onChange={onChange}
          />
          <span
            role="img"
            aria-label="trash"
            onClick={() => removeFromWatchlist(item)}
          >
            🗑️
          </span>
        </div>
      </div>
    </div>
  );
}

export default WatchlistItem;