import React from "react";
import "./Offers.css";

export default function Offers(){
  return (
    <section className="offers">
      <h2>Top Offers</h2>
      <div className="offers-row">
        <div className="offer-card">
          <img src="https://images.unsplash.com/photo-1585386959984-a415522d0da6?w=800&q=60" alt="offer" />
          <div className="o-text">Flat 20% off on selected mobiles</div>
        </div>
        <div className="offer-card">
          <img src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=800&q=60" alt="offer2" />
          <div className="o-text">Up to 40% on fashion</div>
        </div>
      </div>
    </section>
  );
}
