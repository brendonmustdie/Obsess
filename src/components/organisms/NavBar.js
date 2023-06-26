import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Toggle from "../atoms/Toggle";
import MessageSpawner from "./MessageSpawner";

const Navbar = ({ fontColor }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="flex justify-center pt-6">
        {/* Burger menu toggle */}
        <button
          className="md:hidden absolute top-6 right-6 z-50"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke={isOpen ? "#A46A7E" : "#FFFFFF"}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Navigation menu */}
        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } md:block md:flex md:items-center md:space-x-4`}
        >
          <Link
            to="/"
            className="ml-[15px] text-[#A46A7E] font-merriweather text-[20px]"
          >
            Home
          </Link>
          <Link
            to="/design"
            className="ml-[15px] text-[#A46A7E] font-merriweather text-[20px]"
          >
            Design
          </Link>
          <Link
            to="/blogs"
            className="ml-[15px] text-[#A46A7E] font-merriweather text-[20px]"
          >
            Blog
          </Link>
          <Link
            to="/obsess-artwork"
            className="ml-[15px] text-[#A46A7E] font-merriweather text-[20px]"
          >
            Obsess
          </Link>

          {/* Optional toggle component */}
          <Toggle>
            <MessageSpawner />
          </Toggle>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
