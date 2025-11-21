import React from "react";
import "./Footer.css";

export default function Footer(){
  return (
    <footer className="site-footer">
      <div className="container">
        <div>© {new Date().getFullYear()} aurangabadseller.com</div>
        <div className="foot-links">
          <a href="#">About</a> • <a href="#">Help</a> • <a href="#">Privacy</a>
        </div>
      </div>
    </footer>
  );
}
