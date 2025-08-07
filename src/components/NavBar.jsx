import React, { useState } from "react";
import logo from "../assets/logo.png";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="relative z-50 bg-black text-white px-8 py-4 flex justify-between items-center">
      <img src={logo} alt="Logo" />
      <button
        className="md:hidden"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <svg className="w-6 h-6 stroke-white" fill="none" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>
      <ul className="hidden md:flex gap-16 items-center">
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Service</a>
        </li>
        <li>
          <a href="">Album</a>
        </li>
        <li>
          <a href="">Stories</a>
        </li>
        <li>
          <a href="">Blog</a>
        </li>
      </ul>

      <button className="hidden md:flex cursor-pointer bg-white text-orange-600 font-semibold rounded-4xl px-6 py-2">
        Contact Us
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-black flex flex-col items-start px-8 py-6 gap-4 md:hidden">
          <ul className="flex flex-col gap-4 w-full">
            <li>
              <a href="#" onClick={closeMenu}>
                About
              </a>
            </li>
            <li>
              <a href="#" onClick={closeMenu}>
                Service
              </a>
            </li>
            <li>
              <a href="#" onClick={closeMenu}>
                Album
              </a>
            </li>
            <li>
              <a href="#" onClick={closeMenu}>
                Stories
              </a>
            </li>
            <li>
              <a href="#" onClick={closeMenu}>
                Blog
              </a>
            </li>
          </ul>
          <button
            onClick={closeMenu}
            className="bg-white text-orange-600 font-semibold rounded-4xl w-full py-2"
          >
            Contact Us
          </button>
        </div>
      )}
    </div>
  );
}
