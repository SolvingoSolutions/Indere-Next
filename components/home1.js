import React, { Fragment } from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Home1 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="home1-container10">
        <div>
          <div className="home1-container12">
            <React.Fragment>
              <Script>{`
              (function(){
  document.querySelectorAll(".filter-btn").forEach((button) => {
    button.addEventListener("click", function () {
      document.querySelectorAll(".filter-btn").forEach((btn) => {
        btn.classList.remove("active")
      })
      this.classList.add("active")
      const filterValue = this.getAttribute("data-filter")
      console.log(\`Filtering by: \${filterValue}\`)
    })
  })
})()
              `}</Script>
            </React.Fragment>
          </div>
        </div>
        <div className="page">
          <div className="content-wrapper">
            <section className="research-focus">
              <div className="container">
                <h2 className="section-title">
                  {props.heading ?? (
                    <Fragment>
                      <span className="home1-text58">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_RJymKr'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </h2>
                <div className="focus-areas">
                  <div className="focus-card">
                    <div className="focus-icon">
                      <img alt={props.imageAlt4} src={props.imageSrc4} />
                    </div>
                    <h3>
                      {props.heading5 ?? (
                        <Fragment>
                          <span className="home1-text52">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_WAkMlv'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </h3>
                    <p>
                      {props.text2 ?? (
                        <Fragment>
                          <span className="home1-text49">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_7dQCyQ'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </p>
                  </div>
                  <div className="focus-card">
                    <div className="focus-icon">
                      <img alt={props.imageAlt5} src={props.imageSrc5} />
                    </div>
                    <h3>
                      {props.heading6 ?? (
                        <Fragment>
                          <span className="home1-text68">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_NOBWLO'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </h3>
                    <p>
                      {props.text3 ?? (
                        <Fragment>
                          <span className="home1-text46">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_07Lq4f'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </p>
                  </div>
                  <div className="focus-card">
                    <div className="focus-icon">
                      <img alt={props.imageAlt6} src={props.imageSrc6} />
                    </div>
                    <h3>
                      {props.heading7 ?? (
                        <Fragment>
                          <span className="home1-text73">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_Mnhk1t'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </h3>
                    <p>
                      {props.text4 ?? (
                        <Fragment>
                          <span className="home1-text64">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_VcjVaM'),
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
              <div className="container">
                <h2 className="section-title">
                  {props.heading1 ?? (
                    <Fragment>
                      <span className="home1-text70">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_yMkz4x'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </h2>
                <div className="blog-filter">
                  <button
                    data-filter="all"
                    className="active filter-btn button"
                  >
                    <span>
                      {props.button ?? (
                        <Fragment>
                          <span className="home1-text67">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_n1aoOS'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </button>
                  <button data-filter="catering" className="filter-btn button">
                    <span>
                      {props.button1 ?? (
                        <Fragment>
                          <span className="home1-text61">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_xku687'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </button>
                  <button
                    data-filter="innovations"
                    className="filter-btn button"
                  >
                    <span>
                      {props.button2 ?? (
                        <Fragment>
                          <span className="home1-text60">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_BuTkCl'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </button>
                  <button data-filter="research" className="filter-btn button">
                    <span>
                      {props.button3 ?? (
                        <Fragment>
                          <span className="home1-text53">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_Oj9y2-'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </button>
                </div>
                <div className="blog-grid">
                  <article className="blog-card">
                    <div className="blog-image">
                      <img alt={props.imageAlt7} src={props.imageSrc7} />
                    </div>
                    <div className="blog-content">
                      <span className="blog-date">
                        {props.text5 ?? (
                          <Fragment>
                            <span className="home1-text72">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_eIuXBi'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                      <h3 className="blog-title">
                        {props.heading8 ?? (
                          <Fragment>
                            <span className="home1-text45">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_gj579h'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </h3>
                      <p className="blog-excerpt">
                        {props.text6 ?? (
                          <Fragment>
                            <span className="home1-text75">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_7T6W2G'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </p>
                      <span className="blog-link">
                        {props.text7 ?? (
                          <Fragment>
                            <span className="home1-text43">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_DmMoHF'),
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
                        {props.text8 ?? (
                          <Fragment>
                            <span className="home1-text51">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_0nQ1Jx'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                      <h3 className="blog-title">
                        {props.heading9 ?? (
                          <Fragment>
                            <span className="home1-text54">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_pYhvl-'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </h3>
                      <p className="blog-excerpt">
                        {props.text9 ?? (
                          <Fragment>
                            <span className="home1-text65">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_boFRuM'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </p>
                      <span className="blog-link">
                        {props.text10 ?? (
                          <Fragment>
                            <span className="home1-text56">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_tFgfo_'),
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
                        {props.text11 ?? (
                          <Fragment>
                            <span className="home1-text48">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_asgK4E'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                      <h3 className="blog-title">
                        {props.heading10 ?? (
                          <Fragment>
                            <span className="home1-text63">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_3TB0v-'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </h3>
                      <p className="blog-excerpt">
                        {props.text12 ?? (
                          <Fragment>
                            <span className="home1-text74">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_zcDF1Y'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </p>
                      <span className="blog-link">
                        {props.text13 ?? (
                          <Fragment>
                            <span className="home1-text55">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_VpNNKC'),
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
                        {props.text14 ?? (
                          <Fragment>
                            <span className="home1-text57">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_vt6cRE'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </span>
                      <h3 className="blog-title">
                        {props.heading11 ?? (
                          <Fragment>
                            <span className="home1-text50">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_V6d9o6'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </h3>
                      <p className="blog-excerpt">
                        {props.text15 ?? (
                          <Fragment>
                            <span className="home1-text59">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_c-nwLM'),
                                }}
                              ></span>
                            </span>
                          </Fragment>
                        )}
                      </p>
                      <span className="blog-link">
                        {props.text16 ?? (
                          <Fragment>
                            <span className="home1-text62">
                              <span
                                dangerouslySetInnerHTML={{
                                  __html: translate.raw('text_gqir_S'),
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
                  <span className="btn btn-primary">
                    {props.text ?? (
                      <Fragment>
                        <span className="home1-text47">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_diq9aB'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
            </section>
            <section className="video-section">
              <div className="container">
                <h2 className="section-title">
                  {props.heading2 ?? (
                    <Fragment>
                      <span className="home1-text44">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_QxFn_m'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </h2>
                <div className="video-container">
                  <div className="video-wrapper">
                    <iframe
                      src="https://www.youtube.com/embed/VIDEO_ID"
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
                        <span className="home1-text66">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_j6_ZU1'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <p>
                    {props.text1 ?? (
                      <Fragment>
                        <span className="home1-text69">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_SemKPk'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </p>
                </div>
              </div>
            </section>
            <section className="partners-section">
              <div className="container">
                <h2 className="section-title">
                  {props.heading3 ?? (
                    <Fragment>
                      <span className="home1-text71">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_98eSfg'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </h2>
                <div className="partners-grid">
                  <div className="partner-logo">
                    <img alt={props.imageAlt} src={props.imageSrc} />
                  </div>
                  <div className="partner-logo">
                    <img alt={props.imageAlt1} src={props.imageSrc1} />
                  </div>
                  <div className="partner-logo">
                    <img alt={props.imageAlt2} src={props.imageSrc2} />
                  </div>
                  <div className="partner-logo">
                    <img alt={props.imageAlt3} src={props.imageSrc3} />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .home1-container10 {
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .home1-container12 {
            display: contents;
          }
          .home1-text43 {
            display: inline-block;
          }
          .home1-text44 {
            display: inline-block;
          }
          .home1-text45 {
            display: inline-block;
          }
          .home1-text46 {
            display: inline-block;
          }
          .home1-text47 {
            display: inline-block;
          }
          .home1-text48 {
            display: inline-block;
          }
          .home1-text49 {
            display: inline-block;
          }
          .home1-text50 {
            display: inline-block;
          }
          .home1-text51 {
            display: inline-block;
          }
          .home1-text52 {
            display: inline-block;
          }
          .home1-text53 {
            display: inline-block;
          }
          .home1-text54 {
            display: inline-block;
          }
          .home1-text55 {
            display: inline-block;
          }
          .home1-text56 {
            display: inline-block;
          }
          .home1-text57 {
            display: inline-block;
          }
          .home1-text58 {
            display: inline-block;
          }
          .home1-text59 {
            display: inline-block;
          }
          .home1-text60 {
            display: inline-block;
          }
          .home1-text61 {
            display: inline-block;
          }
          .home1-text62 {
            display: inline-block;
          }
          .home1-text63 {
            display: inline-block;
          }
          .home1-text64 {
            display: inline-block;
          }
          .home1-text65 {
            display: inline-block;
          }
          .home1-text66 {
            display: inline-block;
          }
          .home1-text67 {
            display: inline-block;
          }
          .home1-text68 {
            display: inline-block;
          }
          .home1-text69 {
            display: inline-block;
          }
          .home1-text70 {
            display: inline-block;
          }
          .home1-text71 {
            display: inline-block;
          }
          .home1-text72 {
            display: inline-block;
          }
          .home1-text73 {
            display: inline-block;
          }
          .home1-text74 {
            display: inline-block;
          }
          .home1-text75 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

Home1.defaultProps = {
  text7: undefined,
  imageSrc3: 'assets/partners/creaveg-logo.png',
  heading2: undefined,
  heading8: undefined,
  imageAlt8: 'Public Catering Legislation',
  text3: undefined,
  text: undefined,
  imageAlt: 'InDeRe',
  text11: undefined,
  text2: undefined,
  imageAlt7: 'Gluten Contamination',
  imageAlt9: 'Nutrition Conference',
  imageSrc: 'assets/partners/indere-logo.png',
  imageAlt10: 'Food Waste Reduction',
  imageSrc10: 'assets/blog/food-waste.jpg',
  heading11: undefined,
  imageSrc4: 'assets/icons/catering.svg',
  text8: undefined,
  heading5: undefined,
  imageSrc6: 'assets/icons/sustainability.svg',
  button3: undefined,
  heading9: undefined,
  imageSrc9: 'assets/blog/nutrition-conference.jpg',
  imageSrc7: 'assets/blog/gluten-contamination.png',
  text13: undefined,
  text10: undefined,
  imageAlt5: 'Science Icon',
  text14: undefined,
  heading: undefined,
  text15: undefined,
  imageSrc8: 'assets/blog/legislation-effectiveness.jpg',
  imageSrc5: 'assets/icons/science.svg',
  button2: undefined,
  button1: undefined,
  text16: undefined,
  heading10: undefined,
  text4: undefined,
  imageAlt3: 'Creaveg',
  imageAlt2: 'Soreca',
  text9: undefined,
  heading4: undefined,
  imageSrc2: 'assets/partners/soreca-logo.png',
  button: undefined,
  heading6: undefined,
  imageAlt4: 'Catering Icon',
  text1: undefined,
  heading1: undefined,
  heading3: undefined,
  text5: undefined,
  heading7: undefined,
  text12: undefined,
  imageAlt6: 'Sustainability Icon',
  imageAlt1: 'KapInFood',
  imageSrc1: 'assets/partners/kapinfood-logo.png',
  text6: undefined,
}

Home1.propTypes = {
  text7: PropTypes.element,
  imageSrc3: PropTypes.string,
  heading2: PropTypes.element,
  heading8: PropTypes.element,
  imageAlt8: PropTypes.string,
  text3: PropTypes.element,
  text: PropTypes.element,
  imageAlt: PropTypes.string,
  text11: PropTypes.element,
  text2: PropTypes.element,
  imageAlt7: PropTypes.string,
  imageAlt9: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt10: PropTypes.string,
  imageSrc10: PropTypes.string,
  heading11: PropTypes.element,
  imageSrc4: PropTypes.string,
  text8: PropTypes.element,
  heading5: PropTypes.element,
  imageSrc6: PropTypes.string,
  button3: PropTypes.element,
  heading9: PropTypes.element,
  imageSrc9: PropTypes.string,
  imageSrc7: PropTypes.string,
  text13: PropTypes.element,
  text10: PropTypes.element,
  imageAlt5: PropTypes.string,
  text14: PropTypes.element,
  heading: PropTypes.element,
  text15: PropTypes.element,
  imageSrc8: PropTypes.string,
  imageSrc5: PropTypes.string,
  button2: PropTypes.element,
  button1: PropTypes.element,
  text16: PropTypes.element,
  heading10: PropTypes.element,
  text4: PropTypes.element,
  imageAlt3: PropTypes.string,
  imageAlt2: PropTypes.string,
  text9: PropTypes.element,
  heading4: PropTypes.element,
  imageSrc2: PropTypes.string,
  button: PropTypes.element,
  heading6: PropTypes.element,
  imageAlt4: PropTypes.string,
  text1: PropTypes.element,
  heading1: PropTypes.element,
  heading3: PropTypes.element,
  text5: PropTypes.element,
  heading7: PropTypes.element,
  text12: PropTypes.element,
  imageAlt6: PropTypes.string,
  imageAlt1: PropTypes.string,
  imageSrc1: PropTypes.string,
  text6: PropTypes.element,
}

export default Home1
