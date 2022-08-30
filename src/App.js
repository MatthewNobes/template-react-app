import "./style/App.css";
import React from "react";
import Header from "./Components/Header";
import Navigation from "./Components/Navigation";
import { RoutesBlock } from "./features/RoutingBlock";

const App = () => (
  <div className="App">
    <Header headerText={"Insert Header Here"} />
    <Navigation />
    <RoutesBlock />
  </div>
);

export default App;
