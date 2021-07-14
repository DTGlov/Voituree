import React from 'react';
import './TopCars.scss';


import { carData } from '../cars/carData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH, faFillDrip, faTachometerAlt } from '@fortawesome/free-solid-svg-icons';

function TopCars() {
   
    return (
      <section className="topcars-section">
        <div className="topcars-container">
          <h1 className="topcars-container-heading">Explore Our Top Deals</h1>
          <div className="topcars-card">
            {carData.map((car) => (
              <div className="topcars-card-item" key={car.id}>
                <img src={car.img} alt="" className="car-image" />
                <h1 className="car-heading">{car.name}</h1>
                <div className="car-info">
                  <p className="car-rate">
                    {" "}
                    <span className="rate-color">${ car.day}/Day </span>/ ${car.month} month
                  </p>
                  <div className="car-border"></div>
                  <div className="car-details">
                    <div className="car-details-item">
                      <FontAwesomeIcon
                        icon={faTachometerAlt}
                        className="icon-color"
                      />
                      <p>4k</p>
                    </div>
                    <div className="car-details-item">
                      <FontAwesomeIcon
                        icon={faEllipsisH}
                        className="icon-color"
                      />
                      <p>Auto</p>
                    </div>
                    <div className="car-details-item">
                      <FontAwesomeIcon
                        icon={faFillDrip}
                        className="icon-color"
                      />
                      <p>{ car.fuel}</p>
                    </div>
                  </div>
                </div>

                <div className="topcar-button">
                  <p>Rent Now</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
}

export default TopCars
