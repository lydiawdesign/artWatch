import React, { useEffect } from 'react';
import { QUERY_PRODUCTS } from '../../utils/queries';
import { useQuery } from '@apollo/client';
import Product from '../Product';
import { useDispatch, useSelector } from 'react-redux';
import { idbPromis } from '../../utils/helpers';




function Watchlist() {
    const state = useSelector(state => state);
    const dispatch = useDispatch();

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


return (
    <div className="my-2">
      <h2>Your Art:</h2>
      {state.products.length ? (
        <div className="flex-row">
          {filterProducts().map((product) => (
            <Product
              _id={product._id}
              title={product.title}
              image={product.image}
              startBid={product.startBid}
              
            />
          ))}
        </div>
      ) : (
        <h3>You haven't bid on any art!</h3>
      )}
    
    </div>
  );
}

export default Watchlist;