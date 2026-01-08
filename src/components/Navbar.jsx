import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <div className="container">

        {/* Logo */}
        <div className="logo">
          <NavLink to="/">
            <h2 id="our-name"><i>Vicky Kumar</i></h2>
          </NavLink>
        </div>

        {/* Hamburger Button (mobile) */}
        <div
          className={`hamburger ${open ? "active" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Nav Menu */}
        <nav className={open ? "open" : ""}>
          <ul>
            <li><NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink></li>
            <li><NavLink to="/about" onClick={() => setOpen(false)}>About</NavLink></li>
            <li><NavLink to="/skills" onClick={() => setOpen(false)}>Skills</NavLink></li>
            <li><NavLink to="/projects" onClick={() => setOpen(false)}>Projects</NavLink></li>
            <li><NavLink to="/contact" onClick={() => setOpen(false)}>Contact</NavLink></li>
          </ul>
        </nav>

      </div>
    </header>
  );
}
