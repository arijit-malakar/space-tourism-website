import { useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "./Button";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <Button
        type="hamburger"
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
      </Button>
      <nav className={`nav${isMobileMenuOpen ? " open" : ""}`}>
        <ul className="nav-list">
          <li>
            <NavLink className="nav-text" to="/">
              <strong>00</strong> Home
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-text" to="/destination">
              <strong>01</strong> Destination
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-text" to="/crew">
              <strong>03</strong> Crew
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-text" to="/technology">
              <strong>04</strong> Technology
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
