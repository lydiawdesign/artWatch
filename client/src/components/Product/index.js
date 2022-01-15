import React from "react";
import { Link } from "react-router-dom";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_WATCHLIST} from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";

function ProductItem(item) {
  const [state, dispatch] = useStoreContext();

  const {
    _id,
    title,
    description,
    image,
    startBid,
  } = item;

  const { watchlist } = state

  const addToWatchlist = () => {
    const itemInWatchlist = watchlist.find((watchlistItem) => watchlistItem._id === _id)
    if (itemInWatchlist) {
      idbPromise('watchlist', 'put', {
        ...itemInWatchlist,
      });
    } else {
      dispatch({
        type: ADD_TO_WATCHLIST,
        product: { ...item}
      });
      idbPromise('watchlist', 'put', { ...item});
    }
  }

  return (
    <div className="card px-1 py-1">
      <Link to={`/products/${_id}`}>
        <img
          alt={title}
          src={`/images/${image}`}
        />
        <p>{title}</p>
      </Link>
      <div>{description}</div>
      <div>
        <span>${startBid}</span>
      </div>
      <button onClick={addToWatchlist}>Add piece to watchlist</button>
    </div>
  );
}

export default ProductItem;
