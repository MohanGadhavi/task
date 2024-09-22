import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 p-4 flex justify-between">
        <h1 className="text-white text-4xl font-black md:ml-5">SEVA</h1>
        <div className="navigation flex md:gap-5 mt-2">
          <Link to="/" className="text-white md:text-xl mr-4 ">
            Login
          </Link>
          <Link to="/registration" className="text-white md:text-xl mr-4">
            Sign-Up
          </Link>
          <Link to="/admin" className="text-white md:text-xl mr-4">
            Admin
          </Link>
      </div>
    </nav>
  );
}
