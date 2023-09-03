import React from 'react';
import { Link } from 'react-router-dom';
import './MobileNavbar.scss';


export const  MobileNavbar = ()=> {
  // let user = localStorage.getItem('user');
  // const navigate = useNavigate();

  return (
    <nav className="MobileNavbar">
      <Link to="/">
        {/* <img src={logo} alt="logo" className="Navbar__logo" /> */}
        <span>Home</span>
      </Link>
      <Link to="/users">
        {/* <img src={logo} alt="logo" className="Navbar__logo" /> */}
        <span>Ma journée</span>
      </Link>
      <Link to="/users">
        {/* <img src={logo} alt="logo" className="Navbar__logo" /> */}
        <span>Mon compte</span>
      </Link>
      
    </nav>
  );
}
