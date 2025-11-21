import React from "react";
import "./Products.css";

const products = [
  {id:1, title:"Smartphone A1", price:10999, img:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=60"},
  {id:2, title:"Wireless Headphones", price:2999, img:"https://images.unsplash.com/photo-1518444021915-7f8b4f6f2a8f?w=800&q=60"},
  {id:3, title:"Smartwatch Pro", price:4999, img:"https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=800&q=60"},
  {id:4, title:"DSLR Camera", price:29999, img:"https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=60"},
  {id:5, title:"Gaming Mouse", price:1299, img:"https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800&q=60"},
  {id:6, title:"Backpack", price:799, img:"https://images.unsplash.com/photo-1520975926204-6f61e6d75b3c?w=800&q=60"},
  {id:7, title:"Shoe Classic", price:2299, img:"https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=800&q=60"},
  {id:8, title:"Bluetooth Speaker", price:1599, img:"https://images.unsplash.com/photo-1580894908361-2d2e8d1f5d9d?w=800&q=60"}
];

export default function Products(){
  return (
    <section className="products-section">
      <h2>Popular Products</h2>
      <div className="products-grid">
        {products.map(p=>(
          <div className="product" key={p.id}>
            <div className="product-img"><img src={p.img} alt={p.title} /></div>
            <div className="product-body">
              <div className="product-title">{p.title}</div>
              <div className="product-price">₹{p.price}</div>
              <button className="buy-btn">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
