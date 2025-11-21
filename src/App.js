import React from "react";

import "./App.css";
import Header from "./component/Header";
import Products from "./component/Products";
import Offers from "./component/Offers";
import Categories from "./component/Categories";
import Slider from "./component/Slider";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="app-root">
      <Header />
      <main>
        <Slider />
        <Categories/>
        <Offers/>
        <Products/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
