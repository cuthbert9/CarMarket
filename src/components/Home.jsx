import React from "react";


import Hero from "./Hero";
import Search from "./Search";
import Caterories from "./Caterories";
import MostSearched from "./MostSearched";
import Info from "./Info";
import Footer from "./Footer";
function Home() {
  return (
    <>
      <Hero />
      <Caterories />
      <MostSearched />
      <Info />
      <Footer />
    </>
  );
}

export default Home;
