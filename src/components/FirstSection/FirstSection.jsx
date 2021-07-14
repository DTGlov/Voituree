import { faCalendarAlt, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './FirstSection.scss';

function FirstSection() {
    return (
        <section className="section">
            <div className="section-container">
                <div className="form-section">
                    <div className="form-section-date">
                        <FontAwesomeIcon icon={faCalendarAlt} className="form-section-item"/>
                        <p>Pick-up Date</p>
                        <FontAwesomeIcon icon={faCaretDown}/>
                    </div>
                    <div className="form-section-date">
                        <FontAwesomeIcon icon={faCalendarAlt} className="form-section-item" />
                        <p>Return Date</p>
                        <FontAwesomeIcon icon={faCaretDown}/>
                    </div>
                    <div>
                        <div className="form-section-button">
                            <p>Book</p>
                            <p>Ride</p>
                        </div>
                    </div>
                </div>
            </div>
       </section>
    )
}

export default FirstSection
