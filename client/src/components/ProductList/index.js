import React from 'react';
// import '../App.css';

import { useQuery } from '@apollo/client';
import { QUERY_ALL_PRODUCTS} from '../../utils/queries';



export const ProductList = () => {
    const {loading, data, error} = useQuery(QUERY_ALL_PRODUCTS);
    console.log("***",data)
    console.log(JSON.stringify(error,null,2))
    const products = data?.products || []; 
    console.log("---",products);
    return (
      
        <div className="container p-3">
            <h1 className='text-center pt-5'>View our Gallery:</h1>
            <div className='card_wrap--outer'>
                <div className='card__wrap--inner'>
                    <div className="card-group">
                        <div className='row row-col-2 justify-content-center border-sm py-2 align-items-center'>

               {products.map(product => (
                   <div className="card col-3 m-3" key={product._id}>
                   <img src={`/images/${product.image}`} className="card-img-top" alt="Artwork"/>
                   <div className="card-body card text-center">
                       <h5 className="card-title">{product.title}</h5>
                       <p className="flexible" className="card-text">{product.description} </p>
                       <p className="card-text"> {product.startBid}</p>
                       <a href="gallery" className="btn btn-outline-dark m-2 buttonStyle" target='_blank' rel="noreferrer">View Product</a>
                       <a href="watchlist" className="btn btn-outline-dark m-2 buttonStyle" target='_blank' rel="noreferrer">Add to Watchlist</a>
                   </div>
               </div>
               ) )}
               </div>
                </div>
             </div>   
           </div>
         </div>
    );
}

export default ProductList;