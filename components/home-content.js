import React, { Fragment } from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const HomeContent = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="home-content-container10">
        <div className="home-content-container11 hero-section">
          <div className="hero-content">
            <h1 className="hero-title home-content-text10">
              {props.heading ?? (
                <Fragment>
                  <span className="home-content-text65">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_PwTqX4'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </h1>
            <p className="hero-subtitle home-content-text11">
              {props.text ?? (
                <Fragment>
                  <span className="home-content-text70">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_sMLFWD'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </p>
            <div className="hero-buttons">
              <span className="hero-btn hero-btn-primary">
                {props.text1 ?? (
                  <Fragment>
                    <span className="home-content-text57">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_iJzrCe'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
              <span className="hero-btn hero-btn-secondary">
                {props.text2 ?? (
                  <Fragment>
                    <span className="home-content-text62">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_XJmIuu'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
        <section className="partners-section">
          <div className="partners-grid home-content-container15">
            <img
              alt={props.imageAlt}
              src={props.imageSrc}
              className="home-content-image10"
            />
            <img
              alt={props.imageAlt1}
              src={props.imageSrc1}
              className="home-content-image11"
            />
            <img
              alt={props.imageAlt2}
              src={props.imageSrc2}
              className="home-content-image12"
            />
            <img
              alt={props.imageAlt3}
              src={props.imageSrc3}
              className="home-content-image13"
            />
          </div>
        </section>
        <section className="research-section">
          <div className="research-container">
            <h2 className="research-title">
              {props.heading1 ?? (
                <Fragment>
                  <span className="home-content-text42">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_qrDgzg'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </h2>
            <div className="research-focus-areas">
              <div className="research-card">
                <img
                  alt={props.imageAlt4}
                  src={props.imageSrc4}
                  className="research-icon"
                />
                <h3>
                  {props.heading5 ?? (
                    <Fragment>
                      <span className="home-content-text48">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_4U25Sb'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </h3>
                <p>
                  {props.text5 ?? (
                    <Fragment>
                      <span className="home-content-text50">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_gxJsry'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </p>
              </div>
              <div className="research-card">
                <img
                  alt={props.imageAlt5}
                  src={props.imageSrc5}
                  className="research-icon"
                />
                <h3>
                  {props.heading6 ?? (
                    <Fragment>
                      <span className="home-content-text47">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_p5_F3_'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </h3>
                <p>
                  {props.text6 ?? (
                    <Fragment>
                      <span className="home-content-text63">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_TV-WRP'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </p>
              </div>
              <div className="research-card">
                <img
                  alt={props.imageAlt6}
                  src={props.imageSrc6}
                  className="research-icon"
                />
                <h3>
                  {props.heading7 ?? (
                    <Fragment>
                      <span className="home-content-text72">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text__DBGq_'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </h3>
                <p>
                  {props.text7 ?? (
                    <Fragment>
                      <span className="home-content-text69">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_aIjgYO'),
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
        <section className="blog-section">
          <div className="home-content-container23 blog-container">
            <h2 className="blog-title">
              {props.heading2 ?? (
                <Fragment>
                  <span className="home-content-text53">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_PpBK1c'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </h2>
            <div className="blog-grid">
              <article className="blog-card">
                <div className="blog-image">
                  <img alt={props.imageAlt7} src={props.imageSrc7} />
                </div>
                <div className="blog-content">
                  <span className="blog-date">
                    {props.text8 ?? (
                      <Fragment>
                        <span className="home-content-text64">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_qb7Hpt'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                  <h3 className="blog-title">
                    {props.heading8 ?? (
                      <Fragment>
                        <span className="home-content-text73">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_Wpf-3I'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <p className="blog-excerpt">
                    {props.text9 ?? (
                      <Fragment>
                        <span className="home-content-text49">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_V9-rQf'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </p>
                  <span className="blog-link">
                    {props.text10 ?? (
                      <Fragment>
                        <span className="home-content-text67">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_UoMqoI'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </article>
              <article className="blog-card">
                <div className="blog-image">
                  <img alt={props.imageAlt8} src={props.imageSrc8} />
                </div>
                <div className="blog-content">
                  <span className="blog-date">
                    {props.text11 ?? (
                      <Fragment>
                        <span className="home-content-text66">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_tR29v1'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                  <h3 className="blog-title">
                    {props.heading9 ?? (
                      <Fragment>
                        <span className="home-content-text55">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_SEkWlU'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <p className="blog-excerpt">
                    {props.text12 ?? (
                      <Fragment>
                        <span className="home-content-text43">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_DhbOhi'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </p>
                  <span className="blog-link">
                    {props.text13 ?? (
                      <Fragment>
                        <span className="home-content-text46">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_ZAF8Tn'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </article>
              <article className="blog-card">
                <div className="blog-image">
                  <img alt={props.imageAlt9} src={props.imageSrc9} />
                </div>
                <div className="blog-content">
                  <span className="blog-date">
                    {props.text14 ?? (
                      <Fragment>
                        <span className="home-content-text59">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_ODRg9p'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                  <h3 className="blog-title">
                    {props.heading10 ?? (
                      <Fragment>
                        <span className="home-content-text56">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_87a17t'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <p className="blog-excerpt">
                    {props.text15 ?? (
                      <Fragment>
                        <span className="home-content-text60">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_IZF1MF'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </p>
                  <span className="blog-link">
                    {props.text16 ?? (
                      <Fragment>
                        <span className="home-content-text58">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_LTk8jV'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </article>
              <article className="blog-card">
                <div className="blog-image">
                  <img alt={props.imageAlt10} src={props.imageSrc10} />
                </div>
                <div className="blog-content">
                  <span className="blog-date">
                    {props.text17 ?? (
                      <Fragment>
                        <span className="home-content-text54">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_XzlhXj'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                  <h3 className="blog-title">
                    {props.heading11 ?? (
                      <Fragment>
                        <span className="home-content-text45">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_9AvHYl'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <p className="blog-excerpt">
                    {props.text18 ?? (
                      <Fragment>
                        <span className="home-content-text68">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_hFlLe0'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </p>
                  <span className="blog-link">
                    {props.text19 ?? (
                      <Fragment>
                        <span className="home-content-text61">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_24LkIK'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </article>
            </div>
            <div className="blog-cta">
              <Link href="/news">
                <a>
                  <span className="home-content-text38 blog-btn blog-btn-primary">
                    {props.text3 ?? (
                      <Fragment>
                        <span className="home-content-text44">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_vpjQix'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </a>
              </Link>
            </div>
          </div>
        </section>
        <section className="video-section">
          <div className="video-container">
            <h2 className="home-content-text39 video-title">
              {props.heading3 ?? (
                <Fragment>
                  <span className="home-content-text52">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_pe5azz'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </h2>
            <div className="video-wrapper-outer">
              <div className="video-wrapper-inner">
                <iframe
                  src="https://www.youtube.com/embed/y-dMJOBBglk?si=ZF7jk6BekiSAJmUM"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  title="Food Control Research"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
            <div className="video-text">
              <h3>
                {props.heading4 ?? (
                  <Fragment>
                    <span className="home-content-text51">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_eSismo'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h3>
              <p>
                {props.text4 ?? (
                  <Fragment>
                    <span className="home-content-text71">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_iGye5C'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </p>
            </div>
          </div>
        </section>
      </div>
      <style jsx>
        {`
          .home-content-container10 {
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .home-content-container11 {
            background-image: url('/hero-bg-1500h.webp');
          }
          .home-content-image10 {
            height: 100%;
          }
          .home-content-image11 {
            height: 100%;
          }
          .home-content-image12 {
            height: 100%;
          }
          .home-content-image13 {
            height: 100%;
          }
          .home-content-container23 {
            padding-left: 20px;
            padding-right: 20px;
          }
          .home-content-text38 {
            text-decoration: none;
          }
          .home-content-text39 {
            margin-bottom: 2rem;
          }
          .home-content-text42 {
            display: inline-block;
          }
          .home-content-text43 {
            display: inline-block;
          }
          .home-content-text44 {
            display: inline-block;
          }
          .home-content-text45 {
            display: inline-block;
          }
          .home-content-text46 {
            display: inline-block;
          }
          .home-content-text47 {
            display: inline-block;
          }
          .home-content-text48 {
            display: inline-block;
          }
          .home-content-text49 {
            display: inline-block;
          }
          .home-content-text50 {
            display: inline-block;
          }
          .home-content-text51 {
            display: inline-block;
          }
          .home-content-text52 {
            display: inline-block;
          }
          .home-content-text53 {
            display: inline-block;
          }
          .home-content-text54 {
            display: inline-block;
          }
          .home-content-text55 {
            display: inline-block;
          }
          .home-content-text56 {
            display: inline-block;
          }
          .home-content-text57 {
            display: inline-block;
          }
          .home-content-text58 {
            display: inline-block;
          }
          .home-content-text59 {
            display: inline-block;
          }
          .home-content-text60 {
            display: inline-block;
          }
          .home-content-text61 {
            display: inline-block;
          }
          .home-content-text62 {
            display: inline-block;
          }
          .home-content-text63 {
            display: inline-block;
          }
          .home-content-text64 {
            display: inline-block;
          }
          .home-content-text65 {
            display: inline-block;
          }
          .home-content-text66 {
            display: inline-block;
          }
          .home-content-text67 {
            display: inline-block;
          }
          .home-content-text68 {
            display: inline-block;
          }
          .home-content-text69 {
            display: inline-block;
          }
          .home-content-text70 {
            display: inline-block;
          }
          .home-content-text71 {
            display: inline-block;
          }
          .home-content-text72 {
            display: inline-block;
          }
          .home-content-text73 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .home-content-container15 {
              gap: 60px;
              height: 125px;
            }
          }
          @media (max-width: 767px) {
            .home-content-text10 {
              text-align: center;
            }
            .home-content-text11 {
              text-align: center;
            }
            .home-content-container15 {
              gap: 40px;
              height: 100px;
            }
          }
          @media (max-width: 479px) {
            .home-content-container15 {
              gap: 20px;
              height: 75px;
            }
          }
        `}
      </style>
    </>
  )
}

HomeContent.defaultProps = {
  imageAlt8: 'Public Catering Legislation',
  heading1: undefined,
  imageAlt5: 'Science Icon',
  imageAlt10: 'Food Waste Reduction',
  imageSrc7: '/Blogs/gluten-contaminaion-1200w.webp',
  imageAlt1: 'KapInFood',
  imageAlt: 'InDeRe',
  text12: undefined,
  text3: undefined,
  heading11: undefined,
  text13: undefined,
  imageSrc10: '/Blogs/food-waste-reducttion-1200w.webp',
  heading6: undefined,
  heading5: undefined,
  text9: undefined,
  imageAlt2: 'Soreca',
  text5: undefined,
  heading4: undefined,
  imageAlt9: 'Nutrition Conference',
  imageSrc2: '/Partners/partner3-1500w.webp',
  heading3: undefined,
  imageAlt7: 'Gluten Contamination',
  heading2: undefined,
  text17: undefined,
  heading9: undefined,
  imageSrc8: '/Blogs/school-catering-1200w.webp',
  imageSrc6: '/Cards/sustainability-200h.webp',
  heading10: undefined,
  imageSrc5: '/Cards/food-safety-200h.webp',
  imageAlt4: 'Catering Icon',
  text1: undefined,
  text16: undefined,
  imageAlt6: 'Sustainability Icon',
  text14: undefined,
  text15: undefined,
  imageSrc9: '/Blogs/nutrition-conference-1200w.webp',
  text19: undefined,
  imageSrc4: '/Cards/school-nutrition-200h.webp',
  text2: undefined,
  imageSrc: '/Partners/partner1-1500w.webp',
  imageSrc1: '/Partners/partner2-1500w.webp',
  text6: undefined,
  text8: undefined,
  imageAlt3: 'Creaveg',
  heading: undefined,
  text11: undefined,
  imageSrc3: '/Partners/partner4-1500w.webp',
  text10: undefined,
  text18: undefined,
  text7: undefined,
  text: undefined,
  text4: undefined,
  heading7: undefined,
  heading8: undefined,
}

HomeContent.propTypes = {
  imageAlt8: PropTypes.string,
  heading1: PropTypes.element,
  imageAlt5: PropTypes.string,
  imageAlt10: PropTypes.string,
  imageSrc7: PropTypes.string,
  imageAlt1: PropTypes.string,
  imageAlt: PropTypes.string,
  text12: PropTypes.element,
  text3: PropTypes.element,
  heading11: PropTypes.element,
  text13: PropTypes.element,
  imageSrc10: PropTypes.string,
  heading6: PropTypes.element,
  heading5: PropTypes.element,
  text9: PropTypes.element,
  imageAlt2: PropTypes.string,
  text5: PropTypes.element,
  heading4: PropTypes.element,
  imageAlt9: PropTypes.string,
  imageSrc2: PropTypes.string,
  heading3: PropTypes.element,
  imageAlt7: PropTypes.string,
  heading2: PropTypes.element,
  text17: PropTypes.element,
  heading9: PropTypes.element,
  imageSrc8: PropTypes.string,
  imageSrc6: PropTypes.string,
  heading10: PropTypes.element,
  imageSrc5: PropTypes.string,
  imageAlt4: PropTypes.string,
  text1: PropTypes.element,
  text16: PropTypes.element,
  imageAlt6: PropTypes.string,
  text14: PropTypes.element,
  text15: PropTypes.element,
  imageSrc9: PropTypes.string,
  text19: PropTypes.element,
  imageSrc4: PropTypes.string,
  text2: PropTypes.element,
  imageSrc: PropTypes.string,
  imageSrc1: PropTypes.string,
  text6: PropTypes.element,
  text8: PropTypes.element,
  imageAlt3: PropTypes.string,
  heading: PropTypes.element,
  text11: PropTypes.element,
  imageSrc3: PropTypes.string,
  text10: PropTypes.element,
  text18: PropTypes.element,
  text7: PropTypes.element,
  text: PropTypes.element,
  text4: PropTypes.element,
  heading7: PropTypes.element,
  heading8: PropTypes.element,
}

export default HomeContent
