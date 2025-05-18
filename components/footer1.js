import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Footer1 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="footer1-container10 footer">
        <div className="footer-container">
          <div className="footer-top">
            <div className="footer-column">
              <div className="footer-logo">
                <img alt={props.imageAlt} src={props.imageSrc} />
              </div>
              <p className="footer-description">
                {props.text1 ?? (
                  <Fragment>
                    <span className="footer1-text28">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_1Tw4Ma'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </p>
              <div className="social-links">
                <a href={props.textUrl}>
                  <span aria-label="Facebook" className="social-link">
                    {props.text4 ?? (
                      <Fragment>
                        <a href="https://www.facebook.com/foodcontrolcsoport/">
                          <span
                            aria-label="Facebook"
                            className="footer1-text30 social-link"
                          >
                            <span className="footer1-text31 fab fa-facebook-f"></span>
                          </span>
                        </a>
                      </Fragment>
                    )}
                  </span>
                </a>
                <a href="#">
                  <span aria-label="Youtube" className="social-link">
                    {props.text5 ?? (
                      <Fragment>
                        <a href="#">
                          <span
                            aria-label="Youtube"
                            className="footer1-text41 social-link"
                          >
                            <span className="footer1-text42 fa-youtube fab"></span>
                          </span>
                        </a>
                      </Fragment>
                    )}
                  </span>
                </a>
                <a href="#">
                  <span aria-label="LinkedIn" className="social-link">
                    {props.text6 ?? (
                      <Fragment>
                        <a href="#">
                          <span
                            aria-label="LinkedIn"
                            className="footer1-text35 social-link"
                          >
                            <span className="footer1-text36 fab fa-linkedin-in"></span>
                          </span>
                        </a>
                      </Fragment>
                    )}
                  </span>
                </a>
              </div>
            </div>
            <div className="footer-column">
              <h4 className="footer-title">
                {props.heading ?? (
                  <Fragment>
                    <span className="footer1-text33">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_nFlMkz'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h4>
              <div className="footer-contact">
                <p>
                  {props.text7 ?? (
                    <Fragment>
                      <span className="footer1-text48">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_-xZU10'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </p>
                <p>
                  {props.text8 ?? (
                    <Fragment>
                      <span className="footer1-text32">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_NHUZp0'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </p>
                <p>
                  {props.text9 ?? (
                    <Fragment>
                      <span className="footer1-text47">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_J9AMo8'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </p>
                <p>
                  {props.text10 ?? (
                    <Fragment>
                      <span className="footer1-text37">
                        <a href="mailto:food@foodcontrol.hu?subject=">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_CdYWEI'),
                            }}
                          ></span>
                        </a>
                      </span>
                    </Fragment>
                  )}
                </p>
              </div>
            </div>
            <div className="footer-column">
              <h4 className="footer-title">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="footer1-text43">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_SHjbc3'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h4>
              <ul className="footer-links list">
                <li className="list-item">
                  <span>
                    {props.text11 ?? (
                      <Fragment>
                        <span className="footer1-text38">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_Gy8KRz'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </li>
                <li className="list-item">
                  <span>
                    {props.text12 ?? (
                      <Fragment>
                        <span className="footer1-text29">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_M66JIY'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </li>
                <li className="list-item">
                  <span>
                    {props.text13 ?? (
                      <Fragment>
                        <span className="footer1-text34">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_1ah5qx'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </li>
                <li className="list-item">
                  <span>
                    {props.text14 ?? (
                      <Fragment>
                        <span className="footer1-text46">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_RsmoEy'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </li>
                <li className="list-item">
                  <span>
                    {props.text15 ?? (
                      <Fragment>
                        <span className="footer1-text45">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_1dePJd'),
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
            <p className="copyright">
              {props.text ?? (
                <Fragment>
                  <span className="footer1-text40">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_lIdgls'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </p>
            <div className="footer-legal">
              <span>
                {props.text2 ?? (
                  <Fragment>
                    <span className="footer1-text39">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_QZC7iw'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
              <span>
                {props.text3 ?? (
                  <Fragment>
                    <span className="footer1-text44">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text__PGZcT'),
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
      <style jsx>
        {`
          .footer1-container10 {
            position: relative;
          }
          .footer1-text28 {
            display: inline-block;
          }
          .footer1-text29 {
            display: inline-block;
          }
          .footer1-text30 {
            display: inline-block;
          }
          .footer1-text31 {
            font-style: italic;
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
            font-style: italic;
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
            font-style: italic;
          }
          .footer1-text43 {
            display: inline-block;
          }
          .footer1-text44 {
            display: inline-block;
          }
          .footer1-text45 {
            display: inline-block;
          }
          .footer1-text46 {
            display: inline-block;
          }
          .footer1-text47 {
            display: inline-block;
          }
          .footer1-text48 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

Footer1.defaultProps = {
  text1: undefined,
  imageSrc: 'assets/logo-white.png',
  text12: undefined,
  text4: undefined,
  textUrl: 'https://www.facebook.com/foodcontrolcsoport/',
  text8: undefined,
  heading: undefined,
  text13: undefined,
  text6: undefined,
  text10: undefined,
  text11: undefined,
  text2: undefined,
  text: undefined,
  imageAlt: 'Food Control',
  text5: undefined,
  heading1: undefined,
  text3: undefined,
  text15: undefined,
  text14: undefined,
  text9: undefined,
  text7: undefined,
}

Footer1.propTypes = {
  text1: PropTypes.element,
  imageSrc: PropTypes.string,
  text12: PropTypes.element,
  text4: PropTypes.element,
  textUrl: PropTypes.string,
  text8: PropTypes.element,
  heading: PropTypes.element,
  text13: PropTypes.element,
  text6: PropTypes.element,
  text10: PropTypes.element,
  text11: PropTypes.element,
  text2: PropTypes.element,
  text: PropTypes.element,
  imageAlt: PropTypes.string,
  text5: PropTypes.element,
  heading1: PropTypes.element,
  text3: PropTypes.element,
  text15: PropTypes.element,
  text14: PropTypes.element,
  text9: PropTypes.element,
  text7: PropTypes.element,
}

export default Footer1
