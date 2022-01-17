import React from 'react'
// import '../App.css';

import Azaman1 from '../../testImage/Azaman1.jpg';



export default Product;


export const ProductList = () => {
    return (
        <>
            <div className="media">
                <img src={Azaman1} className="card-img-top media-left" alt="Azaman"/>
                <div className="media-body">
                    <h3 className="media-heading">Experience</h3>
                    ...
                </div>
            </div>
        </>
    );
}

export default ProductList;