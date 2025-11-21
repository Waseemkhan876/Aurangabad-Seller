import React from "react";
import "./Categories.css";

const cats = [
  {title:"Abayas", img:"/categories/abayaimg.jpg"},
  {title:"Weddings", img:"https://images.unsplash.com/photo-1520975913940-3b8e7b6a6b4b?w=600&q=60"},
  {title:"Functions", img:"https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=60"},
  {title:"Home's", img:"https://images.unsplash.com/photo-1505691723518-36a6b5b1b7b8?w=600&q=60"},
  {title:"Party's", img:"https://images.unsplash.com/photo-1556228453-3e3a2e8f8b23?w=600&q=60"}
];

export default function Categories(){
  return (
    <section className="categories">
      <h2>Top Categories</h2>
      <div className="cats-grid">
        {cats.map((c,i)=>(
          <div className="cat" key={i}>
            <img src={c.img} alt={c.title} />
            <div className="cat-title">{c.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
