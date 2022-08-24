import React from "react";
import './index.css';
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Product from "./pages/Product"
import About from "./pages/About";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";



function App() {
  return (

    <div>
      <header className="App-header">
        <NavBar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignUp />} >
            </Route>
            <Route path="/Home" element={<Home />} />
            <Route path="/Product" element={<Product />} />
            <Route path="/About" element={<About />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/SignUp" element={<SignUp />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </header>
    </div>

  );

}


export default App;
