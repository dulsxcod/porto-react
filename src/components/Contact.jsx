import React from 'react';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Tambahkan logika pengiriman pesan di sini jika diperlukan
    alert('Pesan berhasil dikirim! (Ini simulasi)');
  };

  return (
    <section className="contact" id="contact">
      <h2 className="heading">Hubungi <span>Saya</span></h2>

      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <div className="input-box">
            <input type="text" placeholder="Nama Lengkap" required />
            <input type="email" placeholder="Email" required />
          </div>
          <div className="input-box">
            <input type="number" placeholder="Nomor Telepon" />
            <input type="text" placeholder="Subjek Pesan" />
          </div>
        </div>

        <div className="input-group-2">
          <textarea cols="30" rows="10" placeholder="Pesan Anda" required></textarea>
          <input type="submit" value="Kirim Pesan" className="btn" />
        </div>
      </form>
    </section>
  );
};

export default Contact;