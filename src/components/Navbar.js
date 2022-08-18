import React from 'react';
import { Link } from 'react-router-dom'
 const Navbar = ()=>{
    return(
            <nav className="nav-wrapper">
                <div className="container">
                    <Link to="/" className="brand-logo">Alışveriş</Link>
                    
                    <ul className="right">
                        <li><Link to="/">Anasayfa</Link></li>
                        <li><Link to="/cart">Sepetim</Link></li>
                        <li><Link to="/cart"><i className="material-icons"> </i></Link></li>
                    </ul>
                </div>
            </nav>
   
        
    )
}

export default Navbar;