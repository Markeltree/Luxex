import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import styles from "./Navigation.module.scss";
import { IoMenuOutline } from "react-icons/io5";

import { useScrollEffect } from "@/utils/useScrollEffect";
import { logo } from "@/data/logo";

function Navigation({ className = "", id, data = [] }) {
  const isScrolled = useScrollEffect(50);

  if (!data || (Array.isArray(data) && data.length === 0) || (data.links && data.links.length === 0)) return null;

  const iconColor = isScrolled ? "var(--color-text-dark)" : "var(--color-text-light)";

  const logoSrc = isScrolled ? logo.dark : logo.light;

  return (
    <Navbar
      expand="lg"
      variant="light"
      fixed="top"
      id={id}
      className={`${styles.navbar} ${className} ${isScrolled ? styles.navbarScrolled : ""}`.replace(/\s+/g, " ").trim()}
    >
      <Container className={`${styles.navbarContainer} ${isScrolled ? styles.navbarContainerScrolled : ""}`.replace(/\s+/g, " ").trim()}>
        {/* Navbar Logo */}
        <Navbar.Brand as={Link} to={`/`} className={styles.navbarImage}>
          <img alt="Logo" src={logoSrc} />
        </Navbar.Brand>

        {/* Hamburger button */}
        <Navbar.Toggle aria-controls="main-navbar-nav" className={styles.mobileButton}>
          <IoMenuOutline size={32} color={iconColor} />
        </Navbar.Toggle>

        {/* Collapsible data */}
        <Navbar.Collapse id="main-navbar-nav" className={styles.overlay}>
          <Nav className="ms-auto align-items-center">
            {data.links.map((item) =>
              item.dropdown ? (
                <NavDropdown
                  key={item.text}
                  className={`${styles.dropdown} ${isScrolled ? styles.dropdownScrolled : ""}`}
                  title={item.text}
                  id={item.text}
                  drop="down-centered"
                >
                  {item.dropdown.map((sub) => (
                    /* Dropdown items relative to demo */
                    <NavDropdown.Item as={Link} key={sub.text} className={styles.dropdownItem} to={sub.link}>
                      {sub.text}
                    </NavDropdown.Item>
                  ))}
                </NavDropdown>
              ) : (
                /* Normal data relative to demo */
                <Nav.Link as={Link} key={item.text} className={`${styles.linkText} ${isScrolled ? styles.linkTextScrolled : ""}`} to={item.link}>
                  {item.text}
                </Nav.Link>
              ),
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
      <hr className={`${styles.line} ${isScrolled ? styles.hide : ""}`}></hr>
    </Navbar>
  );
}

export default Navigation;
