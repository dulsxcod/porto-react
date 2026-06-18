import React from 'react';

const Projects = () => {
  return (
    <section className="services" id="projects">
      <h2 className="heading">Proyek <span>Saya</span></h2>

      <div className="services-container">
        <div className="services-box">
          <div className="services-info">
            <h4>Dapur Tiga Putra</h4>
            <p>Aplikasi web penjualan (e-commerce) khusus untuk manajemen usaha kuliner rumahan Ibu. Memiliki fitur katalog menu makanan, sistem pemesanan online otomatis yang terintegrasi ke WhatsApp, serta pencatatan kas masuk dan keluar secara digital.</p>
          </div>
        </div>

        <div className="services-box">
          <div className="services-info">
            <h4>Live Music Team App</h4>
            <p>Aplikasi manajemen internal untuk tim musisi/band. Berfungsi untuk mengatur jadwal manggung (gigs), pembagian playlist lagu, kustomisasi set list chord, hingga transparansi manajemen sistem bagi hasil (payment settlement) antar personel secara digital.</p>
          </div>
        </div>

        <div className="services-box">
          <div className="services-info">
            <h4>Aplikasi Kalkulator</h4>
            <p>Aplikasi kalkulator digital berbasis web yang dibangun menggunakan kombinasi HTML, CSS, dan JavaScript murni (Vanilla JS). Berfungsi untuk mengeksekusi operasi aritmatika dasar seperti penjumlahan, pengurangan, perkalian, dan pembagian secara responsif.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;