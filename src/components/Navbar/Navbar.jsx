import { useState } from "react";
import { HiOutlineBars3, HiOutlineXMark } from "react-icons/hi2";
import { Link } from "react-router-dom";
import "./Navbar.css";

import Button from "../Button/Button";
import Container from "../Container/Container";

import logo from "../../assets/images/logo-2.svg";

const menus = [
  {
    title: "Home",
    href: "#home",
  },
  {
    title: "Projects",
    href: "#projects",
  },
  {
    title: "Skills",
    href: "#skills",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <Container>
        <div className="navbar__wrapper">
          <a href="#home" className="navbar__logo">
            <img src={logo} alt="Logo" />
          </a>

          {/* Desktop */}

          <nav className="navbar__menu">
            {menus.map((menu) => (
              <a key={menu.title} href={menu.href}>
                {menu.title}
              </a>
            ))}
          </nav>

          <div className="navbar__action">
            <a href="/resume">
              <Button>Resume</Button>
            </a>
          </div>

          {/* Mobile Button */}

          <button className="navbar__toggle" onClick={() => setOpen(!open)}>
            {open ? <HiOutlineXMark size={28} /> : <HiOutlineBars3 size={28} />}
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}

      <div className={`mobile-menu ${open ? "active" : ""}`}>
        <nav>
          {menus.map((menu) => (
            <a key={menu.title} href={menu.href} onClick={() => setOpen(false)}>
              {menu.title}
            </a>
          ))}
        </nav>

        <a href="/resume">
          <Button>Resume</Button>
        </a>
      </div>
    </header>
  );
}

export default Navbar;
