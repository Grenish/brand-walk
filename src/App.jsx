import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar, Footer, Mens, Womens, Main, Kids, Reg } from "./components";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} exact />
        <Route path="/mens" element={<Mens />} />
        <Route path="/womens" element={<Womens />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/register" element={<Reg />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
