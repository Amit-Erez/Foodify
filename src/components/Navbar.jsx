import React from "react";
import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";

const Navbar = ({ fetchData, setSearched }) => {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-1000 flex items-center justify-between bg-blue-100 shadow-none md:shadow-lg h-20 p-4">
        <figure>
          <img src="/src/assets/foodifyLogo.png" alt="logo" className="w-40" />
        </figure>
        <div className="flex items-center">
          <ul className="flex justify-center gap-4 mr-3">
            <li className="text-grey hover:text-emerald-900 transition cursor-pointer">
              <Link to="/" onClick={() => setSearched(false)}>Home</Link>
            </li>
            <li className="text-grey hover:text-emerald-900 transition cursor-pointer">
              <Link to="/favorites">Favorites</Link>
            </li>
          </ul>
          <span className="hidden sm:block">
            <Searchbar fetchData={fetchData} setSearched={setSearched} />
          </span>
        </div>
      </nav>
      <div className="fixed top-20 left-0 right-0 z-50 flex items-center justify-center bg-blue-100 shadow-lg h-20 p-4 sm:hidden">
        <Searchbar fetchData={fetchData} setSearched={setSearched} />
      </div>
    </>
  );
};

export default Navbar;
