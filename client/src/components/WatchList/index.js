import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_USER } from '../../utils/queries';
import { REMOVE_FROM_WATCHLIST } from '../../utils/mutations';
import { Button } from 'react-bootstrap';
import Auth from '../../utils/auth';


export const WatchList = () => {
    const {loading, data} = useQuery(QUERY_USER);
    console.log("--data",data)
    // console.log(JSON.stringify(error,null,2))
    const products = data?.user.watchlist || []; 
    // console.log("---",products);

    const [removeFromWatchlist, {error}] = useMutation(REMOVE_FROM_WATCHLIST);

    const handleRemoveFromWatchlist = async (productId) => {
        console.log("product id", productId);
        const token = Auth.loggedIn() ? Auth.getToken() : null;
    
        if (!token) {
          return false;
        }
    
        try {
          const { data } = await removeFromWatchlist({
            variables: { productId }
          });
        } catch (err) {
          console.error(err);
        }
      };
    
    return (
      
        <div className="container p-3">
            <h1 className='text-center pt-5'>View Your Watchlist:</h1>
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
                                        <a href="/Bid" className="btn btn-outline-dark m-2 buttonStyle">Bid</a>
                                        <a href="/" className="btn btn-outline-dark m-2 buttonStyle">Back to Gallery</a>
                                        {Auth.loggedIn() && ( 
                                            <Button 
                                                className="btn btn-outline-dark m-2 buttonStyle" 
                                                onClick={() => handleRemoveFromWatchlist(product._id)}
                                            >Remove From Watchlist</Button>
                                        )}                                    
                                    </div>
                                </div>
                            ))};
                        </div>
                    </div>
                </div>   
            </div>
        </div>
    )
}

export default WatchList;