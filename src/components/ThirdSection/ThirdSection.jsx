import React from 'react';
import './ThirdSection.scss';
import wrangler from '../../assets/wrangler.png';

function ThirdSection() {
    return (
      <section className="third-section">
        <div className="third-section-container">
          <div className="third-section-container-image">
            <img src={wrangler} alt="" className="image" />
          </div>
                <div className="third-section-container-text">
                    <h1 className="third-section-container-heading">Get The Best Experience With Our Amazing Deals</h1>
                    <p className="third-section-container-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, recusandae beatae dolore pariatur, a molestias soluta laborum ex obcaecati alias, blanditiis vel officia repellat itaque. Aspernatur excepturi porro a, minima laboriosam fuga modi at quod harum velit aperiam ducimus sed nisi quasi quam. Ab unde totam cumque saepe nihil! Aliquam enim quam similique </p>
          </div>
        </div>
      </section>
    );
}

export default ThirdSection
