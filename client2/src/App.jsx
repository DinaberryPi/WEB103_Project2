import React, { useEffect, useState } from "react";
import { Link, useRoutes } from "react-router-dom";
import "./App.css";
import FruitDetails from "./pages/FruitDetails";
import Fruits from "./pages/Fruits";
import PageNotFound from "./pages/PageNotFound";

const App = () => {
  const [fruits, setFruits] = useState([]);

  useEffect(() => {
    const fetchFruits = async () => {
      const response = await fetch("http://localhost:3001/fruits");
      const data = await response.json();
      setFruits(data);
    };
    fetchFruits();
  }, []);
  console.log(fruits);
  // Sets up routes
  let element = useRoutes([
    {
      path: "/",
      element: <Fruits data={fruits} />,
    },
    {
      path: "/fruit/:id",
      element: <FruitDetails data={fruits} />,
    },
    {
      path: "/*",
      element: <PageNotFound />,
    },
  ]);

  return (
    <div className="App">
      <header>
        <div className="header-container">
          <div className="header-left">
            <img src="/logo.png" />
            <h1>UnEarthed</h1>
          </div>
          <div className="header-right">
            <Link to="/">
              <button className="homeBtn">Home</button>
            </Link>
          </div>
        </div>
      </header>

      {element}
    </div>
  );
};

export default App;
