import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as Icons from "react-icons/fa";
import '../../Styles/HederStyle1.css';
import { navItems } from "../Layouts/NavItems";
import  Dropdown  from "../Layouts/Dropdown";
import Logo  from "../../assets/logo.png"

// import Dropdown from "./Dropdown";
// import Dropdown from "../../Styles/Dropdown.css";



function HeaderStyle1() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
        <img src={Logo} alt="logo" className="img-fluid" /> 
          <Icons.FaTree />
        </Link>
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
      
      </nav>
    </>
  );
}

export default HeaderStyle1;