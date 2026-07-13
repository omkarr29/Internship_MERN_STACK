import React from "react";
import Card from "./components/Card";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Card
        image="https://img6.hkrtcdn.com/39079/prd_3907805-MuscleBlaze-Biozyme-Performance-Whey-2.2-lb-Rich-Chocolate_o.jpg"
        name="Whey Protein"
        description="Best for Completing protein intake and Inhance Performance."
        buttonText="Buy Now"
      />

      <Card
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMtLFbanMn_nlmlgDFZV_JtHTvYbBTm0bk14x4UvnNhG18Lan5KqcF-Y8y&s=10"
        name="Fish Oil"
        description="Best for bone health and recovery"
        buttonText="View Details"
      />

      <Card
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4jcKV7GCy5D4gynW8ZmNvRMD9UkNi8UdsRU_jdbZdURqu3MWoMAOOV5An&s=10"
        name="Creatine Monohydrate"
        description="For MUscle building and enhance strength"
        buttonText="Shop Now"
      />
    </div>
  );
}

export default App