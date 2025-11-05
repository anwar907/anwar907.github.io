import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="jumbotron jumbotron-fluid" id="home">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="profile-text" data-aos="fade-down">
              <h5 className="display-4">Hello..! I'm Anwar</h5>
              <p>🧠 Knowledge is my operating system</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;