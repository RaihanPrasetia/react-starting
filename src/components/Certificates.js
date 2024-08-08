import React from 'react';
import '../assets/css/App.css'; // Import CSS file
import '../assets/css/Certificates.css'; // Import CSS file

const certificates = [
  { id: 1, title: 'Certificate MSIB 6 - Kampus Merdeka', image: require('../assets/images/Certificate1.jpg').default },
  { id: 2, title: 'Certificate Peserta - Vetencode', image: require('../assets/images/Certificate2.jpg').default },
  { id: 3, title: 'Pemprograman Web Dasar - Dicoding', image: require('../assets/images/Certificate3.jpg').default },
  // Tambahkan sertifikat lainnya di sini
];

const Certificates = () => {
  return (
    <section id="certificates" className="section container-fluid py-5">
      <div className="container">
        <h2 className="text-center mb-3 text-decoration-none">Certificates</h2>
        <div className="row">
          {certificates.map(certificate => (
            <div key={certificate.id} className="col-12 col-sm-6 col-md-4 mb-4">
              <div className="card certificate-card h-100">
                <h5 className="card-title text-center mt-2">{certificate.title}</h5>
                <div className="card-body d-flex justify-content-center align-items-center">
                  <img src={certificate.image} alt={certificate.title} className="card-img-top img-fluid" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
