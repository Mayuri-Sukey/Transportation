import React, { useState , useEffect} from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";

const StickyStyle = {position: "absolute",
width: "100%",
zIndex: 1000}


const Header4 = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [navSticky, setNavSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollValue = window.scrollY;
      scrollValue > 100 ? setNavSticky(true) : setNavSticky(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function toggleMenu() {
  
    setMenuOpen(!isMenuOpen);
  }

  return (
<header className={`border-b bg-[#232f3e] font-sans min-h-[60px] ${navSticky ? "sticky" : ""}`} >
      <div className="flex flex-wrap items-center justify-between xl:px-10 px-6 py-1 relative lg:gap-y-2 gap-y-4 gap-x-4">
        <a href="javascript:void(0)">
          <img src={Logo} alt="logo" className="w-36" />
        </a>{" "}
        <div className="flex items-center max-lg:ml-auto lg:order-1">
          <span className="relative">
          <i class="fa-brands fa-facebook"></i>
          <span class="absolute left-auto -ml-1 top-0 rounded-full bg-red-500 px-1 py-0 text-xs text-white">0</span>
        </span> 

          <span className="relative ml-8">
                         {/* Icon elements */}
        </span> 
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="20px" className="cursor-pointer fill-[#fff] hover:fill-yellow-300 inline ml-7">
                        {/* Path elements for SVG icon */}
          </svg>
          <button id="toggle" className="lg:hidden ml-7" onClick={toggleMenu}>
           {/* Icon for the toggle button  */}
            <svg
              className="w-7 h-7"
              fill="#fff"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <ul
          id="collapseMenu"
          style={{ display: isMenuOpen ? "block" : "none" }}
          className="lg:!flex max-lg:hidden max-lg:w-full lg:space-x-10 max-lg:space-y-3 max-lg:my-4"
        >
          <li className="max-lg:border-b max-lg:py-2">
            <a
              href="javascript:void(0)"
              className="hover:text-yellow-300 font-bold text-[15px] text-yellow-300 block"
            >
              Home
            </a>
          </li>
          <li class='group max-lg:border-b max-lg:py-2 relative'>
          <a
              href="javascript:void(0)"
            class='hover:text-yellow-300 font-bold text-white text-[15px] lg:hover:fill-yellow-300 block'>Pages<svg
              xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill='currentColor' class="ml-1 inline-block"
              viewBox="0 0 24 24">
              <path
                d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                data-name="16" data-original="#000000" />
            </svg>
          </a>
          <ul
            class='absolute hidden group-hover:block shadow-lg max-lg:border max-lg:border-gray-500 bg-[#232f3e] px-6 pb-4 pt-6 space-y-3 lg:top-5 max-lg:top-8 lg:-left-6 min-w-[250px] z-50'>
            <li class='border-b py-2'><Link to='/about'
                class='hover:text-yellow-300 font-bold text-white text-[15px] block'>About Us</Link></li>
            <li class='border-b py-2'><a href='javascript:void(0)'
                class='hover:text-yellow-300 font-bold text-white text-[15px] block'>Vision & Mission</a></li>
            <li class='border-b py-2'><a href='javascript:void(0)'
                class='hover:text-yellow-300 font-bold text-white text-[15px] block'>Management Team</a></li>
            <li class='border-b py-2'><a href='javascript:void(0)'
                class='hover:text-yellow-300 font-bold text-white text-[15px] block'>Infrastructure</a></li>
            <li class='border-b py-2'><a href='javascript:void(0)'
                class='hover:text-yellow-300 font-bold text-white text-[15px] block'>Quality Assurance</a></li>
                <li class='border-b py-2'><a href='javascript:void(0)'
                class='hover:text-yellow-300 font-bold text-white text-[15px] block'>Why Us</a></li>
          </ul>
        </li>

        <li class='group max-lg:border-b max-lg:py-2 relative'>
          <a href='javascript:void(0)'
            class='hover:text-yellow-300 font-bold text-white text-[15px] lg:hover:fill-yellow-300 block'>Products<svg
              xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill='currentColor' class="ml-1 inline-block"
              viewBox="0 0 24 24">
              <path
                d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                data-name="16" data-original="#000000" />
            </svg>
          </a>
          <ul
            class='absolute hidden group-hover:block shadow-lg max-lg:border max-lg:border-gray-500 bg-[#232f3e] px-6 pb-4 pt-6 space-y-3 lg:top-5 max-lg:top-8 lg:-left-6 min-w-[250px] z-50'>
            <li class='border-b py-2'><a href='javascript:void(0)'
                class='hover:text-yellow-300 font-bold text-white text-[15px] block'>Engineering Goods</a></li>
            <li class='border-b py-2'><a href='javascript:void(0)'
                class='hover:text-yellow-300 font-bold text-white text-[15px] block'>Pharmaceutical & Healthcare</a></li>
            <li class='border-b py-2'><a href='javascript:void(0)'
                class='hover:text-yellow-300 font-bold text-white text-[15px] block'>Indian Handicrafts</a></li>
            <li class='border-b py-2'><a href='javascript:void(0)'
                class='hover:text-yellow-300 font-bold text-white text-[15px] block'>Home Decor & Kitchen Essentials</a></li>
            <li class='border-b py-2'><a href='javascript:void(0)'
                class='hover:text-yellow-300 font-bold text-white text-[15px] block'>Agriculture & Processed Food</a></li>
                <li class='border-b py-2'><a href='javascript:void(0)'
                class='hover:text-yellow-300 font-bold text-white text-[15px] block'>Printing and packaging solutions</a></li>
                <li class='border-b py-2'><a href='javascript:void(0)'
                class='hover:text-yellow-300 font-bold text-white text-[15px] block'>Textile & Garments</a></li>
                <li class='border-b py-2'><a href='javascript:void(0)'
                class='hover:text-yellow-300 font-bold text-white text-[15px] block'>Jwellary & Games</a></li>
          </ul>
        </li>

          <li class="max-lg:border-b max-lg:py-2">
            <a
              href="javascript:void(0)"
              class="hover:text-yellow-300 font-bold text-white text-[15px] block"
            >
             Accreditation
            </a>
          </li>
          <li class="max-lg:border-b max-lg:py-2">
            <a
              href="javascript:void(0)"
              class="hover:text-yellow-300 font-bold text-white text-[15px] block"
            >
              Contact Us
            </a>
          </li>

          {/* More list items */}
        </ul>
      </div>
    </header>
  );
};

export default Header4;
