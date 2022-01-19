import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_ALL_PRODUCTS} from '../../utils/queries';
import { ADD_TO_WATCHLIST } from '../../utils/mutations';
import Auth from '../../utils/auth';
import { Button } from 'react-bootstrap';
  
export const ProductList = () => {
    const {loading, data} = useQuery(QUERY_ALL_PRODUCTS);
    console.log("***",data)
    // console.log(JSON.stringify(error,null,2))
    const products = data?.products || []; 
    console.log("---",products);

    const [addToWatchlist, { error }] = useMutation(ADD_TO_WATCHLIST);
    
    const handleAddToWatchlist = async (productId) => {
        console.log("product id", productId);
        const token = Auth.loggedIn() ? Auth.getToken() : null;
    
        if (!token) {
          return false;
        }
    
        try {
          const { data } = await addToWatchlist({
            variables: { productId }
          });
        } catch (err) {
          console.error(err);
        }
      };
    

    return (
      
        <div className="container p-3">
            <h1 className='text-center pt-5'>View our Gallery:</h1>
            <div className='card_wrap--outer'>
                <div className='card__wrap--inner'>
                    <div className="card-group">
                        <div className='row row-col-2 justify-content-center border-lg-dark py-2 align-items-center'>


                            {products.map(product => (
                                <div className="card col-3 m-3 shadow p-3" key={product._id}>
                                    <img src={`/images/${product.image}`} className="card-img-top" alt="Artwork"/>
                                    <div className="card-body card text-center border-dark">
                                        <h5 className="card-title">{product.title}</h5>
                                        <p className="flexible card-text">{product.description} </p>
                                        <p className="card-text"> Category: {product.category}</p>
                                        <p className="card-text"> Starting Bid: {product.startBid}</p>
                                        <a href="/Product" className="btn btn-outline-dark m-2 buttonStyle">View Product</a>
                                        {Auth.loggedIn() && ( 
                                            <Button 
                                                className="btn btn-outline-dark m-2 buttonStyle" 
                                                onClick={() => handleAddToWatchlist(product._id)}
                                            >Add to Watchlist</Button>
                                        )}
                                    </div>
                                </div>
                            ))};
                        </div>
                    </div>
                </div>   
            </div>
        </div>


    );
}

export default ProductList;