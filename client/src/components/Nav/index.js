import React from 'react'

const Navbar = () => {
    return (
        <div>
                <nav className="nav navbar navbar-expand-sm navbar-color">
                    <h1 className="text-light">artWatch</h1>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a href="/" className="nav-link text-light">Login/Signup</a>
                            </li>
                            <li className="nav-item">
                                <a href="/" className="nav-link text-light">WatchList</a>
                            </li>
                        </ul>
                </nav>
        </div>
    )
}
export default Navbar;