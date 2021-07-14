import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React,{useState} from 'react';
import './Nav.scss';

function Nav() {
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
          <div className="hamburger">
            <FontAwesomeIcon icon={ faBars}/>
          </div>
          <ul>
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
        </nav>
      </header>
    );
}

export default Nav
