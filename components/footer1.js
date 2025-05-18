import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Footer1 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="footer1-container10 footer">
        <div className="footer-section">
          <div className="footer-container">
            <div className="footer-top">
              <div className="footer-column">
                <div className="footer-logo">
                  <img src={props.imageSrc1} alt={props.imageAlt1} />
                </div>
                <p className="footer-description">
                  {props.text17 ?? (
                    <Fragment>
                      <span className="footer1-text32">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_3hfM89'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </p>
                <div className="footer-social-links">
                  <a href={props.textUrl1}>
                    <span aria-label="Facebook" className="footer-social-link">
                      <span className="footer1-text12 fab fa-facebook-f"></span>
                    </span>
                  </a>
                  <a href="#">
                    <span aria-label="Youtube" className="footer-social-link">
                      <span className="footer1-text14 fab fa-youtube"></span>
                    </span>
                  </a>
                  <a href="#">
                    <span aria-label="LinkedIn" className="footer-social-link">
                      <span className="footer1-text16 fab fa-linkedin-in"></span>
                    </span>
                  </a>
                </div>
              </div>
              <div className="footer-column">
                <h4 className="footer-title">
                  {props.heading2 ?? (
                    <Fragment>
                      <span className="footer1-text33">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text__aZ75v'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </h4>
                <div className="footer-contact">
                  <p>
                    {props.text20 ?? (
                      <Fragment>
                        <span className="footer1-text37">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_E_e-uE'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </p>
                  <p>
                    {props.text21 ?? (
                      <Fragment>
                        <span className="footer1-text38">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_P2kIAv'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </p>
                  <p>
                    {props.text22 ?? (
                      <Fragment>
                        <span className="footer1-text39">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_Vwa6VG'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </p>
                  <p>
                    <a href="mailto:food@foodcontrol.hu?subject=">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_S6faiE'),
                        }}
                      ></span>
                    </a>
                  </p>
                </div>
              </div>
              <div className="footer-column">
                <h4 className="footer-title">
                  {props.heading3 ?? (
                    <Fragment>
                      <span className="footer1-text34">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_vLjmER'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </h4>
                <ul className="list footer-links">
                  <li className="list-item">
                    <span>
                      {props.text23 ?? (
                        <Fragment>
                          <span className="footer1-text40">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_7JuPR8'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </li>
                  <li className="list-item">
                    <span>
                      {props.text24 ?? (
                        <Fragment>
                          <span className="footer1-text41">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_YEQQmt'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </li>
                  <li className="list-item">
                    <span>
                      {props.text25 ?? (
                        <Fragment>
                          <span className="footer1-text42">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_PrqG-D'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </li>
                  <li className="list-item">
                    <span>
                      {props.text26 ?? (
                        <Fragment>
                          <span className="footer1-text43">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_osl2yJ'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </li>
                  <li className="list-item">
                    <span>
                      {props.text27 ?? (
                        <Fragment>
                          <span className="footer1-text44">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_wesChc'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-bottom">
              <p className="footer-copyright">
                {props.text16 ?? (
                  <Fragment>
                    <span className="footer1-text31">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_OYaMSh'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </p>
              <div className="footer-legal">
                <span>
                  {props.text18 ?? (
                    <Fragment>
                      <span className="footer1-text35">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_MOc2iu'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
                <span>
                  {props.text19 ?? (
                    <Fragment>
                      <span className="footer1-text36">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_xDcNEG'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .footer1-container10 {
            position: relative;
          }
          .footer1-text12 {
            font-style: italic;
          }
          .footer1-text14 {
            font-style: italic;
          }
          .footer1-text16 {
            font-style: italic;
          }
          .footer1-text31 {
            display: inline-block;
          }
          .footer1-text32 {
            display: inline-block;
          }
          .footer1-text33 {
            display: inline-block;
          }
          .footer1-text34 {
            display: inline-block;
          }
          .footer1-text35 {
            display: inline-block;
          }
          .footer1-text36 {
            display: inline-block;
          }
          .footer1-text37 {
            display: inline-block;
          }
          .footer1-text38 {
            display: inline-block;
          }
          .footer1-text39 {
            display: inline-block;
          }
          .footer1-text40 {
            display: inline-block;
          }
          .footer1-text41 {
            display: inline-block;
          }
          .footer1-text42 {
            display: inline-block;
          }
          .footer1-text43 {
            display: inline-block;
          }
          .footer1-text44 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

Footer1.defaultProps = {
  text16: undefined,
  text17: undefined,
  heading2: undefined,
  heading3: undefined,
  text18: undefined,
  text19: undefined,
  imageSrc1: 'assets/logo-white.png',
  imageAlt1: 'Food Control',
  textUrl1: 'https://www.facebook.com/foodcontrolcsoport/',
  text20: undefined,
  text21: undefined,
  text22: undefined,
  text23: undefined,
  text24: undefined,
  text25: undefined,
  text26: undefined,
  text27: undefined,
}

Footer1.propTypes = {
  text16: PropTypes.element,
  text17: PropTypes.element,
  heading2: PropTypes.element,
  heading3: PropTypes.element,
  text18: PropTypes.element,
  text19: PropTypes.element,
  imageSrc1: PropTypes.string,
  imageAlt1: PropTypes.string,
  textUrl1: PropTypes.string,
  text20: PropTypes.element,
  text21: PropTypes.element,
  text22: PropTypes.element,
  text23: PropTypes.element,
  text24: PropTypes.element,
  text25: PropTypes.element,
  text26: PropTypes.element,
  text27: PropTypes.element,
}

export default Footer1
