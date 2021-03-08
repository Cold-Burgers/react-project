import React from 'react';
import {Link} from 'react-router-dom';
const Navigation = () => {
    return ( 
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <ul>
                <li>
                    <Link to="/" className="navbar-brand">Home</Link>
                    <Link to="/about" className="navbar-brand">About</Link>
                    <Link to="LocalNews" className="navbar-brand">News</Link>
                    <Link to="Sort" className="navbar-brand">Sort</Link>
                </li>
            </ul>
        </nav>
     );
}

export default Navigation;
 