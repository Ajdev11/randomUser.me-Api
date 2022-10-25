import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./NestedRoutes/Home";
import About from "./NestedRoutes/About";
import "./NestedRoutes/Nested.css";
import Page from "./Pagination/Page";
import "./Pagination/pagination.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/About" element={<About />} />
      </Routes>
      <Page />
    </div>
  );
}

export default App;
