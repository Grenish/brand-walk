import React, { useState } from "react";
import { Logo } from "../assets";
import { UilUser, UilShoppingCartAlt  } from '@iconscout/react-unicons'

const Navbar = () => {
  const [isOpen, setisOpen] = useState(false);
  return (
    <nav className="bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img src={Logo} alt="" className="w-36" />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4 font-pop">
                <a
                  href="#"
                  className="text-gray-800 hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
                  aria-label="New Collection"
                >
                  New
                </a>
                <a
                  href="#"
                  className="text-gray-800 hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
                  aria-label="Top Sellers"
                >
                  Top Seller
                </a>
                <a
                  href="#"
                  className="text-gray-800 hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
                  aria-label="Men's Collection"
                >
                  Men
                </a>
                <a
                  href="#"
                  className="text-gray-800 hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
                  aria-label="Women's Collection"
                >
                  Women
                </a>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <button>
                <UilShoppingCartAlt />
              </button>
              <button className="ml-3">
                <UilUser />
              </button>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setisOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-label="Menu"
            >
              <svg
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class={isOpen ? "hidden h-6 w-6" : "block h-6 w-6"}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={isOpen ? "block" : "hidden"}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a
            href="#"
            className="text-gray-800 hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
            aria-label="New Collection"
          >
            New
          </a>
          <a
            href="#"
            className="text-gray-800 hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
            aria-label="Top Sellers"
          >
            Top Seller
          </a>
          <a
            href="#"
            className="text-gray-800 hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
            aria-label="Men's Collection"
          >
            Men
          </a>
          <a
            href="#"
            className="text-gray-800 hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
            aria-label="Women's Collection"
          >
            Women
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
