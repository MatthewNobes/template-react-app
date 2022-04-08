import "./css/App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import NavList from "./Components/NavList";

import { Home } from "./Components/main-pages/Home";
import { PageOne } from "./Components/main-pages/PageOne";

const App = () => (
  <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <NavList />
      <Routes>
        <Route path="/PageOne" element={<PageOne />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;
