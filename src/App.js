import React from "react";
import Header from "./components/header/Header.component";
import Homepage from "./pages/homepage/Homepage.component";
import { Routes, Route } from "react-router-dom";
import GlobalSytles from "./Layouts/Global.styled";
import ShopPage from "./pages/shop/Shop.component";

function App() {
  return (
    <div>
      <GlobalSytles />
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
    </div>
  );
}

export default App;
