import { useState } from "react";

const Header = () => {

  const [toggleBtnName, setToggleBtnName] = useState('Login')

  return (
    <header className="header">
      <div className="logo">FoodyHub</div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Add to cart</li>

          <button className="auth-btn" onClick={() => toggleBtnName === "Login" ? setToggleBtnName('Loggout') : setToggleBtnName('Login')}>{toggleBtnName}</button>
        </ul>
      </div>
    </header>
  )
}

export default Header;
export { Header }