import React from "react";
import { Link } from "react-router-dom";
import { brandwalkDark, brandwalkLight } from "../assets";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";

const Navbar = () => {
  return (
    <nav className="bg-somePink flex items-center justify-between p-5">
      <div className="w-[200px] ">
        <ul className="flex items-center space-x-4 justify-center">
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
      <div className="">
        <Link to="/">
          <img src={brandwalkDark} alt="" className="w-[200px] object-cover" />
        </Link>
      </div>
      <div className="w-[200px] flex items-center space-x-4 justify-center">
        <Link to="/register" className="flex items-center space-x-1">
          <AccountCircleTwoToneIcon />
          <span>Login</span>
        </Link>
        <Link>
          <ShoppingCartTwoToneIcon />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
