import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router";


const Header = () => {

  const [toggleBtnName, setToggleBtnName] = useState('Login')

  useEffect(() => {
    console.log("Header useEffect rendered")
  }, [])

  return (
    <header className="header">
      <div className="logo">FoodyHub</div>
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>

          <button className="auth-btn" onClick={() => toggleBtnName === "Login" ? setToggleBtnName('Loggout') : setToggleBtnName('Login')}>{toggleBtnName}</button>
        </ul>
      </div>
    </header>
  )
}

export default Header;
export { Header }