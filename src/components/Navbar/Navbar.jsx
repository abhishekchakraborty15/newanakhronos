import React, { useState, useEffect } from 'react';
import { Button } from '../../components';
import { tmslLogo } from '../../constants/images';
import { FaBars } from 'react-icons/fa';
import { HiX } from 'react-icons/hi';
import useIsMobile from '../../hooks/useMobile';
import './Navbar.scss';

const Navbar = () => {
  const navLinks = [
    { name: 'Home', link: '#hero' },
    { name: 'About', link: '#about' },
    { name: 'Events', link: '#events' },
    { name: 'Gallery', link: '#gallery' },
    { name: 'Sponsors', link: '#sponsors' },
    { name: 'Contact', link: '#contact' },
  ];

  const isMobile = useIsMobile();
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [toggle, setToggle] = useState(false);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      setShow(
        window.scrollY > lastScrollY && window.scrollY > 100 ? false : true
      );
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <nav
      className={`navbar ${show ? 'navbar--show' : 'navbar--hide'} ${
        lastScrollY > 100 ? 'navbar--shadow' : 'navbar--no-shadow'
      } ${isMobile && 'navbar--mobile'}`}
    >
      <div className="navbar__container">
        <div className="navbar__logo">
          <img src={tmslLogo} alt="logo" />
        </div>
        {isMobile ? (
          <div className="navbar__actions navbar__actions--mobile-only">
            <Button type="solid" text="Login" />
            {!toggle && (
              <div className="navbar__toggle-btn hamburger">
                <FaBars onClick={() => setToggle(!toggle)} />
              </div>
            )}
            {toggle && (
              <div className="navbar__toggle-btn cross">
                <HiX onClick={() => setToggle(!toggle)} />
              </div>
            )}

            {toggle && (
              <ul className="navbar__menu navbar__menu--mobile-only">
                {navLinks.map((link) => (
                  <li className="navbar__menu-item" key={link.name}>
                    <a href={link.link} onClick={() => setToggle(!toggle)}>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ) : (
          <div className="navbar__actions">
            <ul className="navbar__menu">
              {navLinks.map((link) => (
                <li className="navbar__menu-item" key={link.name}>
                  <a href={link.link}> {link.name} </a>
                </li>
              ))}
            </ul>

            <Button type="solid" text="Login" />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
