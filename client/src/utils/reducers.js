import { useReducer } from 'react';
import {
  UPDATE_PRODUCTS,
  ADD_TO_WATCHLIST,
  UPDATE_WATCHLIST_QUANTITY,
  REMOVE_FROM_WATCHLIST,
  ADD_MULTIPLE_TO_WATCHLIST,
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
  CLEAR_WATCHLIST,
  TOGGLE_WATCHLIST,
} from './actions';

// The reducer is a function that accepts the current state and an action. It returns a new state based on that action.
export const reducer = (state, action) => {
  switch (action.type) {
    // Returns a copy of state with an update products array. We use the action.products property and spread it's contents into the new array.
    case UPDATE_PRODUCTS:
      return {
        ...state,
        products: [...action.products],
      };

    case ADD_TO_WATCHLIST:
      return {
        ...state,
        watchlistOpen: true,
        watchlist: [...state.watchlist, action.product],
      };
    case ADD_MULTIPLE_TO_WATCHLIST:
      return {
        ...state,
        watchlist: [...state.watchlist, ...action.products],
      };
    // Returns a copy of state, sets the watchlistOpen to true and maps through the items in the watchlist.
    // If the item's `id` matches the `id` that was provided in the action.payload, we update the purchase quantity.
    case UPDATE_WATCHLIST_QUANTITY:
      return {
        ...state,
        watchlistOpen: true,
        watchlist: state.watchlist.map((product) => {
          if (action._id === product._id) {
            product.purchaseQuantity = action.purchaseQuantity;
          }
          return product;
        }),
      };

    // First we iterate through each item in the watchlist and check to see if the `product._id` matches the `action._id`
    // If so, we remove it from our watchlist and set the updated state to a variable called `newState`
    case REMOVE_FROM_WATCHLIST:
      let newState = state.watchlist.filter((product) => {
        return product._id !== action._id;
      });

      // Then we return a copy of state and check to see if the watchlist is empty.
      // If not, we set the watchlistOpen status to  `true`. Then we return an updated watchlist array set to the value of `newState`.
      return {
        ...state,
        watchlistOpen: newState.length > 0,
        watchlist: newState,
      };

    case CLEAR_WATCHLIST:
      return {
        ...state,
        watchlistOpen: false,
        watchlist: [],
      };

    case TOGGLE_WATCHLIST:
      return {
        ...state,
        watchlistOpen: !state.watchlistOpen,
      };

    case UPDATE_CATEGORIES:
      return {
        ...state,
        categories: [...action.categories],
      };

    case UPDATE_CURRENT_CATEGORY:
      return {
        ...state,
        currentCategory: action.currentCategory,
      };

    // Return the state as is in the event that the `action.type` passed to our reducer was not accounted for by the developers
    // This saves us from a crash.
    default:
      return state;
  }
};

export function useProductReducer(initialState) {
  return useReducer(reducer, initialState);
}
