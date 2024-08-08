import React from "react";
import techTools from "./assets/assets";
import dataExperience from "./data/dataExperience";
import ToolsDevelopment from "./toolsDevelopment";
import Experience from "./workExperience";


function App() {
  const toolsItems = techTools.map((item, index) => (
    <ToolsDevelopment key={index} product={item} />
  ));

  const exp = dataExperience.map((items, index) => {
    return (
  <Experience key={index}  experience={items}/>)
  });
  return (
    <div>
      <section>
        <div className="container">
          <div className="row justify-content-left">
            <div className="col-10" data-aos="fade-down">
              <div
                className="project label-content aos-init aos-animate"
                data-aos="fade-down"
              >
                <h2>My Development Tools </h2>
              </div>
              <div className="row">{toolsItems}</div>
            </div>
          </div>
          <div className="row workingspace">
            <div className="col-sm-5 img-fluid" data-aos="fade-down">
              <img
                src="src/assets/img/user.png"
                alt="workingspace"
                className="img-fluid"
              />
            </div>
            <div className="col-sm-7 name">
              <div
                className="text-content"
                data-aos="zoom-in-up"
                data-aos-offset="200"
              >
                <h3 className="text-name">
                  <b>My Name Is</b> Anwar Sapi'i
                </h3>
                <p className="deskripsi">
                  I am a mobile developer with experience as a mobile developer
                  in the technology industry using the latest technologies. I am
                  experienced in designing, developing, and deploying mobile
                  applications for various platforms, such as Android and iOS. I
                  am adept at analysing and debugging issues that may arise
                  during the development process to ensure the smooth running of
                  mobile applications. My adaptability, and commitment to
                  innovation make me a valuable asset in dynamic, collaborative
                  environments. I'm eager to contribute my technical expertise
                  and problem solving skills to the success of future
                  endeavours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="project mt-5" id="experient">
            <div className="" data-aos="fade-down">
              <h2>Experience</h2>
              <small>Base on Mobile Apps</small>
            </div>
            <div className="row mb-3 mt-5">
              {exp}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App

