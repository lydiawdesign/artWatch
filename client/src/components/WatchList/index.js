import React, { useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useLazyQuery } from '@apollo/client';
import { QUERY_CHECKOUT } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import WatchlistItem from '../ProductItem';
import Auth from '../../utils/auth';
import { useStoreContext } from '../../utils/GlobalState';
import { TOGGLE_WATCHLIST, ADD_MULTIPLE_TO_WATCHLIST } from '../../utils/actions';
import './style.css';


const Watchlist = () => {
  const [state, dispatch] = useStoreContext();

  
};

export default Watchlist;
