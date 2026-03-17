import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { useState } from "react";
import axios from "axios";

function App() {
  const [results, setResults] = useState([])

  async function fetchData(query) {
    if(!query) return
    const {data} = await axios.get(`http://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
    setResults(data)
  }

  return (
    <> <Navbar fetchData={fetchData} />
        <Routes>
          <Route path="/" element={<Home results={results} />} />
        </Routes>
    </>
  );
}

export default App;
