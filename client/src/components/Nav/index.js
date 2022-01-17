import React from 'react';
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

const Navbar = () => {
    function showNavigation() {
        if (Auth.loggedIn()) {
          return (
            <div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mx-5">
                    <li className="nav-item active">
                        <Link to="/Watchlist" className="nav-link sr-only">
                        Watchlist
                        </Link>
                    </li>
                    <li className="nav-item active">
                        {/* this is not using the Link component to logout or user and then refresh the application to the start */}
                        <a href="/" className="nav-link sr-only" onClick={() => Auth.logout()}>
                        Logout
                        </a>
                    </li>
                    </ul>
                </div>
            </div>
            
          );
        } else {
          return (
            <div>
                 <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mx-5">
                            <li className="nav-item active">
                                <Link to="/Signup" className="nav-link sr-only">
                                Signup
                                </Link>
                            </li>
                            <li className="nav-item active">
                                <Link to="/Login" className="nav-link sr-only">
                                Login
                                </Link>
                            </li>
                        </ul>
                </div>
            </div>
            
          );
        }
      }

      return (
          <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
            <Link to="/" className="navbar-brand mx-5" id="artWatchStyle">art<a>Watch</a></Link>
            {showNavigation()}
          </nav>
        
      );


}
export default Navbar;