import React from 'react';
import { ExperienceData } from '../types';

interface ExperienceCardProps {
  experience: ExperienceData;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <div className="col-md-4" data-aos="fade-down">
      <div className="img-project mb-4">
        <p className="row justify-content-center" style={{ fontWeight: 700 }}>
          {experience.title}
        </p>
        <img
          src={experience.image}
          alt={experience.id}
          className="image"
        />
        <div className="overlay">
          <div className="text-display">
            <p>{experience.title}</p>
            <p className="small">{experience.description}</p>
            <p className="small">
              <b>Tech Stack:</b> {experience.tools}
            </p>
            <button
              type="button"
              className="btn btn-lg tombol-ungu"
              data-toggle="modal"
              data-target={`.${experience.id}`}
            >
              Preview
            </button>
            {experience.url && (
              <a 
                href={experience.url} 
                className="btn btn-lg tombol-site ml-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Site
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;