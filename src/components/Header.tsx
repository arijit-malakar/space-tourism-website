import { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="header">
      <img src="../src/assets/shared/logo.svg" alt="logo-img" />
      <div className="header-divider"></div>
      <div className="mobile-menu-btn"></div>
      <nav className={`nav ${isMobileMenuOpen && "open"}`}>
        <ul className="nav-list">
          <li>
            <a className="nav-text active" href="#">
              <strong>00</strong> Home
            </a>
          </li>
          <li>
            <a className="nav-text" href="#">
              <strong>01</strong> Destination
            </a>
          </li>
          <li>
            <a className="nav-text" href="#">
              <strong>03</strong> Crew
            </a>
          </li>
          <li>
            <a className="nav-text" href="#">
              <strong>04</strong> Technology
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
