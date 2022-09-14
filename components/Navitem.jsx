import Link from "next/link";
import react from 'react'


const NavItem = ({ text, href, active }) => {
  return (
    <Link href={href}>
      <a
        className={`
        nav__link ${active ? "active" : ""}
        `}
      >
        {text}
      </a>
      </Link>
  );
};

export default NavItem;
