import { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { IoMenuOutline } from "react-icons/io5";

import styles from "./LandingNavigation.module.scss";
import { useScrollEffect } from "@/utils/useScrollEffect";
import { scrollToId } from "@/utils/scrollToId";
import { logo } from "@/data/logo";

function LandingNavigation({ className = "", id, data = [] }) {
  const [expanded, setExpanded] = useState(false);
  const isScrolled = useScrollEffect(50);

  const links = data?.links || (Array.isArray(data) ? data : []);

  const handleLinkClick = (e, link, text) => {
    if (link?.startsWith("#")) {
      e.preventDefault();
      const targetId = link.replace("#", "");

      if (targetId) {
        scrollToId(targetId);
      } else if (text?.toLowerCase() === "purchase") {
        const purchaseEl = document.getElementById("purchase") || document.getElementById("promo");
        if (purchaseEl) {
          scrollToId(purchaseEl.id);
        } else {
          window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
        }
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }

      setExpanded(false);
    } else {
      setExpanded(false);
    }
  };

  return (
    <Navbar
      expand="lg"
      variant="dark"
      fixed="top"
      id={id}
      expanded={expanded}
      className={`${styles.navbar} ${className} ${isScrolled ? styles.navbarScrolled : ""}`.replace(/\s+/g, " ").trim()}
    >
      <Container className={`${styles.navbarContainer} ${isScrolled ? styles.navbarContainerScrolled : ""}`.replace(/\s+/g, " ").trim()}>
        {/* Navbar Logo */}
        <Navbar.Brand
          href="#home"
          onClick={(e) => handleLinkClick(e, "#home", "Home")}
          className={styles.navbarImage}
        >
          <img alt="Luxex Logo" src={logo.light} />
        </Navbar.Brand>

        {/* Hamburger button */}
        <Navbar.Toggle
          aria-controls="landing-navbar-nav"
          className={styles.mobileButton}
          onClick={() => setExpanded(!expanded)}
        >
          <IoMenuOutline size={32} color="#ffffff" />
        </Navbar.Toggle>

        {/* Collapsible data */}
        <Navbar.Collapse id="landing-navbar-nav" className={styles.overlay}>
          <Nav className="ms-auto align-items-center">
            {links.map((item) => {
              const isPurchase = item.text?.toLowerCase() === "purchase";
              const isExternal = item.link?.startsWith("http://") || item.link?.startsWith("https://");

              return (
                <Nav.Link
                  key={item.text}
                  href={item.link}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className={isPurchase ? styles.purchaseButton : styles.linkText}
                  onClick={(e) => {
                    if (!isExternal) {
                      handleLinkClick(e, item.link, item.text);
                    } else {
                      setExpanded(false);
                    }
                  }}
                >
                  {item.text}
                </Nav.Link>
              );
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
      <hr className={`${styles.line} ${isScrolled ? styles.hide : ""}`} />
    </Navbar>
  );
}

export default LandingNavigation;
