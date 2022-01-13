import { useReducer } from 'react';
import {
  UPDATE_PRODUCTS,
  ADD_TO_WATCHLIST,
  REMOVE_FROM_WATCHLIST,
  ADD_MULTIPLE_TO_WATCHLIST,
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
  CLEAR_WATCHLIST,
  TOGGLE_WATCHLIST,
} from './actions';

export const reducer = (state, action) => {
  switch (action.type) {
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

    case REMOVE_FROM_WATCHLIST:
      let newState = state.watchlist.filter((product) => {
        return product._id !== action._id;
      });

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

    default:
      return state;
  }
};

export function useProductReducer(initialState) {
  return useReducer(reducer, initialState);
}
