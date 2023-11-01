import React from "react";
import "./Navbar.sass";

export default function Navbarr() {
  return (
    <>
      <header>
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST-n6U4Xo23NXEI0CTwo6qv5hmCExI0iaucQ&usqp=CAU"
                alt="Clothing Brand Logo"
              />
            </div>
            <nav>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/products">Products</a>
                </li>
                <li>
                  <a href="/about">About Us</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
                <li>
                  <a href="/contact">Contact2</a>
                </li>
              </ul>
            </nav>
            <div className="dynamic-title" id="dynamic-title">
              Clothing for Every Occasion
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
