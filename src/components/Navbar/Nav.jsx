import React,{useState} from 'react';

import { useMediaQuery } from "react-responsive";
import { slide as Menu } from "react-burger-menu";
import { SCREENS } from '../../responsive/index';
import { menuStyles } from '../../responsive/menuStyles';
import './Nav.scss';

function Nav() {
   const isMobile = useMediaQuery({maxWidth:SCREENS.md})
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true)
    } else {
      setNavbar(false)
   }
  }

  window.addEventListener('scroll', changeBackground);

    return (
      <header className={navbar ? "header active" : "header"}>
        <nav className="nav">
          <div className="logo">
            <h1>VOITURE</h1>
          </div>
          {isMobile ? (
            <Menu right styles={menuStyles}>
              <ul className="menu">
                <li>
              <a href="/" className="current-page">
                Home
              </a>
            </li>
            <li >
              <a href="/">About</a>
            </li>
            <li >
              <a href="/">Services</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
            </Menu>
          ):( <ul>
            <li>
              <a href="/" className="current-page">
                Home
              </a>
            </li>
            <li >
              <a href="/">About</a>
            </li>
            <li >
              <a href="/">Services</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>)}
          {/* <div className="hamburger">
            <FontAwesomeIcon icon={ faBars}/>
          </div> */}
          {/* <ul>
            <li>
              <a href="/" className="current-page">
                Home
              </a>
            </li>
            <li >
              <a href="/">About</a>
            </li>
            <li >
              <a href="/">Services</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul> */}
        </nav>
      </header>
    );
}

export default Nav
