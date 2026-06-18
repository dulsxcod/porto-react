import React from 'react';

const About = () => {
  return (
    <section className="education" id="about">
      <h2 className="heading">Tentang <span>Saya</span></h2>
      <div className="timeline-items">

        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-date">2014 - 2020</div>
          <div className="timeline-content">
            <h3>Sekolah Dasar (SDN KRASAK 2)</h3>
            <p>Mulai mengenal dunia teknologi dan logika dasar yang memicu ketertarikan awal saya pada bidang komputer dan algoritma.</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-date">2020 - 2024</div>
          <div className="timeline-content">
            <h3>Sekolah Menengah Pertama (MTS AL-GHAZALI JATIBARANG)</h3>
            <p>Mendalami perangkat keras komputer, merakit PC, serta memahami dasar-dasar sistem operasi secara lebih mendalam.</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-date">2024 - Sekarang</div>
          <div className="timeline-content">
            <h3>Sekolah Menengah Kejuruan (SMK YAPIIM INDRAMAYU)</h3>
            <p>Mengambil jurusan Pengembangan Perangkat Lunak (PPLG). Fokus mempelajari bahasa pemrograman seperti PHP, JavaScript, serta arsitektur database modern.</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-date">Masa Depan (2027)</div>
          <div className="timeline-content">
            <h3>Magang di INOVINDO</h3>
            <p>Rencana program magang untuk mengaplikasikan ilmu coding langsung ke dalam industri skala nyata bersama mitra sekolah.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;