import React, { useState } from "react";
import "./App.css";
import { Router } from "@reach/router";
import NavBar from "./NavBar";
import Details from "./Details";
import SearchParams from "./SearchParams";
import ThemeContext from "./ThemeContext";

const App = () => {
  const themeHook = useState("darkblue");
  // const themeHook = useState({
  //   buttonColor: "darkblue",
  //   modalColor: "pink",
  // });

  return (
    <ThemeContext.Provider value={themeHook}>
      <div>
        <NavBar />
        <Router>
          <SearchParams path="/" />
          <Details path="/details/:id" />
        </Router>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
