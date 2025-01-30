import React from "react";
import "./index.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AddListing from "./components/AddListing";
import { Route, Routes } from "react-router-dom";
import Search from "./components/Search";
import Caterories from "./components/Caterories";
import MostSearched from "./components/MostSearched";
import Info from "./components/Info";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import Home from "./components/Home";
import CarDetails from "./Details/CarDetails";
import CategorySearch from "./Details/CategorySearch";
import InputSearch from "./Details/InputSearch";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/AddListing" element={<AddListing />} />
        <Route path="/CarDetails" element={<CarDetails/>} />
        <Route path="/CategorySearch/:category" element={<CategorySearch/>} />
        <Route path="/InputSearch" element={<InputSearch/>} />
      </Routes>
    </>
  );
}

export default App;
