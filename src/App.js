import "./css/App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./Components/Header/Header";

import Home from "./Components/main-pages/Home";
import PageOne from "./Components/main-pages/PageOne";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <nav>
        <Router className="React-Router">
          <div>
            <ul className="React-Router-Group">
              <li className="React-Router-Headlinks">
                <Link className="React-Router-Links" to="/">
                  Home
                </Link>
              </li>
              <li className="React-Router-Headlinks">
                <Link className="React-Router-Links" to="/PageOne">
                  Page 1
                </Link>
              </li>
            </ul>

            <Routes>
              <Route path="/PageOne" element={<PageOne />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </Router>
      </nav>
    </div>
  );
}

export default App;