import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Team = (props) => {
  const translate = useTranslations()
  return (
    <>
      <section
        className={`team-container10 team-section ${props.rootClassName} `}
      >
        <div className="container">
          <h2 className="section-title">
            {props.heading ?? (
              <Fragment>
                <span className="team-text52">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_1uiHd8'),
                    }}
                  ></span>
                </span>
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
                      <span className="team-text40">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_Ru2AxM'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </h3>
                <p className="member-position">
                  {props.text ?? (
                    <Fragment>
                      <span className="team-text46">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_MDvcv_'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </p>
                <div className="divider"></div>
                <div className="member-details">
                  <h4>
                    {props.heading3 ?? (
                      <Fragment>
                        <span className="team-text53">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_3uE2Fo'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </h4>
                  <p>
                    {props.text2 ?? (
                      <Fragment>
                        <span className="team-text50">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_N5M2Ol'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </p>
                  <h4>
                    {props.heading4 ?? (
                      <Fragment>
                        <span className="team-text33">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_04UJU3'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </h4>
                  <p>
                    {props.text3 ?? (
                      <Fragment>
                        <span className="team-text38">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_8iG5ro'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </p>
                </div>
                <div className="contact-links">
                  <h4>
                    {props.heading5 ?? (
                      <Fragment>
                        <span className="team-text41">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_iQPgZT'),
                            }}
                          ></span>
                        </span>
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
                                className="team-text32 email icon-link"
                              >
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: translate.raw('text_cd_DSG'),
                                  }}
                                ></span>
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
                                className="team-text34 facebook icon-link"
                              >
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: translate.raw('text_NZKJuI'),
                                  }}
                                ></span>
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
                                className="team-text36 twitter icon-link"
                              >
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: translate.raw('text_ILbKFm'),
                                  }}
                                ></span>
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
                                className="team-text48 linkedin icon-link"
                              >
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: translate.raw('text_6V2tVl'),
                                  }}
                                ></span>
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
                      <span className="team-text35">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_50XQR1'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </h3>
                <p className="member-position">
                  {props.text1 ?? (
                    <Fragment>
                      <span className="team-text39">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_iu7D9W'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </p>
                <div className="divider"></div>
                <div className="member-details">
                  <h4>
                    {props.heading6 ?? (
                      <Fragment>
                        <span className="team-text42">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_h2RX-m'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </h4>
                  <p>
                    {props.text4 ?? (
                      <Fragment>
                        <span className="team-text43">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_EtneGl'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </p>
                  <h4>
                    {props.heading7 ?? (
                      <Fragment>
                        <span className="team-text37">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_Z1dHP8'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </h4>
                  <p>
                    {props.text5 ?? (
                      <Fragment>
                        <span className="team-text47">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_6--i0z'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </p>
                </div>
                <div className="contact-links">
                  <h4>
                    {props.heading8 ?? (
                      <Fragment>
                        <span className="team-text51">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_Ydb6iu'),
                            }}
                          ></span>
                        </span>
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
                                className="team-text44 email icon-link"
                              >
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: translate.raw('text_FH-hga'),
                                  }}
                                ></span>
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
                                className="team-text45 facebook icon-link"
                              >
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: translate.raw('text_XhIocw'),
                                  }}
                                ></span>
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
                                className="team-text49 twitter icon-link"
                              >
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: translate.raw('text_-V5DRq'),
                                  }}
                                ></span>
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
            display: inline-block;
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
            display: inline-block;
          }
          .team-text48 {
            display: inline-block;
          }
          .team-text49 {
            display: inline-block;
          }
          .team-text50 {
            display: inline-block;
          }
          .team-text51 {
            display: inline-block;
          }
          .team-text52 {
            display: inline-block;
          }
          .team-text53 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

Team.defaultProps = {
  text6: undefined,
  heading4: undefined,
  imageAlt: 'Prof. h.c. Dr. Andras Bittsanszky PhD',
  text7: undefined,
  heading2: undefined,
  imageAlt1: 'Dr. Andras Jozsef Toth, PhD',
  imageSrc1: 'https://example.com/images/member2.jpg',
  text8: undefined,
  heading7: undefined,
  text3: undefined,
  text1: undefined,
  heading1: undefined,
  heading5: undefined,
  rootClassName: '',
  heading6: undefined,
  text4: undefined,
  text10: undefined,
  text11: undefined,
  imageSrc: 'https://example.com/images/member1.jpg',
  text: undefined,
  text5: undefined,
  text9: undefined,
  text12: undefined,
  text2: undefined,
  heading8: undefined,
  heading: undefined,
  heading3: undefined,
}

Team.propTypes = {
  text6: PropTypes.element,
  heading4: PropTypes.element,
  imageAlt: PropTypes.string,
  text7: PropTypes.element,
  heading2: PropTypes.element,
  imageAlt1: PropTypes.string,
  imageSrc1: PropTypes.string,
  text8: PropTypes.element,
  heading7: PropTypes.element,
  text3: PropTypes.element,
  text1: PropTypes.element,
  heading1: PropTypes.element,
  heading5: PropTypes.element,
  rootClassName: PropTypes.string,
  heading6: PropTypes.element,
  text4: PropTypes.element,
  text10: PropTypes.element,
  text11: PropTypes.element,
  imageSrc: PropTypes.string,
  text: PropTypes.element,
  text5: PropTypes.element,
  text9: PropTypes.element,
  text12: PropTypes.element,
  text2: PropTypes.element,
  heading8: PropTypes.element,
  heading: PropTypes.element,
  heading3: PropTypes.element,
}

export default Team
