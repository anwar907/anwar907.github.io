import React from "react";
import dataExperience from "./data/dataExperience";
import Experience from "./workExperience";


function App() {
  // const toolsItems = techTools.map((item, index) => (
  //   <ToolsDevelopment key={index} product={item} />
  // ));

  const exp = dataExperience.map((items, index) => {
    return (
  <Experience key={index}  experience={items}/>)
  });
  return (
    <div>
      <section>
        <div className="container">
          <div className="row justify-content-left">
            {/* <div className="col-10" data-aos="fade-down">
              <div
                className="project label-content aos-init aos-animate"
                data-aos="fade-down"
              >
                <h2>My Development Tools </h2>
              </div>
              <div className="row">{toolsItems}</div>
            </div> */}
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
                I am a Software Engineer with nearly 5 years of experience and a strong passion for mobile application development. My journey in software
engineering has been driven by curiosity, problem-solving, and a desire to create applications that make an impact. Specializing in Android
and iOS, I have extensive experience in developing and deploying mobile apps that are both scalable and user-friendly. I thrive in tackling
challenges such as debugging, performance optimization, and system integration, ensuring smooth and reliable experiences for end-users.
Beyond coding, I have a strong commitment to collaboration working closely with designers, backend engineers, QA, and stakeholders to
bring ideas to life. My goal is not just to build applications, but to continuously grow as a software engineer while contributing to high quality,
innovative products in the mobile space.
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

