import React, { useEffect, useState } from "react";
import axios from "axios";
import { Route, Switch } from "react-router-dom";
import { baseURL } from "./constants";
import Plants from "./components/Plants";
import "./App.css";
import NavBar from "./components/NavBar";
import ShowPage from "./components/ShowPage";
import DisplayBanner from "./components/DisplayBanner";
import Request from "./components/Requests";
import About from "./components/About";
import Footer from "./components/Footer";
import Cart from "./components/Cart"

function App() {
  const [plantData, setPlantData] = useState([]);
  const [cart, setCart] = useState([]);
  const [fetchPlants, setFetchPlants] = useState(false);

  useEffect(() => {
    try {
      const getPlants = async () => {
        const response = await axios.get(`${baseURL}/plants`, {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
          },
        });
        setPlantData(response.data.records);
      };
      getPlants();
    } catch (error) {
      console.log(error);
    }
  }, [fetchPlants]);

  return (
    <div className="App">
      <NavBar />
      <DisplayBanner />
      <Switch>
        <Route exact path="/">
          <Plants plantData={plantData} />
        </Route>
        <Route path="/plant/new">
          <Request fetchPlants={fetchPlants} setFetchPlants={setFetchPlants} />
        </Route>
        <Route path="/plant/:id">
          <ShowPage plantData={plantData} cart={cart} setCart={setCart}/>
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/cart">
          <Cart cart={cart} setCart={setCart} />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
