import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Link from "./components/Link";
import Results from "./components/Results";
import Information from "./components/Information";
import Boost from "./components/Boost";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <Navbar />
      <div className="body-content">
        <Hero />
        <Link inputValue={inputValue} setInputValue={setInputValue} />
        <Results inputValue={inputValue} />
        <Information />
      </div>

      <Boost />
      <Footer />
    </div>
  );
};

export default App;
