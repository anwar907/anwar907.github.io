import React from 'react';
import antmCart from '../assets/img/antm/cart-bg.png';
import antmConfirm from '../assets/img/antm/confirm-bg.png';
import antmDetails from '../assets/img/antm/details-bg.png';
import antmHistory from '../assets/img/antm/history-bg.png';
import antmHome from '../assets/img/antm/home-bg.png';
import antmProduct from '../assets/img/antm/product-bg.png';
import antmSplash from '../assets/img/antm/splash-bg.png';
import antmTransaction from '../assets/img/antm/transaction-bg.png';

import gkClass from '../assets/img/gokampus/class-bg.png';
import gkHome from '../assets/img/gokampus/home-bg.png';
import gkLms from '../assets/img/gokampus/lms-bg.png';

import bookHistory from '../assets/img/bookingninjas/history.png';
import bookLogin from '../assets/img/bookingninjas/login.png';
import bookProfile from '../assets/img/bookingninjas/profile.png';
import bookTask from '../assets/img/bookingninjas/task.png';
import bookTask1 from '../assets/img/bookingninjas/task1.png';

import foxDetails from '../assets/img/foxlogger/details-bg.png';
import foxHome from '../assets/img/foxlogger/foxhome-bg.png';
import foxList from '../assets/img/foxlogger/list-bg.png';
import foxProfile from '../assets/img/foxlogger/profile-bg.png';

import lingoCourse from '../assets/img/lingo/course.svg';
import lingoExplore from '../assets/img/lingo/explore.svg';
import lingoLevel from '../assets/img/lingo/level.svg';

import foodHome from '../assets/img/food/home.svg';
import foodPembayaran from '../assets/img/food/pembayaran.svg';
import foodPesanan from '../assets/img/food/pesanan.svg';
import foodProfil from '../assets/img/food/profil.svg';

import sikaP1 from '../assets/img/sika/p1.png';
import sikaP2 from '../assets/img/sika/p2.png';
import sikaP3 from '../assets/img/sika/p3.png';
import sikaP4 from '../assets/img/sika/p4.png';
import sikaP5 from '../assets/img/sika/p5.png';

import lompaqCategory from '../assets/img/lompaq/category.png';
import lompaqForm from '../assets/img/lompaq/form.png';
import lompaqHome from '../assets/img/lompaq/home.png';
import lompaqNotes from '../assets/img/lompaq/notes.png';
import lompaqProfile from '../assets/img/lompaq/profile.png';
import lompaqReport from '../assets/img/lompaq/report.png';


