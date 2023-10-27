import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <h1>React Router Dom</h1>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </header>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
        </Routes>
        <footer>
          <p>&copy; Tim the Bin</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
