import React, { useState } from "react";
import { Link } from "react-router-dom";
import { brandwalkDark, brandwalkLight } from "../assets";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import "./css/navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [toggle, setToggle] = useState(false);

  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-somePink flex items-center justify-between p-5">
      <div className="w-[200px] hidden md:block">
        <ul className="hidden sm:flex items-center space-x-4 justify-center">
          <li>
            <Link to="/kids" className="hover:text-somethingGreen">
              Kids
            </Link>
          </li>
          <li>
            <Link to="/mens" className="hover:text-somethingGreen">
              Mens
            </Link>
          </li>
          <li>
            <Link to="/womens" className="hover:text-somethingGreen">
              Womens
            </Link>
          </li>
        </ul>
      </div>
      <div className="">
        <Link to="/">
          <img src={brandwalkDark} alt="" className="w-[200px] object-cover" />
        </Link>
      </div>
      <div className="w-[200px] hidden md:flex items-center space-x-4 justify-center">
        <Link to="/register" className="flex items-center space-x-1">
          <AccountCircleTwoToneIcon />
          <span>Login</span>
        </Link>
        <Link>
          <ShoppingCartTwoToneIcon />
        </Link>
      </div>

      {/* humburger menu */}
      <div className="block md:hidden">
        <button
          onClick={handleMenuOpen}
          className="flex items-center space-x-1"
        >
          {isMenuOpen ? "" : <MenuIcon />}
        </button>
        <div
          className={`  ${
            isMenuOpen ? "block" : "hidden"
          } fixed top-0 right-0 bg-[#f8f1ff7a] w-80 h-full z-10 shadow-2xl backdrop-filter backdrop-blur-sm`}
        >
          <span className="flex justify-end p-3 mt-1 mr-1">
            {isMenuOpen ? (
              <button
                className="w-10 h-10 rounded-full bg-somethingPink flex items-center justify-center"
                onClick={handleMenuOpen}
              >
                <CloseIcon />
              </button>
            ) : (
              ""
            )}
          </span>
          <ul className="flex flex-col items-center space-y-4 justify-center">
            <li>
              <Link to="/kids">Kids</Link>
            </li>
            <li>
              <Link to="/mens">Mens</Link>
            </li>
            <li>
              <Link to="/womens">Womens</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
