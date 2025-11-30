import React from "react";
import Navbar from "./components/nav/Navbar.jsx";
import Work from "./components/hero/Work.jsx";
import Stripes from "./components/stripess/Stripes.jsx";
import Products from "./components/products/Products.jsx";
import Marquess from "./components/marque/Marquess.jsx";
import Cards from "./components/cards/Cards.jsx";
import Footer from "./components/footer/Footer.jsx";
import FooterLinks from "./components/footerLinks/FooterLinks.jsx";
import LocomotiveScroll from 'locomotive-scroll';


const App = () => {
const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="w-full select-none  bg-zinc-900 text-white">
      <Navbar />
      <Work />
      <Stripes />
      <Products />
      <Marquess />
      <Cards />
      <Footer />
      <FooterLinks />
    </div>
  );
};

export default App;
