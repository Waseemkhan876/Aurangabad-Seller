import React, { useEffect, useRef, useState } from "react";
import "./Slider.css";

const slides = [
  "/Aurangabad-Seller/public/slider/image1.jpeg",
  "/Aurangabad-Seller/public/slider/image2.jpeg",
  "/Aurangabad-Seller/public/slider/image3.jpeg",
  "/Aurangabad-Seller/public/slider/image4.jpeg",
];

export default function Slider(){
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

  useEffect(()=>{
    timerRef.current = setInterval(()=> setIndex(i => (i+1) % slides.length), 4000);
    return ()=> clearInterval(timerRef.current);
  },[]);

  return (
    <section className="hero-slider">
      <div className="slides" style={{transform:`translateX(${-index*100}%)`}}>
        {slides.map((src,i)=>(
          <div className="slide" key={i}>
            <img src={src} alt={`slide-${i}`} />
            <div className="slide-caption">Big Offer — Up to 50% off</div>
          </div>
        ))}
      </div>
      <div className="dots">
        {slides.map((_,i)=>(
          <button key={i} className={`dot ${i===index?'active':''}`} onClick={()=>setIndex(i)} />
        ))}
      </div>
    </section>
  );
}
