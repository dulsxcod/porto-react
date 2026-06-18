import React, { useState } from 'react';

const Header = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <a href="#home" className="logo">PORTO<span>FOLIO</span></a>

      <i 
        className={`bx ${isMenuOpen ? 'bx-x' : 'bx-menu'}`} 
        id="menu-icon" 
        onClick={toggleMenu}
      ></i>

      <nav className={`navbar ${isMenuOpen ? 'active' : ''}`} id="nav">
        <a href="#home" className={activeSection === 'home' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Beranda</a>
        <a href="#about" className={activeSection === 'about' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Tentang</a>
        <a href="#projects" className={activeSection === 'projects' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Proyek</a>
        <a href="#contact" className={activeSection === 'contact' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Kontak</a>
      </nav>
    </header>
  );
};

export default Header;