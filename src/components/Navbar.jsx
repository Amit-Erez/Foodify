import React from "react";
import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";

const Navbar = ({fetchData}) => {
  return (
    <nav className="flex items-center justify-between bg-blue-100 shadow-lg h-20 p-4 border-b-2 border-yellow-50">
    <figure>
        <img src="/src/assets/foodifyLogo.png" alt="logo" className="w-40" />
    </figure>
    <div className="flex items-center">
      <ul className="flex justify-center gap-4 mr-3">
        <li className="text-grey hover:text-emerald-900 transition cursor-pointer">
          <Link to="/" />
          Home
        </li>
        <li className="text-grey hover:text-emerald-900 transition cursor-pointer">
          <Link to="/meals" />
          Favorites
        </li>
      </ul>
      <Searchbar fetchData={fetchData} />
    </div>
    </nav>
  );
};

export default Navbar;
