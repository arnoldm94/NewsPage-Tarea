import { useState } from "react";
import "./assets/sass/app.styles.scss";
import "../node_modules/bootstrap/scss/bootstrap.scss";
import "bootstrap/dist/js/bootstrap.esm.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header.jsx";
import Home from "./components/views/Home.jsx";
import Form_News from "./components/views/Form_News.jsx";
import List from "./components/views/List.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form_News />} />
          <Route path="/list" element={<List />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
