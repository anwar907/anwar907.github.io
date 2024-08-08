import React from "react";
function Experience(props) {
  return (
    <div className="col-md-4" data-aos="fade-down">
      <div className="img-project mb-4">
        <p className="row justify-content-center " style={{ fontweight: 700 }}>
          {props.experience.title}
        </p>
        <img
          src={props.experience.image}
          alt={props.experience.id}
          className="image"
        />
        <div className="overlay">
          <div className="text-display">
            <p>{props.experience.title}</p>
            <p className="small">{props.experience.description}</p>
            <p className="small">
              <b>Tech Stack:</b> {props.experience.tools}
            </p>
            <button
              type="button"
              className="btn btn-lg tombol-ungu"
              data-toggle="modal"
              data-target={"." + props.experience.id}
            >
              Preview
            </button>
            <a href="" className="btn btn-lg tombol-site ml-3">
              Visit Site
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience