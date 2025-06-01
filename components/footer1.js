import React, { Fragment } from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Footer1 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div
        className={`footer1-container10 footer-section ${props.rootClassName} `}
      >
        <div className="footer-container">
          <div className="footer-top">
            <div className="footer-column">
              <div className="footer-logo">
                <img
                  alt={props.imageAlt}
                  sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
                  src="/logo-1200w.webp"
                  srcSet="/logo-1200w.webp 1200w, /logo-tablet.webp 800w, /logo-mobile.webp 480w"
                />
              </div>
              <p className="footer-description">
                {props.text1 ?? (
                  <Fragment>
                    <span className="footer1-text38">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_iQ7qjf'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </p>
              <div className="footer-social-links">
                <a
                  href="https://www.facebook.com/foodcontrolcsoport/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img
                    alt="image"
                    src="/Icons/facebook.svg"
                    className="footer1-image2 icon-link"
                  />
                </a>
                <img
                  alt="image"
                  src="/Icons/youtube.svg"
                  className="footer1-image3 icon-link"
                />
              </div>
            </div>
            <div className="footer-column">
              <h4 className="footer-title">
                {props.heading ?? (
                  <Fragment>
                    <span className="footer1-text36">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_XF38c4'),
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
                      <span className="footer1-text31">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_MSxNfS'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </p>
                <p>
                  {props.text8 ?? (
                    <Fragment>
                      <span className="footer1-text26">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_K2yt-b'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </p>
                <a
                  href="https://tel:0036703382408"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <p className="footer1-text14">
                    {props.text9 ?? (
                      <Fragment>
                        <span className="footer1-text25">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_xMxFMq'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </p>
                </a>
                <a
                  href="https://mailto:food@foodcontrol.hu"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <p className="footer1-text15">
                    {props.text91 ?? (
                      <Fragment>
                        <span className="footer1-text30">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_gZXGVR'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </p>
                </a>
              </div>
            </div>
            <div className="footer-column">
              <h4 className="footer-title">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="footer1-text27">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_DNYdMS'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h4>
              <ul className="footer-links list">
                <li className="list-item">
                  <Link href="/">
                    <a>
                      <span className="footer1-text17">
                        {props.text133 ?? (
                          <Fragment>
                            <span className="footer1-text39">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_Pcfag2'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </a>
                  </Link>
                </li>
                <li className="list-item">
                  <Link href="/about-us">
                    <a>
                      <span className="footer1-text18">
                        {props.text13 ?? (
                          <Fragment>
                            <span className="footer1-text28">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_bNNDRY'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </a>
                  </Link>
                </li>
                <li className="list-item">
                  <Link href="/">
                    <a>
                      <span className="footer1-text19">
                        {props.text14 ?? (
                          <Fragment>
                            <span className="footer1-text33">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_y_16Hf'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </a>
                  </Link>
                </li>
                <li className="list-item">
                  <Link href="/scientific-projects">
                    <a>
                      <span className="footer1-text20">
                        {props.text131 ?? (
                          <Fragment>
                            <span className="footer1-text32">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_uVCWEI'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </a>
                  </Link>
                </li>
                <li className="list-item">
                  <Link href="/news">
                    <a>
                      <span className="footer1-text21">
                        {props.text132 ?? (
                          <Fragment>
                            <span className="footer1-text37">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_HjEYQq'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="footer-copyright">
              {props.text ?? (
                <Fragment>
                  <span className="footer1-text34">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_mNusEc'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </p>
            <div className="footer-legal">
              <a
                href="https://foodcontrol.hu/adatkezelesi-tajekoztato/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <span className="footer1-text23">
                  {props.text2 ?? (
                    <Fragment>
                      <span className="footer1-text35">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_ayJbfC'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </a>
              <span className="footer1-text24">
                {props.text3 ?? (
                  <Fragment>
                    <span className="footer1-text29">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_4JUfvA'),
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
          .footer1-image2 {
            width: 36px;
            height: 36px;
            object-fit: cover;
            text-decoration: none;
          }
          .footer1-image3 {
            width: 36px;
            height: 36px;
            object-fit: cover;
          }
          .footer1-text14 {
            cursor: pointer;
            text-decoration: none;
          }
          .footer1-text15 {
            cursor: pointer;
            text-decoration: none;
          }
          .footer1-text17 {
            text-decoration: none;
          }
          .footer1-text18 {
            text-decoration: none;
          }
          .footer1-text19 {
            text-decoration: none;
          }
          .footer1-text20 {
            text-decoration: none;
          }
          .footer1-text21 {
            text-decoration: none;
          }
          .footer1-text23 {
            cursor: pointer;
            text-decoration: none;
          }
          .footer1-text24 {
            display: none;
          }
          .footer1-text25 {
            display: inline-block;
          }
          .footer1-text26 {
            display: inline-block;
          }
          .footer1-text27 {
            display: inline-block;
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
        `}
      </style>
    </>
  )
}

Footer1.defaultProps = {
  text9: undefined,
  text8: undefined,
  rootClassName: '',
  heading1: undefined,
  text13: undefined,
  text3: undefined,
  text91: undefined,
  text7: undefined,
  text131: undefined,
  text14: undefined,
  text: undefined,
  text2: undefined,
  heading: undefined,
  imageAlt: 'Food Control',
  text132: undefined,
  text1: undefined,
  text133: undefined,
  facebookLink1: '',
}

Footer1.propTypes = {
  text9: PropTypes.element,
  text8: PropTypes.element,
  rootClassName: PropTypes.string,
  heading1: PropTypes.element,
  text13: PropTypes.element,
  text3: PropTypes.element,
  text91: PropTypes.element,
  text7: PropTypes.element,
  text131: PropTypes.element,
  text14: PropTypes.element,
  text: PropTypes.element,
  text2: PropTypes.element,
  heading: PropTypes.element,
  imageAlt: PropTypes.string,
  text132: PropTypes.element,
  text1: PropTypes.element,
  text133: PropTypes.element,
  facebookLink1: PropTypes.string,
}

export default Footer1
