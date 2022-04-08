import "./style/App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import NavList from "./Components/NavList";

import FeatureOne from "./features/FeatureOne";
import FeatureTwo from "./features/FeatureTwo";

const App = () => (
  <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <NavList />
      <Routes>
        <Route path="/FeatureTwo" element={<FeatureTwo />} />
        <Route path="/" element={<FeatureOne />} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;
