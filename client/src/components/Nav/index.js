import React from 'react';

const Navbar = () => {
    return (
        <div>
             <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
                <div className="navbar-brand mx-5" id="artWatchStyle" href="#about">art<a>Watch</a></div>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    
                    <ul className="navbar-nav ms-auto mx-5">

                        <li className="nav-item active">
                            <a className="nav-link" href="#login">Login <span className="sr-only"></span></a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#signup">Register</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#watchlist">Watchlist</a>
                        </li>
                    </ul>

                </div>
            </nav>
        </div>
    )
}
export default Navbar;