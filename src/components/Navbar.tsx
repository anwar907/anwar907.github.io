import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg" id="navbar">
      <div className="container">
        <a className="navbar-brand page-scroll" href="#home">Anwar | Portfolio</a>
        <button
          className="navbar-toggler text-primary"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span><i className="fas fa-bars"></i></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto">
            <a className="nav-item nav-link active page-scroll" href="#home">
              Home <span className="sr-only">(current)</span>
            </a>
            <a className="nav-item nav-link page-scroll" href="#about">about me</a>
            <a className="nav-item nav-link page-scroll" href="#experience">experience</a>
            <a className="nav-item btn btn-sm tombol page-scroll" href="#">Get in touch</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;