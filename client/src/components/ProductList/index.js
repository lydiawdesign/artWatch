import React from 'react'
// import '../App.css';
import Azaman1 from '../../testImage/Azaman1.jpg';



export const ProductList = () => {
    return (
        <div className="container p-5">
            <h1 className='text-center pt-5'>View our Gallery:</h1>

           <div className="card-group">

                <div className="card g-3 p-2">
                    <img src={Azaman1} className="card-img-top" alt="Azaman"/>
                    <div className="card-body card text-center">
                        <h5 className="card-title">Azaman 1</h5>
                        <p className="card-text">this is a short description for the art. </p>
                        <p className="card-text"> start bid is $300</p>
                        <a href="gallery" className="btn btn-outline-dark m-2 buttonStyle" target='_blank' rel="noreferrer">Go Back to Gallery</a>
                        <a href="watchlist" className="btn btn-outline-dark m-2 buttonStyle" target='_blank' rel="noreferrer">Add to Watchlist</a>
                    </div>
                </div>

                <div className="card g-3 p-2">
                    <img src={Azaman1} className="card-img-top" alt="Azaman"/>
                    <div className="card-body card text-center">
                        <h5 className="card-title">Azaman 1</h5>
                        <p className="card-text">this is a short description for the art. </p>
                        <p className="card-text"> start bid is $300</p>
                        <a href="gallery" className="btn btn-outline-dark m-2 buttonStyle" target='_blank' rel="noreferrer">Go Back to Gallery</a>
                        <a href="watchlist" className="btn btn-outline-dark m-2 buttonStyle" target='_blank' rel="noreferrer">Add to Watchlist</a>
                    </div>
                </div>

                <div className="card g-3 p-2">
                    <img src={Azaman1} className="card-img-top" alt="Azaman"/>
                        <div className="card-body card text-center">
                        <h5 className="card-title">Azaman 1</h5>
                        <p className="card-text"> this is also a description.</p>
                        <p className="card-text"> start bid is $300</p>
                        <a href="gallery" className="btn btn-outline-dark m-2 buttonStyle" target='_blank' rel="noreferrer">Go Back to Gallery</a>
                        <a href="watchlist" className="btn btn-outline-dark m-2 buttonStyle" target='_blank' rel="noreferrer">Add to Watchlist</a>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default ProductList;