const Modals: React.FC = () => {
  return (
    <>

    {/* Lompaq Modal */}
    <div className="modal fade lompaq" tabIndex={-1} role="dialog">
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div id="lompaq" className="carousel slide carousel-fade" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={lompaqCategory} className="d-block img-fluid mx-auto" style={{maxHeight: '70vh', objectFit: 'contain'}} alt="home" />
              </div>
              <div className="carousel-item">
                <img src={lompaqProfile} className="d-block img-fluid mx-auto" style={{maxHeight: '70vh', objectFit: 'contain'}} alt="profile" />
              </div>
              <div className="carousel-item">
                <img src={lompaqHome} className="d-block img-fluid mx-auto" style={{maxHeight: '70vh', objectFit: 'contain'}} alt="category" />
              </div>
              <div className="carousel-item">
                <img src={lompaqNotes} className="d-block img-fluid mx-auto" style={{maxHeight: '70vh', objectFit: 'contain'}} alt="notes" />
              </div>
              <div className="carousel-item">
                <img src={lompaqReport} className="d-block img-fluid mx-auto" style={{maxHeight: '70vh', objectFit: 'contain'}} alt="report" />
              </div>
              <div className="carousel-item">
                <img src={lompaqForm} className="d-block img-fluid mx-auto" style={{maxHeight: '70vh', objectFit: 'contain'}} alt="form" />
              </div>
            </div>
            <button className="custom-nav-btn prev" data-target="#lompaq" data-slide="prev">
              ‹
            </button>
            <button className="custom-nav-btn next" data-target="#lompaq" data-slide="next">
              ›
            </button>
          </div>
        </div>
      </div>
    </div>

      {/* Antm Modal */}
      <div className="modal fade antm" tabIndex={-1} role="dialog">
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div id="antm" className="carousel slide carousel-fade" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={antmSplash} className="d-block img-fluid mx-auto" style={{maxHeight: '70vh', objectFit: 'contain'}} alt="splash" />
                </div>
                <div className="carousel-item">
                  <img src={antmHome} className="d-block img-fluid mx-auto" style={{maxHeight: '70vh', objectFit: 'contain'}} alt="home" />
                </div>
                <div className="carousel-item">
                  <img src={antmProduct} className="d-block img-fluid mx-auto" style={{maxHeight: '70vh', objectFit: 'contain'}} alt="product" />
                </div>
                <div className="carousel-item">
                  <img src={antmDetails} className="d-block img-fluid mx-auto" style={{maxHeight: '70vh', objectFit: 'contain'}} alt="details" />
                </div>
                <div className="carousel-item">
                  <img src={antmCart} className="d-block img-fluid mx-auto" style={{maxHeight: '70vh', objectFit: 'contain'}} alt="cart" />
                </div>
                <div className="carousel-item">
                  <img src={antmConfirm} className="d-block img-fluid mx-auto" style={{maxHeight: '70vh', objectFit: 'contain'}} alt="confirm" />
                </div>
                <div className="carousel-item">
                  <img src={antmHistory} className="d-block img-fluid mx-auto" style={{maxHeight: '70vh', objectFit: 'contain'}} alt="history" />
                </div>
                <div className="carousel-item">
                  <img src={antmTransaction} className="d-block img-fluid mx-auto" style={{maxHeight: '70vh', objectFit: 'contain'}} alt="transaction" />
                </div>
              </div>
              <button className="custom-nav-btn prev" data-target="#antm" data-slide="prev">
                ‹
              </button>
              <button className="custom-nav-btn next" data-target="#antm" data-slide="next">
                ›
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* GoKampus Modal */}
      <div className="modal fade gokampus" tabIndex={-1} role="dialog">
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div id="gokampus" className="carousel slide carousel-fade" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={gkHome} className="d-block img-fluid mx-auto" style={{maxHeight: '70vh', objectFit: 'contain'}} alt="home" />
                </div>
                <div className="carousel-item">
                  <img src={gkClass} className="d-block img-fluid mx-auto" style={{maxHeight: '70vh', objectFit: 'contain'}} alt="class" />
                </div>
                <div className="carousel-item">
                  <img src={gkLms} className="d-block img-fluid mx-auto" style={{maxHeight: '70vh', objectFit: 'contain'}} alt="lms" />
                </div>
              </div>
              <button className="custom-nav-btn prev" data-target="#gokampus" data-slide="prev">
                ‹
              </button>
              <button className="custom-nav-btn next" data-target="#gokampus" data-slide="next">
                ›
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* TodoStaff Modal */}
      <div className="modal fade todostaff" tabIndex={-1} role="dialog">
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div id="todostaff" className="carousel slide carousel-fade" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item">
                  <img src={bookLogin} className="d-block img-fluid mx-auto" style={{maxHeight: '70vh', objectFit: 'contain'}} alt="login" />
                </div>
                <div className="carousel-item active">
                  <img src={bookTask} className="d-block img-fluid mx-auto" style={{maxHeight: '70vh', objectFit: 'contain'}} alt="task" />
                </div>
                <div className="carousel-item">
                  <img src={bookTask1} className="d-block img-fluid mx-auto" style={{maxHeight: '70vh', objectFit: 'contain'}} alt="task1" />
                </div>
                <div className="carousel-item">
                  <img src={bookHistory} className="d-block img-fluid mx-auto" style={{maxHeight: '70vh', objectFit: 'contain'}} alt="history" />
                </div>
                <div className="carousel-item">
                  <img src={bookProfile} className="d-block img-fluid mx-auto" style={{maxHeight: '70vh', objectFit: 'contain'}} alt="profile" />
                </div>
              </div>
              <button className="custom-nav-btn prev" data-target="#todostaff" data-slide="prev">
                ‹
              </button>
              <button className="custom-nav-btn next" data-target="#todostaff" data-slide="next">
                ›
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Foxlogger Modal */}
      <div className="modal fade foxlogger" tabIndex={-1} role="dialog">
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div id="foxlogger" className="carousel slide carousel-fade" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={foxHome} className="d-block img-fluid mx-auto" style={{maxHeight: '70vh', objectFit: 'contain'}} alt="home" />
                </div>
                <div className="carousel-item">
                  <img src={foxDetails} className="d-block img-fluid mx-auto" style={{maxHeight: '70vh', objectFit: 'contain'}} alt="details" />
                </div>
                <div className="carousel-item">
                  <img src={foxList} className="d-block img-fluid mx-auto" style={{maxHeight: '70vh', objectFit: 'contain'}} alt="list" />
                </div>
                <div className="carousel-item">
                  <img src={foxProfile} className="d-block img-fluid mx-auto" style={{maxHeight: '70vh', objectFit: 'contain'}} alt="profile" />
                </div>
              </div>
              <button className="custom-nav-btn prev" data-target="#foxlogger" data-slide="prev">
                ‹
              </button>
              <button className="custom-nav-btn next" data-target="#foxlogger" data-slide="next">
                ›
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Lingo Modal */}
      <div className="modal fade lingo" tabIndex={-1} role="dialog">
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div id="lingo" className="carousel slide carousel-fade" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={lingoLevel} className="d-block img-fluid mx-auto" style={{maxHeight: '70vh', objectFit: 'contain'}} alt="level" />
                </div>
                <div className="carousel-item">
                  <img src={lingoExplore} className="d-block img-fluid mx-auto" style={{maxHeight: '70vh', objectFit: 'contain'}} alt="explore" />
                </div>
                <div className="carousel-item">
                  <img src={lingoCourse} className="d-block img-fluid mx-auto" style={{maxHeight: '70vh', objectFit: 'contain'}} alt="course" />
                </div>
              </div>
              <button className="custom-nav-btn prev" data-target="#lingo" data-slide="prev">
                ‹
              </button>
              <button className="custom-nav-btn next" data-target="#lingo" data-slide="next">
                ›
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Food Modal */}
      <div className="modal fade food" tabIndex={-1} role="dialog">
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div id="food" className="carousel slide carousel-fade" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={foodPembayaran} className="d-block img-fluid mx-auto" style={{maxHeight: '70vh', objectFit: 'contain'}} alt="pembayaran" />
                </div>
                <div className="carousel-item">
                  <img src={foodPesanan} className="d-block img-fluid mx-auto" style={{maxHeight: '70vh', objectFit: 'contain'}} alt="pesanan" />
                </div>
                <div className="carousel-item">
                  <img src={foodHome} className="d-block img-fluid mx-auto" style={{maxHeight: '70vh', objectFit: 'contain'}} alt="home" />
                </div>
                <div className="carousel-item">
                  <img src={foodProfil} className="d-block img-fluid mx-auto" style={{maxHeight: '70vh', objectFit: 'contain'}} alt="profil" />
                </div>
              </div>
              <button className="custom-nav-btn prev" data-target="#food" data-slide="prev">
                ‹
              </button>
              <button className="custom-nav-btn next" data-target="#food" data-slide="next">
                ›
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Sika Modal */}
      <div className="modal fade sika" tabIndex={-1} role="dialog">
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div id="sika" className="carousel slide carousel-fade" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={sikaP2} className="d-block img-fluid mx-auto" style={{maxHeight: '70vh', objectFit: 'contain'}} alt="p2" />
                </div>
                <div className="carousel-item">
                  <img src={sikaP3} className="d-block img-fluid mx-auto" style={{maxHeight: '70vh', objectFit: 'contain'}} alt="p3" />
                </div>
                <div className="carousel-item">
                  <img src={sikaP1} className="d-block img-fluid mx-auto" style={{maxHeight: '70vh', objectFit: 'contain'}} alt="p1" />
                </div>
                <div className="carousel-item">
                  <img src={sikaP4} className="d-block img-fluid mx-auto" style={{maxHeight: '70vh', objectFit: 'contain'}} alt="p4" />
                </div>
                <div className="carousel-item">
                  <img src={sikaP5} className="d-block img-fluid mx-auto" style={{maxHeight: '70vh', objectFit: 'contain'}} alt="p5" />
                </div>
              </div>
              <button className="custom-nav-btn prev" data-target="#sika" data-slide="prev">
                ‹
              </button>
              <button className="custom-nav-btn next" data-target="#sika" data-slide="next">
                ›
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modals;