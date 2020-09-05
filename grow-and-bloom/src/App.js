import React, { useEffect, useState } from "react";
import axios from "axios";
import { Route, Switch } from "react-router-dom";
import { baseURL } from "./constants";
import Plants from "./components/Plants";
import "./App.css";
import NavBar from "./components/NavBar";
import ShowPage from "./components/ShowPage";
import DisplayBanner from "./components/DisplayBanner";

function App() {
  const [plantData, setPlantData] = useState([]);

  useEffect(() => {
    const getPlants = async () => {
      const response = await axios.get(`${baseURL}/plants`, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      });
      // console.log("plants", response.data.records);
      setPlantData(response.data.records);
    };
    getPlants();
  }, []);

  return (
    <div className="App">
      <NavBar />
      <DisplayBanner />
      <Switch>
        <Route exact path="/">
          <Plants plantData={plantData} />
        </Route>
        <Route path="/plant/:id">
          <ShowPage plantData={plantData} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
