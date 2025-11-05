import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer mt-5">
      <div className="card-footer bg-white">
        <div className="container">
          <div className="row">
            <div className="col-md-4 p-2">
              <div className="sosmed text-center">
                <span>
                  <a href="https://github.com/anwar907">
                    <i className="fab fa-github"></i>
                  </a>
                </span>
                <span>
                  <a href="https://www.linkedin.com/in/anwar-s/">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </span>
                <span>
                  <a href="https://www.instagram.com/anwar.dmg/">
                    <i className="fab fa-instagram"></i>
                  </a>
                </span>
                <span>
                  <a href="https://www.facebook.com/AnwarTheEnd/">
                    <i className="fab fa-facebook"></i>
                  </a>
                </span>
                <span>
                  <a href="https://www.kuasaiteknologi.com/">
                    <i className="fab fa-blogger"></i>
                  </a>
                </span>
                <span>
                  <a href="https://api.whatsapp.com/send?phone=6285238718978">
                    <i className="fab fa-whatsapp"></i>
                  </a>
                </span>
              </div>
            </div>
            <div className="col-md-4 p-2">
              <p className="lisensi text-center">
                Copyright © {new Date().getFullYear()}, Anwar Sapi'i.
              </p>
            </div>
            <div className="col-md-4 p-2">
              <div className="adrees text-center">
                <span>
                  <a href="https://github.com/anwar907">
                    <i className="fas fa-map-marker-alt"></i> Loang Balok kecamatan sekarbela kota mataram
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;