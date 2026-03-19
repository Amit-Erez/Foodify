import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { useState } from "react";
import axios from "axios";
import MealInfo from "./pages/MealInfo";
import Footer from "./components/Footer";

function App() {
  const [results, setResults] = useState([])

  async function fetchData(query) {
    if(!query) return
    const {data} = await axios.get(`/api/search.php?s=${query}`)
    setResults(data.meals)
  }

  return (
    <> <Navbar fetchData={fetchData} />
        <Routes>
          <Route path="/" element={<Home results={results} />} />
          <Route path="/details/:id" element={<MealInfo />} />
        </Routes>
        <Footer />
    </>
  );
}

export default App;
