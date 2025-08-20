import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header.js";
import Body from "./components/Body.js";

import "../index.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2025 FoodyHub. All rights reserved.</p>
    </footer>
  )
}

const AppLayout = () => {
  return (
    <div className="container">
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)