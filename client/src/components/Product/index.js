import React from 'react'
import { useQuery } from '@apollo/client';
import { QUERY_ALL_PRODUCTS} from '../../utils/queries';

export const Product = () => {
    const {loading, data, } = useQuery(QUERY_ALL_PRODUCTS);
    
    const product = data?.product || []; 
    
    return (
        <>
            <div className="media">
                {product.map(product => (
                    <div className="card" key={product._id}>
                        <img src={`/images/${product.image}`} className="card-img-top" alt="Artwork"/>
                        <div className="card-body card text-center">
                            <h5 className="card-title">{product.title}</h5>
                            <p className="card-text">{product.description} </p>
                            <p className="card-text"> Starting Bid:${product.startBid}</p>
                            <a href="/" className="btn btn-outline-dark m-2 buttonStyle">Back to Gallery</a>
                            <a href="/Watchlist" className="btn btn-outline-dark m-2 buttonStyle">Add to Watchlist</a>
                            <a href="bid" className="btn btn-outline-dark m-2 buttonStyle">Make a Bid</a>
                        </div>
                    </div>) 
                )}
            </div>
        </>
    );
}

export default Product;