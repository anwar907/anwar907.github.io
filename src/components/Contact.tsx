import React from 'react';
import telephoneIcon from '../assets/img/telephone.svg';
import gmailIcon from '../assets/img/gmail.svg';
import telegramIcon from '../assets/img/telegram.svg';

const Contact: React.FC = () => {
  return (
    <section>
      <div className="container">
        <div className="row justify-content-center" id="conntact">
          <div className="col-10 info-panel-bottom">
            <div className="row">
              <div className="col-lg" data-aos="fade-down">
                <img src={telephoneIcon} alt="phone" className="float-left" />
                <h4>Phone(wa)</h4>
                <p>085238718978</p>
              </div>
              <div className="col-lg" data-aos="fade-down">
                <img src={gmailIcon} alt="email" className="float-left" />
                <h4>email</h4>
                <p>anwarend907@gmail.com</p>
              </div>
              <div className="col-lg" data-aos="fade-down">
                <img src={telegramIcon} alt="telegram" className="float-left" />
                <h4>Telegram</h4>
                <p>@Tukangketiq</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;