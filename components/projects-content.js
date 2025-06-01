import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const ProjectsContent = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="projects-content-container10">
        <section className="projects-intro">
          <div className="projects-intro-container">
            <div className="projects-intro-content">
              <p>
                {props.text66 ?? (
                  <Fragment>
                    <span className="projects-content-text236">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_wksAQC'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </p>
              <p>
                {props.text67 ?? (
                  <Fragment>
                    <span className="projects-content-text238">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_hd2V5l'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </p>
              <p>
                {props.text68 ?? (
                  <Fragment>
                    <span className="projects-content-text255">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_qFdVfn'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </p>
            </div>
          </div>
        </section>
        <section className="projects-section">
          <div className="projects-container">
            <div className="project-card">
              <div className="project-image">
                <img alt={props.imageAlt7} src={props.imageSrc7} />
              </div>
              <div className="project-content">
                <h3>
                  {props.heading18 ?? (
                    <Fragment>
                      <span className="projects-content-text210">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_3BkLOM'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </h3>
                <p>
                  {props.text69 ?? (
                    <Fragment>
                      <span className="projects-content-text232">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_c0HeGh'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </p>
                <p>
                  {props.text70 ?? (
                    <Fragment>
                      <span className="projects-content-text198">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_bTDcE7'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </p>
                <div className="project-funding">
                  <img alt={props.imageAlt13} src={props.imageSrc13} />
                </div>
              </div>
            </div>
            <div className="reverse project-card">
              <div className="project-image">
                <img alt={props.imageAlt8} src={props.imageSrc8} />
              </div>
              <div className="project-content">
                <h3>
                  {props.heading19 ?? (
                    <Fragment>
                      <span className="projects-content-text192">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_EtKaZe'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </h3>
                <p>
                  {props.text71 ?? (
                    <Fragment>
                      <span className="projects-content-text245">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text__nzWJL'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </p>
                <p>
                  {props.text72 ?? (
                    <Fragment>
                      <span className="projects-content-text201">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_ccl8lP'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </p>
                <p>
                  {props.text73 ?? (
                    <Fragment>
                      <span className="projects-content-text221">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_jE7VlW'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </p>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">
                <img alt={props.imageAlt9} src={props.imageSrc9} />
              </div>
              <div className="project-content">
                <h3>
                  {props.heading20 ?? (
                    <Fragment>
                      <span className="projects-content-text223">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_7lDSB3'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </h3>
                <p>
                  {props.text74 ?? (
                    <Fragment>
                      <span className="projects-content-text184">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_xNt-K7'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </p>
                <p>
                  {props.text75 ?? (
                    <Fragment>
                      <span className="projects-content-text256">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_TGB4q-'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </p>
                <p>
                  {props.text76 ?? (
                    <Fragment>
                      <span className="projects-content-text185">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_NIZS3K'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </p>
                <div className="project-link">
                  <a
                    href={props.textUrl10}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <span target="_blank" className="project-btn">
                      {props.text85 ?? (
                        <Fragment>
                          <span className="projects-content-text249">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_A3rBL8'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="reverse project-card">
              <div className="project-image">
                <img alt={props.imageAlt10} src={props.imageSrc10} />
              </div>
              <div className="project-content">
                <h3>
                  {props.heading21 ?? (
                    <Fragment>
                      <span className="projects-content-text187">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_icrfXY'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </h3>
                <p>
                  {props.text77 ?? (
                    <Fragment>
                      <span className="projects-content-text194">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_Qja4RE'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </p>
                <p>
                  {props.text78 ?? (
                    <Fragment>
                      <span className="projects-content-text183">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_HdVfcr'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </p>
                <p>
                  {props.text79 ?? (
                    <Fragment>
                      <span className="projects-content-text222">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_DIIhI1'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </p>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">
                <img alt={props.imageAlt11} src={props.imageSrc11} />
              </div>
              <div className="project-content">
                <h3>
                  {props.heading22 ?? (
                    <Fragment>
                      <span className="projects-content-text212">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_q3oVt-'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </h3>
                <p>
                  {props.text80 ?? (
                    <Fragment>
                      <span className="projects-content-text220">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_Qr8W0H'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </p>
                <p>
                  {props.text81 ?? (
                    <Fragment>
                      <span className="projects-content-text252">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_sI6226'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </p>
                <p>
                  {props.text82 ?? (
                    <Fragment>
                      <span className="projects-content-text224">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_yQ5VcZ'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </p>
              </div>
            </div>
            <div className="reverse project-card">
              <div className="project-image">
                <img alt={props.imageAlt12} src={props.imageSrc12} />
              </div>
              <div className="project-content">
                <h3>
                  {props.heading23 ?? (
                    <Fragment>
                      <span className="projects-content-text193">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_aezZRa'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </h3>
                <p>
                  {props.text83 ?? (
                    <Fragment>
                      <span className="projects-content-text202">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_vwLnoz'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </p>
                <p>
                  {props.text84 ?? (
                    <Fragment>
                      <span className="projects-content-text228">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_oRPFQo'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="publications-section">
          <div className="publications-container">
            <h2 className="publications-title">
              {props.heading24 ?? (
                <Fragment>
                  <span className="projects-content-text229">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_dbmrv6'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </h2>
            <div className="publications-grid">
              <div className="publication-item">
                <div className="publication-year">
                  <span>
                    {props.text86 ?? (
                      <Fragment>
                        <span className="projects-content-text215">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_HNP393'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="publication-content">
                  <h4>
                    {props.heading25 ?? (
                      <Fragment>
                        <span className="projects-content-text213">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_hJkA8r'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </h4>
                  <p className="publication-authors">
                    {props.text87 ?? (
                      <Fragment>
                        <span className="projects-content-text225">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_gwiwnJ'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </p>
                  <p className="publication-journal">
                    {props.text88 ?? (
                      <Fragment>
                        <span className="projects-content-text196">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_SUsSbq'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </p>
                  <a
                    href={props.textUrl11}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <span target="_blank" className="publication-link">
                      {props.text89 ?? (
                        <Fragment>
                          <span className="projects-content-text243">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_HVygmI'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </a>
                </div>
              </div>
              <div className="publication-item">
                <div className="publication-year">
                  <span>
                    {props.text90 ?? (
                      <Fragment>
                        <span className="projects-content-text209">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_Tskmmm'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="publication-content">
                  <h4>
                    {props.heading26 ?? (
                      <Fragment>
                        <span className="projects-content-text203">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_lMMNTq'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </h4>
                  <p className="publication-authors">
                    {props.text91 ?? (
                      <Fragment>
                        <span className="projects-content-text227">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_evmz0w'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </p>
                  <p className="publication-journal">
                    {props.text92 ?? (
                      <Fragment>
                        <span className="projects-content-text200">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_fe8ka5'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </p>
                  <a
                    href={props.textUrl12}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <span target="_blank" className="publication-link">
                      {props.text93 ?? (
                        <Fragment>
                          <span className="projects-content-text241">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_rTVxu8'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </a>
                </div>
              </div>
              <div className="publication-item">
                <div className="publication-year">
                  <span>
                    {props.text94 ?? (
                      <Fragment>
                        <span className="projects-content-text262">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_CImeuZ'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="publication-content">
                  <h4>
                    {props.heading27 ?? (
                      <Fragment>
                        <span className="projects-content-text244">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_JU4G93'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </h4>
                  <p className="publication-authors">
                    {props.text95 ?? (
                      <Fragment>
                        <span className="projects-content-text251">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_fAXjHw'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </p>
                  <p className="publication-journal">
                    {props.text96 ?? (
                      <Fragment>
                        <span className="projects-content-text208">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_g6e3pZ'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </p>
                  <a
                    href={props.textUrl13}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <span target="_blank" className="publication-link">
                      {props.text97 ?? (
                        <Fragment>
                          <span className="projects-content-text248">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_MWH3Y8'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </a>
                </div>
              </div>
              <div className="publication-item">
                <div className="publication-year">
                  <span>
                    {props.text98 ?? (
                      <Fragment>
                        <span className="projects-content-text257">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_JpHWZh'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="publication-content">
                  <h4>
                    {props.heading28 ?? (
                      <Fragment>
                        <span className="projects-content-text240">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_V9n-8v'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </h4>
                  <p className="publication-authors">
                    {props.text99 ?? (
                      <Fragment>
                        <span className="projects-content-text233">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_ZwVewn'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </p>
                  <p className="publication-journal">
                    {props.text100 ?? (
                      <Fragment>
                        <span className="projects-content-text231">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_aCB7bD'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </p>
                  <a
                    href={props.textUrl14}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <span target="_blank" className="publication-link">
                      {props.text101 ?? (
                        <Fragment>
                          <span className="projects-content-text211">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_cB2enz'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </a>
                </div>
              </div>
              <div className="publication-item">
                <div className="publication-year">
                  <span>
                    {props.text102 ?? (
                      <Fragment>
                        <span className="projects-content-text217">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_mE9qe8'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="publication-content">
                  <h4>
                    {props.heading29 ?? (
                      <Fragment>
                        <span className="projects-content-text218">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_LhpvoR'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </h4>
                  <p className="publication-authors">
                    {props.text103 ?? (
                      <Fragment>
                        <span className="projects-content-text242">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_dVZ03U'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </p>
                  <p className="publication-journal">
                    {props.text104 ?? (
                      <Fragment>
                        <span className="projects-content-text253">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_PLKuzm'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </p>
                  <a
                    href={props.textUrl15}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <span target="_blank" className="publication-link">
                      {props.text105 ?? (
                        <Fragment>
                          <span className="projects-content-text189">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_U3qcSK'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </a>
                </div>
              </div>
              <div className="publication-item">
                <div className="publication-year">
                  <span>
                    {props.text106 ?? (
                      <Fragment>
                        <span className="projects-content-text190">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_Ktj02k'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="publication-content">
                  <h4>
                    {props.heading30 ?? (
                      <Fragment>
                        <span className="projects-content-text259">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_n1Z5Et'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </h4>
                  <p className="publication-authors">
                    {props.text107 ?? (
                      <Fragment>
                        <span className="projects-content-text239">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_YsCqJo'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </p>
                  <p className="publication-journal">
                    {props.text108 ?? (
                      <Fragment>
                        <span className="projects-content-text214">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_Z1R8Ya'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </p>
                  <a
                    href={props.textUrl16}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <span target="_blank" className="publication-link">
                      {props.text109 ?? (
                        <Fragment>
                          <span className="projects-content-text206">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_SufoBu'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </a>
                </div>
              </div>
              <div className="publication-item">
                <div className="publication-year">
                  <span>
                    {props.text110 ?? (
                      <Fragment>
                        <span className="projects-content-text219">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_bZ18xg'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="publication-content">
                  <h4>
                    {props.heading31 ?? (
                      <Fragment>
                        <span className="projects-content-text226">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_fmRr_Z'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </h4>
                  <p className="publication-authors">
                    {props.text111 ?? (
                      <Fragment>
                        <span className="projects-content-text250">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_QEFden'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </p>
                  <p className="publication-journal">
                    {props.text112 ?? (
                      <Fragment>
                        <span className="projects-content-text182">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_ROFJDi'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </p>
                  <a
                    href={props.textUrl17}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <span target="_blank" className="publication-link">
                      {props.text113 ?? (
                        <Fragment>
                          <span className="projects-content-text230">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_z0D6V7'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </a>
                </div>
              </div>
              <div className="publication-item">
                <div className="publication-year">
                  <span>
                    {props.text114 ?? (
                      <Fragment>
                        <span className="projects-content-text258">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_9-oe7J'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="publication-content">
                  <h4>
                    {props.heading32 ?? (
                      <Fragment>
                        <span className="projects-content-text186">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_Z2avyg'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </h4>
                  <p className="publication-authors">
                    {props.text115 ?? (
                      <Fragment>
                        <span className="projects-content-text246">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_3PrLj0'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </p>
                  <p className="publication-journal">
                    {props.text116 ?? (
                      <Fragment>
                        <span className="projects-content-text205">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_uocJyU'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </p>
                  <a href="#">
                    <span target="_blank" className="publication-link">
                      {props.text117 ?? (
                        <Fragment>
                          <span className="projects-content-text247">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_g7RFQt'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </a>
                </div>
              </div>
              <div className="publication-item">
                <div className="publication-year">
                  <span>
                    {props.text118 ?? (
                      <Fragment>
                        <span className="projects-content-text195">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_qeJ1_v'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="publication-content">
                  <h4>
                    {props.heading33 ?? (
                      <Fragment>
                        <span className="projects-content-text197">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_lE2Bnh'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </h4>
                  <p className="publication-authors">
                    {props.text119 ?? (
                      <Fragment>
                        <span className="projects-content-text199">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_U-Ie6c'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </p>
                  <p className="publication-journal">
                    {props.text120 ?? (
                      <Fragment>
                        <span className="projects-content-text207">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_iFB-eJ'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </p>
                  <a
                    href={props.textUrl18}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <span target="_blank" className="publication-link">
                      {props.text121 ?? (
                        <Fragment>
                          <span className="projects-content-text263">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text__fv7n3'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </a>
                </div>
              </div>
              <div className="publication-item">
                <div className="publication-year">
                  <span>
                    {props.text122 ?? (
                      <Fragment>
                        <span className="projects-content-text191">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_x6vUGP'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="publication-content">
                  <h4>
                    {props.heading34 ?? (
                      <Fragment>
                        <span className="projects-content-text254">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_rPRm5-'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </h4>
                  <p className="publication-authors">
                    {props.text123 ?? (
                      <Fragment>
                        <span className="projects-content-text237">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_0OnFji'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </p>
                  <p className="publication-journal">
                    {props.text124 ?? (
                      <Fragment>
                        <span className="projects-content-text234">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text__ft3sE'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </p>
                  <a
                    href={props.textUrl19}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <span target="_blank" className="publication-link">
                      {props.text125 ?? (
                        <Fragment>
                          <span className="projects-content-text261">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_ztdmYb'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </a>
                </div>
              </div>
              <div className="publication-item">
                <div className="publication-year">
                  <span>
                    {props.text126 ?? (
                      <Fragment>
                        <span className="projects-content-text235">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_BnQvaT'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="publication-content">
                  <h4>
                    {props.heading35 ?? (
                      <Fragment>
                        <span className="projects-content-text216">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_q4-ToK'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </h4>
                  <p className="publication-authors">
                    {props.text127 ?? (
                      <Fragment>
                        <span className="projects-content-text260">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_NNRPDL'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </p>
                  <p className="publication-journal">
                    {props.text128 ?? (
                      <Fragment>
                        <span className="projects-content-text204">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_rtZh9R'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </p>
                  <a href="#">
                    <span target="_blank" className="publication-link">
                      {props.text129 ?? (
                        <Fragment>
                          <span className="projects-content-text188">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_Y7QnVG'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <style jsx>
        {`
          .projects-content-container10 {
            width: 100%;
          }
          .projects-content-text182 {
            display: inline-block;
          }
          .projects-content-text183 {
            display: inline-block;
          }
          .projects-content-text184 {
            display: inline-block;
          }
          .projects-content-text185 {
            display: inline-block;
          }
          .projects-content-text186 {
            display: inline-block;
          }
          .projects-content-text187 {
            display: inline-block;
          }
          .projects-content-text188 {
            display: inline-block;
          }
          .projects-content-text189 {
            display: inline-block;
          }
          .projects-content-text190 {
            display: inline-block;
          }
          .projects-content-text191 {
            display: inline-block;
          }
          .projects-content-text192 {
            display: inline-block;
          }
          .projects-content-text193 {
            display: inline-block;
          }
          .projects-content-text194 {
            display: inline-block;
          }
          .projects-content-text195 {
            display: inline-block;
          }
          .projects-content-text196 {
            display: inline-block;
          }
          .projects-content-text197 {
            display: inline-block;
          }
          .projects-content-text198 {
            display: inline-block;
          }
          .projects-content-text199 {
            display: inline-block;
          }
          .projects-content-text200 {
            display: inline-block;
          }
          .projects-content-text201 {
            display: inline-block;
          }
          .projects-content-text202 {
            display: inline-block;
          }
          .projects-content-text203 {
            display: inline-block;
          }
          .projects-content-text204 {
            display: inline-block;
          }
          .projects-content-text205 {
            display: inline-block;
          }
          .projects-content-text206 {
            display: inline-block;
          }
          .projects-content-text207 {
            display: inline-block;
          }
          .projects-content-text208 {
            display: inline-block;
          }
          .projects-content-text209 {
            display: inline-block;
          }
          .projects-content-text210 {
            display: inline-block;
          }
          .projects-content-text211 {
            display: inline-block;
          }
          .projects-content-text212 {
            display: inline-block;
          }
          .projects-content-text213 {
            display: inline-block;
          }
          .projects-content-text214 {
            display: inline-block;
          }
          .projects-content-text215 {
            display: inline-block;
          }
          .projects-content-text216 {
            display: inline-block;
          }
          .projects-content-text217 {
            display: inline-block;
          }
          .projects-content-text218 {
            display: inline-block;
          }
          .projects-content-text219 {
            display: inline-block;
          }
          .projects-content-text220 {
            display: inline-block;
          }
          .projects-content-text221 {
            display: inline-block;
          }
          .projects-content-text222 {
            display: inline-block;
          }
          .projects-content-text223 {
            display: inline-block;
          }
          .projects-content-text224 {
            display: inline-block;
          }
          .projects-content-text225 {
            display: inline-block;
          }
          .projects-content-text226 {
            display: inline-block;
          }
          .projects-content-text227 {
            display: inline-block;
          }
          .projects-content-text228 {
            display: inline-block;
          }
          .projects-content-text229 {
            display: inline-block;
          }
          .projects-content-text230 {
            display: inline-block;
          }
          .projects-content-text231 {
            display: inline-block;
          }
          .projects-content-text232 {
            display: inline-block;
          }
          .projects-content-text233 {
            display: inline-block;
          }
          .projects-content-text234 {
            display: inline-block;
          }
          .projects-content-text235 {
            display: inline-block;
          }
          .projects-content-text236 {
            display: inline-block;
          }
          .projects-content-text237 {
            display: inline-block;
          }
          .projects-content-text238 {
            display: inline-block;
          }
          .projects-content-text239 {
            display: inline-block;
          }
          .projects-content-text240 {
            display: inline-block;
          }
          .projects-content-text241 {
            display: inline-block;
          }
          .projects-content-text242 {
            display: inline-block;
          }
          .projects-content-text243 {
            display: inline-block;
          }
          .projects-content-text244 {
            display: inline-block;
          }
          .projects-content-text245 {
            display: inline-block;
          }
          .projects-content-text246 {
            display: inline-block;
          }
          .projects-content-text247 {
            display: inline-block;
          }
          .projects-content-text248 {
            display: inline-block;
          }
          .projects-content-text249 {
            display: inline-block;
          }
          .projects-content-text250 {
            display: inline-block;
          }
          .projects-content-text251 {
            display: inline-block;
          }
          .projects-content-text252 {
            display: inline-block;
          }
          .projects-content-text253 {
            display: inline-block;
          }
          .projects-content-text254 {
            display: inline-block;
          }
          .projects-content-text255 {
            display: inline-block;
          }
          .projects-content-text256 {
            display: inline-block;
          }
          .projects-content-text257 {
            display: inline-block;
          }
          .projects-content-text258 {
            display: inline-block;
          }
          .projects-content-text259 {
            display: inline-block;
          }
          .projects-content-text260 {
            display: inline-block;
          }
          .projects-content-text261 {
            display: inline-block;
          }
          .projects-content-text262 {
            display: inline-block;
          }
          .projects-content-text263 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

ProjectsContent.defaultProps = {
  textUrl17: 'https://doi.org/10.17626/dBEM.ICoM.P00.2015.p091',
  text112: undefined,
  text78: undefined,
  textUrl10: 'http://kapinfood.hu/',
  text74: undefined,
  text76: undefined,
  imageSrc10: '/projects/projekt4-1200w.webp',
  heading32: undefined,
  heading21: undefined,
  text129: undefined,
  textUrl18: 'https://doi.org/10.17626/dBEM.ICoM.P00.2015.p089',
  imageSrc11: '/projects/projekt5-1200w.webp',
  text105: undefined,
  textUrl14: 'https://www.food.actapol.net/pub/7_2_2018.pdf',
  text106: undefined,
  text122: undefined,
  heading19: undefined,
  heading23: undefined,
  text77: undefined,
  text118: undefined,
  text88: undefined,
  heading33: undefined,
  text70: undefined,
  text119: undefined,
  imageAlt12: 'Contract Catering Regulations',
  text92: undefined,
  text72: undefined,
  textUrl11: 'https://www.mdpi.com/2076-3417/11/18/8309',
  text83: undefined,
  heading26: undefined,
  text128: undefined,
  text116: undefined,
  imageSrc9: '/projects/projekt3-1200w.webp',
  text109: undefined,
  text120: undefined,
  text96: undefined,
  text90: undefined,
  heading18: undefined,
  text101: undefined,
  heading22: undefined,
  heading25: undefined,
  text108: undefined,
  text86: undefined,
  heading35: undefined,
  text102: undefined,
  heading29: undefined,
  imageSrc13: '/projects/nkfi-1200w.webp',
  textUrl13: 'https://doi.org/10.1111/jfs.12480',
  text110: undefined,
  text80: undefined,
  imageAlt11: 'Plant Proteins Research',
  textUrl16: 'https://doi.org/10.1504/IJIL.2015.071554',
  text73: undefined,
  text79: undefined,
  heading20: undefined,
  text82: undefined,
  text87: undefined,
  heading31: undefined,
  text91: undefined,
  text84: undefined,
  heading24: undefined,
  text113: undefined,
  textUrl19: 'https://doi.org/10.1016/j.foodcont.2014.06.019',
  textUrl12:
    'https://potravinarstvo.com/journal1/index.php/potravinarstvo/article/view/1111',
  text100: undefined,
  text69: undefined,
  text99: undefined,
  text124: undefined,
  text126: undefined,
  text66: undefined,
  imageSrc8: '/projects/projekt2-1200w.webp',
  imageAlt7: 'Microbiological Control System',
  text123: undefined,
  text67: undefined,
  text107: undefined,
  heading28: undefined,
  text93: undefined,
  text103: undefined,
  text89: undefined,
  heading27: undefined,
  text71: undefined,
  textUrl15: 'https://doi.org/10.1016/j.foodcont.2016.09.011',
  imageSrc7: '/projects/projekt1-1200w.webp',
  text115: undefined,
  text117: undefined,
  text97: undefined,
  imageAlt13: 'NKFIA Support',
  text85: undefined,
  text111: undefined,
  imageSrc12: '/projects/projekt6-1200w.webp',
  text95: undefined,
  text81: undefined,
  text104: undefined,
  heading34: undefined,
  text68: undefined,
  text75: undefined,
  text98: undefined,
  imageAlt8: 'Food Waste Research',
  text114: undefined,
  imageAlt9: 'Rapid Microbiological Control',
  heading30: undefined,
  text127: undefined,
  text125: undefined,
  text94: undefined,
  text121: undefined,
  imageAlt10: 'Dietary Cooking Management',
}

ProjectsContent.propTypes = {
  textUrl17: PropTypes.string,
  text112: PropTypes.element,
  text78: PropTypes.element,
  textUrl10: PropTypes.string,
  text74: PropTypes.element,
  text76: PropTypes.element,
  imageSrc10: PropTypes.string,
  heading32: PropTypes.element,
  heading21: PropTypes.element,
  text129: PropTypes.element,
  textUrl18: PropTypes.string,
  imageSrc11: PropTypes.string,
  text105: PropTypes.element,
  textUrl14: PropTypes.string,
  text106: PropTypes.element,
  text122: PropTypes.element,
  heading19: PropTypes.element,
  heading23: PropTypes.element,
  text77: PropTypes.element,
  text118: PropTypes.element,
  text88: PropTypes.element,
  heading33: PropTypes.element,
  text70: PropTypes.element,
  text119: PropTypes.element,
  imageAlt12: PropTypes.string,
  text92: PropTypes.element,
  text72: PropTypes.element,
  textUrl11: PropTypes.string,
  text83: PropTypes.element,
  heading26: PropTypes.element,
  text128: PropTypes.element,
  text116: PropTypes.element,
  imageSrc9: PropTypes.string,
  text109: PropTypes.element,
  text120: PropTypes.element,
  text96: PropTypes.element,
  text90: PropTypes.element,
  heading18: PropTypes.element,
  text101: PropTypes.element,
  heading22: PropTypes.element,
  heading25: PropTypes.element,
  text108: PropTypes.element,
  text86: PropTypes.element,
  heading35: PropTypes.element,
  text102: PropTypes.element,
  heading29: PropTypes.element,
  imageSrc13: PropTypes.string,
  textUrl13: PropTypes.string,
  text110: PropTypes.element,
  text80: PropTypes.element,
  imageAlt11: PropTypes.string,
  textUrl16: PropTypes.string,
  text73: PropTypes.element,
  text79: PropTypes.element,
  heading20: PropTypes.element,
  text82: PropTypes.element,
  text87: PropTypes.element,
  heading31: PropTypes.element,
  text91: PropTypes.element,
  text84: PropTypes.element,
  heading24: PropTypes.element,
  text113: PropTypes.element,
  textUrl19: PropTypes.string,
  textUrl12: PropTypes.string,
  text100: PropTypes.element,
  text69: PropTypes.element,
  text99: PropTypes.element,
  text124: PropTypes.element,
  text126: PropTypes.element,
  text66: PropTypes.element,
  imageSrc8: PropTypes.string,
  imageAlt7: PropTypes.string,
  text123: PropTypes.element,
  text67: PropTypes.element,
  text107: PropTypes.element,
  heading28: PropTypes.element,
  text93: PropTypes.element,
  text103: PropTypes.element,
  text89: PropTypes.element,
  heading27: PropTypes.element,
  text71: PropTypes.element,
  textUrl15: PropTypes.string,
  imageSrc7: PropTypes.string,
  text115: PropTypes.element,
  text117: PropTypes.element,
  text97: PropTypes.element,
  imageAlt13: PropTypes.string,
  text85: PropTypes.element,
  text111: PropTypes.element,
  imageSrc12: PropTypes.string,
  text95: PropTypes.element,
  text81: PropTypes.element,
  text104: PropTypes.element,
  heading34: PropTypes.element,
  text68: PropTypes.element,
  text75: PropTypes.element,
  text98: PropTypes.element,
  imageAlt8: PropTypes.string,
  text114: PropTypes.element,
  imageAlt9: PropTypes.string,
  heading30: PropTypes.element,
  text127: PropTypes.element,
  text125: PropTypes.element,
  text94: PropTypes.element,
  text121: PropTypes.element,
  imageAlt10: PropTypes.string,
}

export default ProjectsContent
