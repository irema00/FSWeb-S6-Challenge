import React, { useState, useEffect } from "react";
import axios from "axios";
import Karakterler from "./components/Karakterler";
import Karakter from "./components/Karakter";

const App = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people/")
      .then((response) => {
        const charactersData = response.data;
        setCharacters(charactersData);
      })
      .catch((error) => {
        console.error("API request for characters failed: ", error);
      });
  }, []);
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Karakterler</h1>
      <Karakterler data={characters} />
    </div>
  );
};

export default App;
