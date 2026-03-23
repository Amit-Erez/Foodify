import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import MealInfo from "./pages/MealInfo";
import Footer from "./components/Footer";
import { Favorites } from "./pages/Favorites";

function App() {
  const [results, setResults] = useState([])
  const [faves, setFaves] = useState([])

  function addToFaves(id) {
    if(faves.includes(id)) {
      setFaves(faves.filter(elem => elem !== id))
    } else {
      setFaves((prev) => [...prev, id])
    }
  }

  useEffect(() => {
    console.log(faves)
  },[faves])

  async function fetchData(query) {
    if(!query) return
    const {data} = await axios.get(`/api/search.php?s=${query}`)
    setResults(data.meals)
  }

  return (
    <> <Navbar fetchData={fetchData} />
        <Routes>
          <Route path="/" element={<Home results={results} addToFaves={addToFaves} />} />
          <Route path="/details/:id" element={<MealInfo />} />
          <Route path="/favorites" element={<Favorites faves={faves} />}/>
        </Routes>
        <Footer />
    </>
  );
}

export default App;
