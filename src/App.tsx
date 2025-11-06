import React, { useEffect } from 'react';
import About from './components/About';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Modals from './components/Modals';
import Navbar from './components/Navbar';

declare global {
  interface Window {
    AOS: any;
    $: any;
  }
}

const App: React.FC = () => {
  useEffect(() => {
    // Initialize AOS
    if (window.AOS) {
      window.AOS.init();
    }

    // Navbar scroll effect
    const handleScroll = () => {
      const nav = document.getElementById('navbar');
      if (nav) {
        if (window.pageYOffset > 100) {
          nav.style.background = '#ffffff';
          nav.style.boxShadow = '5px 10px 6px -11px rgba(173,173,173,0.54)';
          nav.style.zIndex = '1';
          nav.style.opacity = '0.9';

          if (window.$) {
            window.$('.nav-link').addClass('nav-link-scroll');
            window.$('.navbar-brand').addClass('navbar-brand-scroll');
            window.$('.tombol').addClass('tombol-scroll');
          }
        } else {
          nav.style.background = 'transparent';
          nav.style.boxShadow = 'none';

          if (window.$) {
            window.$('.nav-link').removeClass('nav-link-scroll');
            window.$('.navbar-brand').removeClass('navbar-brand-scroll');
            window.$('.tombol').removeClass('tombol-scroll');
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      {/* <Contact /> */}
      <Footer />
      <Modals />
    </div>
  );
};

export default App;