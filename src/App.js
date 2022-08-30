import "./style/App.css";
import React from "react";
import Header from "./Components/Header";
import Navigation from "./Components/Navigation";
import { RoutesBlock } from "./features/RoutingBlock";

const App = () => (
  <div className="App">
    <header>
      <Header headerText={"Insert Header Here"} />
    </header>
    <Navigation />
    <RoutesBlock />
  </div>
);

export default App;
