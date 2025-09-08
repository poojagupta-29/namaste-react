import { useState } from "react";
import { Link } from "react-router";

import useOnlineStatus from "../utils/useOnlineStatus";


const Header = () => {

  const [toggleBtnName, setToggleBtnName] = useState('Login')
  const onlineStatus = useOnlineStatus();

  return (
    <header className="header">
      <div className="logo">FoodyHub</div>
      <div className="nav-items">
        <ul>
          <li className={`{status ${onlineStatus ? 'online' : 'offline'}}`}>
            {onlineStatus ? 'Online 🟢' : 'Offline 🔴'}
          </li>

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