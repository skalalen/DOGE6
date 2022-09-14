import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import NavItem from "./NavItem";

const MENU_LIST = [
  { text: "Market", href: "/" },
  { text: "Mint", href: "/Mint" },
  { text: "Mining", href: "/Mining" },
  { text: "My Nft's", href: "/portal" },
  { text: "Farms", href: "http://Dogebox.netlify.app" },
];
const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header>
      <nav className={`nav`}>
        <Link href={"/"}>
          <a>
             <img style={{width:'140px'}} src ="Logo.png"/>
            <h1 className="logo" style={{color:"#FFFFFF"}}></h1>
            
          </a>
        </Link>
        <div
          onClick={() => setNavActive(!navActive)}
          className={`nav__menu-bar`} 
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`${navActive ? "active" : ""} nav__menu-list`}>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;