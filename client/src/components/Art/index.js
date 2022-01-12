import React from "react";
import { Link } from "react-router-dom";
import { pluralize } from "../../utils/helpers"
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_WATCHLIST, UPDATE_WATCHLIST_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";

function ProductItem(item) {
  const [state, dispatch] = useStoreContext();

  const {
    image,
    name,
    _id,
    price,
    quantity
  } = item;

  const { watchlist } = state

  const addToWatchlist = () => {
    const itemInWatchlist = watchlist.find((watchlistItem) => watchlistItem._id === _id)
    if (itemInWatchlist) {
      dispatch({
        type: UPDATE_WATCHLIST_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInWatchlist.purchaseQuantity) + 1
      });
      idbPromise('watchlist', 'put', {
        ...itemInWatchlist,
        purchaseQuantity: parseInt(itemInWatchlist.purchaseQuantity) + 1
      });
    } else {
      dispatch({
        type: ADD_TO_WATCHLIST,
        product: { ...item, purchaseQuantity: 1 }
      });
      idbPromise('watchlist', 'put', { ...item, purchaseQuantity: 1 });
    }
  }

  return (
    <div className="card px-1 py-1">
      <Link to={`/products/${_id}`}>
        <img
          alt={name}
          src={`/images/${image}`}
        />
        <p>{name}</p>
      </Link>
      <div>
        <div>{quantity} {pluralize("item", quantity)} in stock</div>
        <span>${price}</span>
      </div>
      <button onClick={addToWatchlist}>Add to watchlist</button>
    </div>
  );
}

export default ProductItem;
