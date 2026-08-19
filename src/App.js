import "./App.css";

import { Routes, Route } from "react-router-dom";

import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

import HomePage from "./pages/HomePage";
import AboutMe from "./pages/AboutPage";
import ContactMe from "./pages/ContactPage";
import PortfolioPage from "./pages/PortfolioPage";

import WebDesign from "./pages/Services/WebDesign";
import SoftDev from "./pages/Services/SoftDev";

import ArtShop from "./pages/shop/ArtShopPage";
import CeramicShop from "./pages/shop/CeramicShopPage";
import PlantShop from "./pages/shop/PlantShopPage";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/about" element={<AboutMe />} />
        <Route path="/contact" element={<ContactMe />} />
        <Route path="/portfolio" element={<PortfolioPage />} />

        <Route path="/services/WebDesign" element={<WebDesign />} />
        <Route path="/services/SoftDev" element={<SoftDev />} />

        <Route path="/shop/art" element={<ArtShop />} />
        <Route path="/shop/ceramics" element={<CeramicShop />} />
        <Route path="/shop/plants" element={<PlantShop />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
