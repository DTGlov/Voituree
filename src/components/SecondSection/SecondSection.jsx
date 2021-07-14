import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './SecondSection.scss';

import { cardData } from './CardData';

function SecondSection() {
    return (
      <div className="second-section">
        <div className="second-section-container">
          <div className="second-section-container-heading">
            <h1>Our Booking Steps</h1>
          </div>
          <div className="card-section">
            {cardData.map((data) => (
              <div className="card-container" key={data.id}>
                <div className="card-container-icon">
                  <FontAwesomeIcon icon={data.icon} />
                </div>
                <div className="card-container-text">
                  <h1 className="card-container-text-heading">
                   {data.heading}
                  </h1>
                  <p className="card-container-text-para">
                    {data.paragraph}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
}

export default SecondSection
