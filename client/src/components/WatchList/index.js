import React from 'react';
// import '../App.css';
import Azaman1 from '../../testImage/Azaman1.jpg';
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../../utils/queries';



export const WatchList = () => {
    const {loading, data, error} = useQuery(QUERY_USER);
    console.log("--data",data)
    console.log(JSON.stringify(error,null,2))
    const products = data?.user.watchlist || []; 
    console.log("---",products);
    return (
      
        <div className="container p-5">
            <h1 className='text-center pt-5'>Watchlist:</h1>

           <div className="card-group">

               {products.map(product => (
                   <div className="card col-3" key={product._id}>
                   <img src={`/images/${product.image}`} className="card-img-top" alt="Artwork"/>
                   <div className="card-body card text-center">
                       <h5 className="card-title">{product.title}</h5>
                       <p className="card-text">{product.description} </p>
                       <p className="card-text"> {product.startBid}</p>
                       <a href="gallery" className="btn btn-outline-dark m-2 buttonStyle" target='_blank' rel="noreferrer">View Product</a>
                       <a href="watchlist" className="btn btn-outline-dark m-2 buttonStyle" target='_blank' rel="noreferrer">Add to Watchlist</a>
                   </div>
               </div>
               ) )}

                
           </div>
         </div>
    );
}

export default WatchList;