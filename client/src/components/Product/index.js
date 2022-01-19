import React from 'react'
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_PRODUCT} from '../../utils/queries';
import { useParams } from 'react-router-dom';


export const Product = () => {

    const {_id} = useParams();
    console.log(_id)
    const {loading, data } = useQuery(QUERY_SINGLE_PRODUCT, {
        variables: {_id}
    });
    console.log(data)
    const product = data?.getProduct || {}; 
    
    return (
        <>
            <div className="media">
                <div className="card" key={product._id}>
                    <img src={`/images/${product.image}`} className="card-img-top" alt="Artwork"/>
                    <div className="card-body card text-center">
                        <h5 className="card-title">{product.title}</h5>
                        <p className="card-text">{product.description} </p>
                        <p className="card-text"> Starting Bid:${product.startBid}</p>
                        <a href="/" className="btn btn-outline-dark m-2 buttonStyle">Back to Gallery</a>
                        <a href="bid" className="btn btn-outline-dark m-2 buttonStyle">Make a Bid</a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Product;