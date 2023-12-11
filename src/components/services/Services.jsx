import React, { useState } from 'react';
import "./services.css";

const Services = () => {
  const [toggleState, setToggleState] = useState(0)

  const toggleTab = (index) => {
    setToggleState(index);
  }

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I Offer</span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">Product<br/>Designer</h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(1)}>
            View More
            <i className="ui uil-arrow-right services__button-icon"></i>
          </span>

          <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

              <h3 className="services__modal-title">Product Designer</h3>
              <p className="services__modal-description">
                Providing software solutions for more than 4 years. Delivering queality work for n! numbers of projects. 
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>

                  <p className="services__modal-info">I Develop User Interfaces.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>

                  <p className="services__modal-info">I can manage fontend and backend all together.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>

                  <p className="services__modal-info">I can Work with APIs.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>

                  <p className="services__modal-info">I can work with Python projects.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>

                  <p className="services__modal-info">I can work with Jenkins CI/CD Pipelines.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title">UI/UX<br/>Designer</h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(2)}>
            View More
            <i className="ui uil-arrow-right services__button-icon"></i>
          </span>

          <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

              <h3 className="services__modal-title">UI/UX Designer</h3>
              <p className="services__modal-description">
                Providing software solutions for more than 4 years. Delivering queality work for n! numbers of projects.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>

                  <p className="services__modal-info">I Develop User Interfaces.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>

                  <p className="services__modal-info">I can manage fontend and backend all together.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>

                  <p className="services__modal-info">I can Work with APIs.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>

                  <p className="services__modal-info">I can work with Python projects.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>

                  <p className="services__modal-info">I can work with Jenkins CI/CD Pipelines.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-edit services__icon"></i>
            <h3 className="services__title">Visual<br/>Designer</h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(3)}>
            View More
            <i className="ui uil-arrow-right services__button-icon"></i>
          </span>

          <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

              <h3 className="services__modal-title">Visual Designer</h3>
              <p className="services__modal-description">
                Providing software solutions for more than 4 years. Delivering queality work for n! numbers of projects.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>

                  <p className="services__modal-info">I Develop User Interfaces.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>

                  <p className="services__modal-info">I can manage fontend and backend all together.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>

                  <p className="services__modal-info">I can Work with APIs.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>

                  <p className="services__modal-info">I can work with Python projects.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>

                  <p className="services__modal-info">I can work with Jenkins CI/CD Pipelines.</p>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Services