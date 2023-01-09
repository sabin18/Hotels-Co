import { useRootContext } from "@/context/context";
import headerData from "@/data/headerData";
import useScroll from "@/hooks/useScroll";
import Link from "next/link";
import React from "react";
import { Container, Image } from "react-bootstrap";
import NavItem from "./NavItem";

const { icons, navItems, social, logo, logo2 } = headerData;

const Header = ({ pageTitle }) => {
  const scrollTop = useScroll(130);
  const { toggleMenu, toggleSearch } = useRootContext();

  return (
    <header
      className={`main-header${
        pageTitle === "Home Two" ? " main-header-two" : ""
      } clearfix`}
    >
      <nav
        className={
          scrollTop
            ? `stricky-header stricked-menu main-menu${
                pageTitle === "Home Two" ? " main-menu-two" : ""
              } stricky-fixed slideInDown animated clearfix`
            : `main-menu${
                pageTitle === "Home Two" ? " main-menu-two" : ""
              } slideIn animated clearfix`
        }
      >
        <div
          className={
            scrollTop
              ? "sticky-header__content main-menu-wrapper clearfix"
              : "main-menu-wrapper clearfix"
          }
        >
          <Container className="clearfix">
            <div className="main-menu-wrapper-inner clearfix">
              <div className="main-menu-wrapper__left clearfix">
                <div className="main-menu-wrapper__logo">
                  <Link href="/">
                    <a>
                      <Image
                        src={pageTitle === "Home Two" ? logo2.src : logo.src}
                        alt=""
                        style={{height:"40px"}}
                      />
                    </a>
                  </Link>
                </div>
                <div className="main-menu-wrapper__main-menu">
                  <span
                    onClick={() => toggleMenu()}
                    className="mobile-nav__toggler"
                  >
                    <i className="fa fa-bars"></i>
                  </span>
                  <ul className="main-menu__list">
                    {navItems.map((navItem) => (
                      <NavItem key={navItem.id} navItem={navItem} />
                    ))}
                  </ul>
                </div>
              </div>
              <div className="main-menu-wrapper__right">
                <span
                  onClick={toggleSearch}
                  style={{ cursor: "pointer" }}
                  className="main-menu__search search-toggler icon-magnifying-glass"
                ></span>
                <a href="#" className="main-menu__user icon-avatar"></a>
              </div>
            </div>
          </Container>
        </div>
      </nav>
    </header>
  );
};

export default Header;
