import React, {useState} from 'react'
import {Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../../Styles/HeaderStyle.css";
import Logo from "../../assets/logo.png"

import * as Icons from "react-icons/fa";
import '../../Styles/HederStyle1.css';
import { navItems } from "../Layouts/NavItems";
import  Dropdown  from "../Layouts/Dropdown";
//import Logo from "../../assets/logo/logo.png";
const Header = () => {
  const [navSticky, setNavSticky] = useState(false);
  const [dropdown, setDropdown] = useState(false);


  const changeValueOnScroll = () => {
    const scrollValue = window.scrollY;
    scrollValue > 100 ? setNavSticky(true) : setNavSticky(false);

 }
 window.addEventListener("scroll", changeValueOnScroll);
  return (
    <header >

<Navbar collapseOnSelect expand="lg" className={navSticky ? "sticky" : ""} >
      <>
        {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
        <nav className="navbar">
        <Link to="/" className='logo'>
        <img src={Logo} alt="logo" className="img-fluid" />        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
          <ul className="nav-items">
          {navItems.map((item) => {
            if (item.title === "Services") {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                >
                  <Link to={item.path}>{item.title}</Link>
                  {dropdown && <Dropdown/>}
                </li>
              );
            }
            return (
              <li key={item.id} className={item.cName}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
      
            
          </Nav>
          
        </Navbar.Collapse>
        
      </nav>
      </>
    </Navbar>
    </header>
  )
}

export default Header
