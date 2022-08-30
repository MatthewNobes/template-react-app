import "./style/App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Navigation from "./Components/Navigation";

import FeatureOne from "./features/FeatureOne";
import FeatureTwo from "./features/FeatureTwo";

const RoutesBlock = () => (
  <Routes>
    <Route path="/FeatureTwo" element={<FeatureTwo />} />
    <Route path="/" element={<FeatureOne />} />
  </Routes>
);

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
