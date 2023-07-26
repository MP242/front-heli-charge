import React from 'react';
import { Link,useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';
// import hamburger from '../../assets/hamburger.svg';
import './Navbar.scss';
import HamburgerMenu from '../Hamburger/HamburgerMenu';

export const Navbar = ({isLoggedIn, setIsLoggedIn})=> {
  let user = localStorage.getItem('user');
  const navigate = useNavigate();
  const handleLogout = () => {
    user = localStorage.removeItem('user');
    // localStorage.removeItem('token');
    // localStorage.removeItem('userName');
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <nav className="Navbar">
      <Link to="/">
        <img src={logo} alt="logo" className="Navbar__logo" />
      </Link>
      {user && <HamburgerMenu handleLogout={handleLogout} />}
    </nav>
  );
};
