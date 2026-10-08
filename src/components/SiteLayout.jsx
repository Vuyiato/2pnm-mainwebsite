// Shared site chrome: social bar, navigation, and footer used by every route.
import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import { socialLinks } from "../data/socials";

const socialIcons = {
  Facebook: FaFacebookF,
  LinkedIn: FaLinkedinIn,
  X: FaXTwitter,
  Instagram: FaInstagram,
  Email: FaEnvelope,
};

function SiteLayout() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="site-shell">
      <div className="social-bar" aria-label="TWOPNM social links">
        <div className="social-bar__links">
          {socialLinks.map(({ label, href }) => {
            const Icon = socialIcons[label];
            return (
              <a
                key={label}
                href={href}
                target={label === "Email" ? undefined : "_blank"}
                rel={label === "Email" ? undefined : "noreferrer"}
                aria-label={label}
              >
                <Icon size={16} />
              </a>
            );
          })}
        </div>
      </div>
      <header className="site-header">
        <Link
          className="brand"
          to="/"
          aria-label="TWOPNM Academy home"
          onClick={() => setMenuOpen(false)}
        >
          <img
            className="brand-logo"
            src="https://2pnm.co.za/wp-content/uploads/2025/02/Main-300x91.png"
            alt="TWOPNM Academy"
          />
        </Link>
        <button
          className="menu-toggle"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
        >
          <span>{menuOpen ? "Close" : "Menu"}</span>
          <span className="menu-icon">{menuOpen ? "×" : "☰"}</span>
        </button>
        <nav
          id="main-navigation"
          className={`main-navigation ${menuOpen ? "is-open" : ""}`}
          aria-label="Main navigation"
        >
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "is-active" : undefined)}
            onClick={() => setMenuOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            to="/programmes"
            className={({ isActive }) => (isActive ? "is-active" : undefined)}
            onClick={() => setMenuOpen(false)}
          >
            Programmes
          </NavLink>
          <NavLink
            to="/opportunities"
            className={({ isActive }) => (isActive ? "is-active" : undefined)}
            onClick={() => setMenuOpen(false)}
          >
            Opportunities
          </NavLink>
          <NavLink
            to="/impact"
            className={({ isActive }) => (isActive ? "is-active" : undefined)}
            onClick={() => setMenuOpen(false)}
          >
            Impact
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "is-active" : undefined)}
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </NavLink>
          <NavLink
            to="/news"
            className={({ isActive }) => (isActive ? "is-active" : undefined)}
            onClick={() => setMenuOpen(false)}
          >
            News & events
          </NavLink>
          <Link
            className="button button--small"
            to="/apply"
            onClick={() => setMenuOpen(false)}
          >
            Apply now <span aria-hidden="true">↗</span>
          </Link>
        </nav>
      </header>
      <Outlet />
      <footer className="site-footer" id="contact">
        <div className="footer-brand">
          <Link className="brand" to="/">
            <img
              className="brand-logo"
              src="https://2pnm.co.za/wp-content/uploads/2025/02/Main-300x91.png"
              alt="TWOPNM Academy"
            />
          </Link>
          <p>Innovating youth skills development one learner at a time.</p>
          <div className="footer-socials" aria-label="TWOPNM social links">
            {socialLinks.map(({ label, href }) => {
              const Icon = socialIcons[label];
              return (
                <a
                  key={label}
                  href={href}
                  target={label === "Email" ? undefined : "_blank"}
                  rel={label === "Email" ? undefined : "noreferrer"}
                  aria-label={label}
                >
                  <Icon size={17} />
                </a>
              );
            })}
          </div>
        </div>
        <div className="footer-links">
          <div>
            <p className="eyebrow">Explore</p>
            <Link to="/about">About</Link>
            <Link to="/programmes">Programmes</Link>
            <Link to="/opportunities">Opportunities</Link>
            <Link to="/impact">Impact</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/news">News & events</Link>
            <Link to="/apply">Apply now</Link>
          </div>
          <div>
            <p className="eyebrow">Connect</p>
            <a href="mailto:info@2pnm.co.za">info@2pnm.co.za</a>
            <a
              href="https://www.instagram.com/2pnm2025"
              target="_blank"
              rel="noreferrer"
            >
              Instagram ↗
            </a>
            <a
              href="https://www.linkedin.com/in/twopnm-academy-845710370/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2025 TWOPNM Academy</span>
          <span>Johannesburg, South Africa</span>
        </div>
      </footer>
    </div>
  );
}

export default SiteLayout;
