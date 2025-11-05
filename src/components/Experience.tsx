import React from 'react';
import { experienceData } from '../data/experienceData';
import ExperienceCard from './ExperienceCard';

const Experience: React.FC = () => {
  return (
    <section>
      <div className="container">
        <div className="project mt-5" id="experient">
          <div className="" data-aos="fade-down">
            <h2>Experience</h2>
            <small>Base on Mobile Apps</small>
          </div>
          <div className="row mb-3 mt-5">
            {experienceData.map((experience) => (
              <ExperienceCard key={experience.id} experience={experience} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;