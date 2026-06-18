import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social">
        <a href="https://www.linkedin.com/feed/"><i className='bx bxl-linkedin'></i></a>
        <a href="https://github.com/dulsxcod"><i className='bx bxl-github'></i></a>
        <a href="https://www.instagram.com/mass_beduls?igsh=dXR4dWM0aDEyNzBt" target="_blank" rel="noreferrer"><i className='bx bxl-instagram-alt'></i></a>
        <a href="https://wa.me/085723706843" target="_blank" rel="noreferrer"><i className='bx bxl-whatsapp'></i></a>
      </div>

      <ul className="list">
        <li><a href="#home">Beranda</a></li>
        <li><a href="#about">Tentang</a></li>
        <li><a href="#projects">Proyek</a></li>
        <li><a href="#contact">Kontak</a></li>
      </ul>
      <p className="copyright">
        © DuhXcode | Hak Cipta Dilindungi Undang-Undang
      </p>
    </footer>
  );
};

export default Footer;