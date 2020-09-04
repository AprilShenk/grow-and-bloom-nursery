import React, { useEffect, useState } from "react";
import axios from "axios";
import { baseURL } from './constants'
import Plants from './components/Plants'
import "./App.css";

function App() {
  const [plantData, setPlantData] = useState([]);

  useEffect(() => {
    const getPlants = async () => {
      const response = await axios.get(`${baseURL}/plants`, {

        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      });
      console.log('plants', response.data.records);
      setPlantData(response.data.records);
    };
    getPlants();
  }, []);

  return (
    <div className="App">
      <Plants plantData={plantData}/>
    </div>);
}

export default App;
