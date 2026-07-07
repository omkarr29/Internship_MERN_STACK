import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import TrendingRow from "./Components/TrendingRow";
import "./index.css";

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Hero />
        <TrendingRow />
      </main>
      <footer>Netfilx Clone</footer>
    </div>
  );
};

export default App;