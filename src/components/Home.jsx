import React from 'react';
import profileImg from '../assets/pp.jpeg';

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h1>Hai, Ini MUHAMMAD <span>ABDUH</span></h1>
        <h3 className="text-animation">Saya Adalah Seorang <span></span></h3>
        <p>
          SELAMAT DATANG DI PORTOFOLIO PRIBADIKU. Saya seorang pelajar rekayasa perangkat lunak yang berfokus pada
          pengembangan aplikasi web interaktif dan fungsional. Jika ada yang ingin mengenal saya lebih dalam,
          silahkan klik media sosial di bawah ini!
        </p>

        <div className="social-icons">
          <a href="https://www.linkedin.com/feed/"><i className='bx bxl-linkedin'></i></a>
          <a href="https://github.com/dulsxcod"><i className='bx bxl-github'></i></a>
          <a href="https://www.instagram.com/mass_beduls?igsh=dXR4dWM0aDEyNzBt" target="_blank" rel="noreferrer"><i className='bx bxl-instagram-alt'></i></a>
          <a href="https://wa.me/085723706843" target="_blank" rel="noreferrer"><i className='bx bxl-whatsapp'></i></a>
        </div>

        <div className="btn-group">
          <a href="#contact" className="btn">Hubungi Saya</a>
          <a href="#projects" className="btn">Lihat Karya</a>
        </div>
      </div>
      <div className="home-img">
        <img src={profileImg} alt="Profil DuhXcode" />
      </div>
    </section>
  );
};

export default Home;