import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Team = (props) => {
  return (
    <>
      <section
        className={`team-container10 team-section ${props.rootClassName} `}
      >
        <div className="container">
          <h2 className="section-title">
            {props.heading ?? (
              <Fragment>
                <span className="team-text60">The Team</span>
              </Fragment>
            )}
          </h2>
          <div className="team-grid">
            <div className="team-card">
              <div className="member-image">
                <img alt={props.imageAlt} src={props.imageSrc} />
              </div>
              <div className="member-info">
                <h3 className="member-name">
                  {props.heading1 ?? (
                    <Fragment>
                      <span className="team-text32">
                        Prof. h.c. Dr. Andras Bittsanszky PhD
                      </span>
                    </Fragment>
                  )}
                </h3>
                <p className="member-position">
                  {props.text ?? (
                    <Fragment>
                      <span className="team-text38">
                        {' '}
                        Research director, honorary university professor
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </Fragment>
                  )}
                </p>
                <div className="divider"></div>
                <div className="member-details">
                  <h4>
                    {props.heading3 ?? (
                      <Fragment>
                        <span className="team-text42">Qualification:</span>
                      </Fragment>
                    )}
                  </h4>
                  <p>
                    {props.text2 ?? (
                      <Fragment>
                        <span className="team-text59">
                          {' '}
                          Agricultural engineer, doctor of plant and
                          horticulture sciences
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                      </Fragment>
                    )}
                  </p>
                  <h4>
                    {props.heading4 ?? (
                      <Fragment>
                        <span className="team-text35">Introduction:</span>
                      </Fragment>
                    )}
                  </h4>
                  <p>
                    {props.text3 ?? (
                      <Fragment>
                        <span className="team-text43">
                          {' '}
                          I started my research activity during my university
                          years. I have been researching the genetic and
                          physiological responses of plants to various stresses.
                          My current area of interest is food microbiology and
                          food hygiene. My research focuses on the agricultural
                          production and food processing, the primary goal is to
                          bring safe and good quality food to our table.
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                      </Fragment>
                    )}
                  </p>
                </div>
                <div className="contact-links">
                  <h4>
                    {props.heading5 ?? (
                      <Fragment>
                        <span className="team-text40">Contact:</span>
                      </Fragment>
                    )}
                  </h4>
                  <div className="social-icons">
                    <a href="#">
                      <span aria-label="Email" className="email icon-link">
                        {props.text6 ?? (
                          <Fragment>
                            <a href="#">
                              <span
                                aria-label="Email"
                                className="team-text50 email icon-link"
                              >
                                <span className="team-text51 fas fa-envelope"></span>
                              </span>
                            </a>
                          </Fragment>
                        )}
                      </span>
                    </a>
                    <a href="#">
                      <span
                        aria-label="Facebook"
                        className="facebook icon-link"
                      >
                        {props.text7 ?? (
                          <Fragment>
                            <a href="#">
                              <span
                                aria-label="Facebook"
                                className="team-text33 facebook icon-link"
                              >
                                <span className="team-text34 fab fa-facebook-f"></span>
                              </span>
                            </a>
                          </Fragment>
                        )}
                      </span>
                    </a>
                    <a href="#">
                      <span aria-label="Twitter" className="twitter icon-link">
                        {props.text8 ?? (
                          <Fragment>
                            <a href="#">
                              <span
                                aria-label="Twitter"
                                className="team-text48 twitter icon-link"
                              >
                                <span className="team-text49 fa-twitter fab"></span>
                              </span>
                            </a>
                          </Fragment>
                        )}
                      </span>
                    </a>
                    <a href="#">
                      <span
                        aria-label="LinkedIn"
                        className="linkedin icon-link"
                      >
                        {props.text9 ?? (
                          <Fragment>
                            <a href="#">
                              <span
                                aria-label="LinkedIn"
                                className="team-text55 linkedin icon-link"
                              >
                                <span className="team-text56 fab fa-linkedin-in"></span>
                              </span>
                            </a>
                          </Fragment>
                        )}
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="team-card">
              <div className="member-image">
                <img alt={props.imageAlt1} src={props.imageSrc1} />
              </div>
              <div className="member-info">
                <h3 className="member-name">
                  {props.heading2 ?? (
                    <Fragment>
                      <span className="team-text52">
                        Dr. Andras Jozsef Toth, PhD
                      </span>
                    </Fragment>
                  )}
                </h3>
                <p className="member-position">
                  {props.text1 ?? (
                    <Fragment>
                      <span className="team-text44">Researcher</span>
                    </Fragment>
                  )}
                </p>
                <div className="divider"></div>
                <div className="member-details">
                  <h4>
                    {props.heading6 ?? (
                      <Fragment>
                        <span className="team-text36">Qualification:</span>
                      </Fragment>
                    )}
                  </h4>
                  <p>
                    {props.text4 ?? (
                      <Fragment>
                        <span className="team-text41">
                          {' '}
                          MBA - Master of Business Administration, doctor of
                          management and business administration
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                      </Fragment>
                    )}
                  </p>
                  <h4>
                    {props.heading7 ?? (
                      <Fragment>
                        <span className="team-text37">Introduction:</span>
                      </Fragment>
                    )}
                  </h4>
                  <p>
                    {props.text5 ?? (
                      <Fragment>
                        <span className="team-text39">
                          {' '}
                          I graduated from Pannon University of Veszprém with an
                          MBA in economics, then obtained PhD at the Doctoral
                          School of Management and Business Administration at
                          Szent István University. I have more than 15 years of
                          experience in the hospitality / food industry, where I
                          am part of the processes that affect the sector on
                          every day. My research interests are food safety
                          management, food security and the applicability of
                          rapid microbiological methods in food product
                          development.
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                      </Fragment>
                    )}
                  </p>
                </div>
                <div className="contact-links">
                  <h4>
                    {props.heading8 ?? (
                      <Fragment>
                        <span className="team-text45">Contact:</span>
                      </Fragment>
                    )}
                  </h4>
                  <div className="social-icons">
                    <a href="#">
                      <span aria-label="Email" className="email icon-link">
                        {props.text10 ?? (
                          <Fragment>
                            <a href="#">
                              <span
                                aria-label="Email"
                                className="team-text57 email icon-link"
                              >
                                <span className="team-text58 fas fa-envelope"></span>
                              </span>
                            </a>
                          </Fragment>
                        )}
                      </span>
                    </a>
                    <a href="#">
                      <span
                        aria-label="Facebook"
                        className="facebook icon-link"
                      >
                        {props.text11 ?? (
                          <Fragment>
                            <a href="#">
                              <span
                                aria-label="Facebook"
                                className="team-text46 facebook icon-link"
                              >
                                <span className="team-text47 fab fa-facebook-f"></span>
                              </span>
                            </a>
                          </Fragment>
                        )}
                      </span>
                    </a>
                    <a href="#">
                      <span aria-label="Twitter" className="twitter icon-link">
                        {props.text12 ?? (
                          <Fragment>
                            <a href="#">
                              <span
                                aria-label="Twitter"
                                className="team-text53 twitter icon-link"
                              >
                                <span className="team-text54 fa-twitter fab"></span>
                              </span>
                            </a>
                          </Fragment>
                        )}
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style jsx>
        {`
          .team-container10 {
            position: relative;
          }
          .team-text32 {
            display: inline-block;
          }
          .team-text33 {
            display: inline-block;
          }
          .team-text34 {
            font-style: italic;
          }
          .team-text35 {
            display: inline-block;
          }
          .team-text36 {
            display: inline-block;
          }
          .team-text37 {
            display: inline-block;
          }
          .team-text38 {
            display: inline-block;
          }
          .team-text39 {
            display: inline-block;
          }
          .team-text40 {
            display: inline-block;
          }
          .team-text41 {
            display: inline-block;
          }
          .team-text42 {
            display: inline-block;
          }
          .team-text43 {
            display: inline-block;
          }
          .team-text44 {
            display: inline-block;
          }
          .team-text45 {
            display: inline-block;
          }
          .team-text46 {
            display: inline-block;
          }
          .team-text47 {
            font-style: italic;
          }
          .team-text48 {
            display: inline-block;
          }
          .team-text49 {
            font-style: italic;
          }
          .team-text50 {
            display: inline-block;
          }
          .team-text51 {
            font-style: italic;
          }
          .team-text52 {
            display: inline-block;
          }
          .team-text53 {
            display: inline-block;
          }
          .team-text54 {
            font-style: italic;
          }
          .team-text55 {
            display: inline-block;
          }
          .team-text56 {
            font-style: italic;
          }
          .team-text57 {
            display: inline-block;
          }
          .team-text58 {
            font-style: italic;
          }
          .team-text59 {
            display: inline-block;
          }
          .team-text60 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

Team.defaultProps = {
  imageSrc: 'https://example.com/images/member1.jpg',
  heading1: undefined,
  text7: undefined,
  heading4: undefined,
  heading6: undefined,
  heading7: undefined,
  text: undefined,
  text5: undefined,
  heading5: undefined,
  text4: undefined,
  heading3: undefined,
  imageAlt: 'Prof. h.c. Dr. Andras Bittsanszky PhD',
  text3: undefined,
  text1: undefined,
  heading8: undefined,
  text11: undefined,
  imageAlt1: 'Dr. Andras Jozsef Toth, PhD',
  text8: undefined,
  text6: undefined,
  imageSrc1: 'https://example.com/images/member2.jpg',
  heading2: undefined,
  text12: undefined,
  text9: undefined,
  text10: undefined,
  text2: undefined,
  rootClassName: '',
  heading: undefined,
}

Team.propTypes = {
  imageSrc: PropTypes.string,
  heading1: PropTypes.element,
  text7: PropTypes.element,
  heading4: PropTypes.element,
  heading6: PropTypes.element,
  heading7: PropTypes.element,
  text: PropTypes.element,
  text5: PropTypes.element,
  heading5: PropTypes.element,
  text4: PropTypes.element,
  heading3: PropTypes.element,
  imageAlt: PropTypes.string,
  text3: PropTypes.element,
  text1: PropTypes.element,
  heading8: PropTypes.element,
  text11: PropTypes.element,
  imageAlt1: PropTypes.string,
  text8: PropTypes.element,
  text6: PropTypes.element,
  imageSrc1: PropTypes.string,
  heading2: PropTypes.element,
  text12: PropTypes.element,
  text9: PropTypes.element,
  text10: PropTypes.element,
  text2: PropTypes.element,
  rootClassName: PropTypes.string,
  heading: PropTypes.element,
}

export default Team
