import { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <button
        className="btn-hamburger"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? (
          <img
            className="icon-close"
            src="../src/assets/shared/icon-close.svg"
            alt="icon-close"
          />
        ) : (
          <img
            className="icon-hamburger"
            src="../src/assets/shared/icon-hamburger.svg"
            alt="icon-hamburger"
          />
        )}
      </button>
      <nav className={`nav${isMobileMenuOpen ? " open" : ""}`}>
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
    </>
  );
};

export default Navbar;
