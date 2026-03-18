import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Searchbar = ({ fetchData }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate()

  function handleKey(e) {
    if(e.key !== "Enter") return
    fetchData(query)
    navigate("/")
  }

  return (
    <div className="relative">
      <input
        value={query}
        type="text"
        placeholder="Search the site..."
        className=" border border-gray-500 rounded pl-4 pt-2 pb-2 text-sm outline-0 w-70"
        onChange={(e) => setQuery(e.target.value)}
        onKeyUp={(e) => handleKey(e)}
      />
      <figure
        className="absolute top-2 right-2 text-gray-600 hover:scale-110 cursor-pointer"
        onClick={() => {
          fetchData(query);
          navigate("/");
        }}
      >
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </figure>
    </div>
  );
};

export default Searchbar;
