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
  document.querySelectorAll(".blog-filter-btn").forEach((button) => {
    button.addEventListener("click", function () {
      document.querySelectorAll(".blog-filter-btn").forEach((btn) => {
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
        <section className="research-section">
          <div className="research-container">
            <h2 className="research-title">
              {props.heading12 ?? (
                <Fragment>
                  <span className="home1-text43">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_MVwZmA'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </h2>
            <div className="research-focus-areas">
              <div className="research-card">
                <div className="research-icon">
                  <img src={props.imageSrc11} alt={props.imageAlt11} />
                </div>
                <h3>
                  {props.heading13 ?? (
                    <Fragment>
                      <span className="home1-text44">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_tt0Wvm'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </h3>
                <p>
                  {props.text17 ?? (
                    <Fragment>
                      <span className="home1-text45">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_oFiZNu'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </p>
              </div>
              <div className="research-card">
                <div className="research-icon">
                  <img src={props.imageSrc12} alt={props.imageAlt12} />
                </div>
                <h3>
                  {props.heading14 ?? (
                    <Fragment>
                      <span className="home1-text46">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_gs0jh3'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </h3>
                <p>
                  {props.text18 ?? (
                    <Fragment>
                      <span className="home1-text47">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_slQPC6'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </p>
              </div>
              <div className="research-card">
                <div className="research-icon">
                  <img src={props.imageSrc13} alt={props.imageAlt13} />
                </div>
                <h3>
                  {props.heading15 ?? (
                    <Fragment>
                      <span className="home1-text48">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_7kKz4S'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </h3>
                <p>
                  {props.text19 ?? (
                    <Fragment>
                      <span className="home1-text49">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_XdJnyY'),
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
          <div className="blog-container">
            <h2 className="blog-title">
              {props.heading16 ?? (
                <Fragment>
                  <span className="home1-text50">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_7diw1E'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </h2>
            <div className="blog-filter">
              <button
                data-filter="all"
                className="blog-filter-btn button active"
              >
                <span>
                  {props.button4 ?? (
                    <Fragment>
                      <span className="home1-text51">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_cINsxK'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
              <button data-filter="catering" className="blog-filter-btn button">
                <span>
                  {props.button5 ?? (
                    <Fragment>
                      <span className="home1-text52">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_Jm9nNE'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
              <button
                data-filter="innovations"
                className="blog-filter-btn button"
              >
                <span>
                  {props.button6 ?? (
                    <Fragment>
                      <span className="home1-text53">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_59C9RI'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
              <button data-filter="research" className="blog-filter-btn button">
                <span>
                  {props.button7 ?? (
                    <Fragment>
                      <span className="home1-text54">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_LxoRaa'),
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
                  <img src={props.imageSrc14} alt={props.imageAlt14} />
                </div>
                <div className="blog-content">
                  <span className="blog-date">
                    {props.text21 ?? (
                      <Fragment>
                        <span className="home1-text56">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_Srah_a'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                  <h3 className="blog-title">
                    {props.heading17 ?? (
                      <Fragment>
                        <span className="home1-text57">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_SNBJr8'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <p className="blog-excerpt">
                    {props.text22 ?? (
                      <Fragment>
                        <span className="home1-text58">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_TS4jSc'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </p>
                  <span className="blog-link">
                    {props.text23 ?? (
                      <Fragment>
                        <span className="home1-text59">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_k7O4Xn'),
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
                  <img src={props.imageSrc15} alt={props.imageAlt15} />
                </div>
                <div className="blog-content">
                  <span className="blog-date">
                    {props.text24 ?? (
                      <Fragment>
                        <span className="home1-text60">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_gANibL'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                  <h3 className="blog-title">
                    {props.heading18 ?? (
                      <Fragment>
                        <span className="home1-text61">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_1NMctm'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <p className="blog-excerpt">
                    {props.text25 ?? (
                      <Fragment>
                        <span className="home1-text62">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_w1GO5r'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </p>
                  <span className="blog-link">
                    {props.text26 ?? (
                      <Fragment>
                        <span className="home1-text63">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_vuJhYe'),
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
                  <img src={props.imageSrc16} alt={props.imageAlt16} />
                </div>
                <div className="blog-content">
                  <span className="blog-date">
                    {props.text27 ?? (
                      <Fragment>
                        <span className="home1-text64">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_i1juHP'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                  <h3 className="blog-title">
                    {props.heading19 ?? (
                      <Fragment>
                        <span className="home1-text65">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_m6qEAu'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <p className="blog-excerpt">
                    {props.text28 ?? (
                      <Fragment>
                        <span className="home1-text66">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_w8bViP'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </p>
                  <span className="blog-link">
                    {props.text29 ?? (
                      <Fragment>
                        <span className="home1-text67">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_Y6Mjhy'),
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
                  <img src={props.imageSrc17} alt={props.imageAlt17} />
                </div>
                <div className="blog-content">
                  <span className="blog-date">
                    {props.text30 ?? (
                      <Fragment>
                        <span className="home1-text68">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_SRqXzg'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                  <h3 className="blog-title">
                    {props.heading20 ?? (
                      <Fragment>
                        <span className="home1-text69">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_b6fPs4'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <p className="blog-excerpt">
                    {props.text31 ?? (
                      <Fragment>
                        <span className="home1-text70">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_UgePV4'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </p>
                  <span className="blog-link">
                    {props.text32 ?? (
                      <Fragment>
                        <span className="home1-text71">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_FBWSFO'),
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
              <span className="blog-btn blog-btn-primary">
                {props.text20 ?? (
                  <Fragment>
                    <span className="home1-text55">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_pq-XF8'),
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
          <div className="video-container">
            <h2 className="video-title">
              {props.heading21 ?? (
                <Fragment>
                  <span className="home1-text72">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_-kQvdq'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </h2>
            <div className="video-wrapper-outer">
              <div className="video-wrapper-inner">
                <iframe
                  src="https://www.youtube.com/embed/VIDEO_ID"
                  title="Food Control Research"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
            <div className="video-text">
              <h3>
                {props.heading22 ?? (
                  <Fragment>
                    <span className="home1-text73">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_q0q3wN'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </h3>
              <p>
                {props.text33 ?? (
                  <Fragment>
                    <span className="home1-text74">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_wLhDm1'),
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
          <div className="partners-container">
            <h2 className="partners-title">
              {props.heading23 ?? (
                <Fragment>
                  <span className="home1-text75">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_xcVjFu'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </h2>
            <div className="partners-grid">
              <div className="partners-logo">
                <img src={props.imageSrc18} alt={props.imageAlt18} />
              </div>
              <div className="partners-logo">
                <img src={props.imageSrc19} alt={props.imageAlt19} />
              </div>
              <div className="partners-logo">
                <img src={props.imageSrc20} alt={props.imageAlt20} />
              </div>
              <div className="partners-logo">
                <img src={props.imageSrc21} alt={props.imageAlt21} />
              </div>
            </div>
          </div>
        </section>
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
  heading12: undefined,
  heading13: undefined,
  text17: undefined,
  heading14: undefined,
  text18: undefined,
  heading15: undefined,
  text19: undefined,
  imageSrc11: 'assets/icons/catering.svg',
  imageAlt11: 'Catering Icon',
  imageSrc12: 'assets/icons/science.svg',
  imageAlt12: 'Science Icon',
  imageSrc13: 'assets/icons/sustainability.svg',
  imageAlt13: 'Sustainability Icon',
  heading16: undefined,
  button4: undefined,
  button5: undefined,
  button6: undefined,
  button7: undefined,
  text20: undefined,
  imageSrc14: 'assets/blog/gluten-contamination.png',
  imageAlt14: 'Gluten Contamination',
  text21: undefined,
  heading17: undefined,
  text22: undefined,
  text23: undefined,
  imageSrc15: 'assets/blog/legislation-effectiveness.jpg',
  imageAlt15: 'Public Catering Legislation',
  text24: undefined,
  heading18: undefined,
  text25: undefined,
  text26: undefined,
  imageSrc16: 'assets/blog/nutrition-conference.jpg',
  imageAlt16: 'Nutrition Conference',
  text27: undefined,
  heading19: undefined,
  text28: undefined,
  text29: undefined,
  imageSrc17: 'assets/blog/food-waste.jpg',
  imageAlt17: 'Food Waste Reduction',
  text30: undefined,
  heading20: undefined,
  text31: undefined,
  text32: undefined,
  heading21: undefined,
  heading22: undefined,
  text33: undefined,
  heading23: undefined,
  imageSrc18: 'assets/partners/indere-logo.png',
  imageAlt18: 'InDeRe',
  imageSrc19: 'assets/partners/kapinfood-logo.png',
  imageAlt19: 'KapInFood',
  imageSrc20: 'assets/partners/soreca-logo.png',
  imageAlt20: 'Soreca',
  imageSrc21: 'assets/partners/creaveg-logo.png',
  imageAlt21: 'Creaveg',
}

Home1.propTypes = {
  heading12: PropTypes.element,
  heading13: PropTypes.element,
  text17: PropTypes.element,
  heading14: PropTypes.element,
  text18: PropTypes.element,
  heading15: PropTypes.element,
  text19: PropTypes.element,
  imageSrc11: PropTypes.string,
  imageAlt11: PropTypes.string,
  imageSrc12: PropTypes.string,
  imageAlt12: PropTypes.string,
  imageSrc13: PropTypes.string,
  imageAlt13: PropTypes.string,
  heading16: PropTypes.element,
  button4: PropTypes.element,
  button5: PropTypes.element,
  button6: PropTypes.element,
  button7: PropTypes.element,
  text20: PropTypes.element,
  imageSrc14: PropTypes.string,
  imageAlt14: PropTypes.string,
  text21: PropTypes.element,
  heading17: PropTypes.element,
  text22: PropTypes.element,
  text23: PropTypes.element,
  imageSrc15: PropTypes.string,
  imageAlt15: PropTypes.string,
  text24: PropTypes.element,
  heading18: PropTypes.element,
  text25: PropTypes.element,
  text26: PropTypes.element,
  imageSrc16: PropTypes.string,
  imageAlt16: PropTypes.string,
  text27: PropTypes.element,
  heading19: PropTypes.element,
  text28: PropTypes.element,
  text29: PropTypes.element,
  imageSrc17: PropTypes.string,
  imageAlt17: PropTypes.string,
  text30: PropTypes.element,
  heading20: PropTypes.element,
  text31: PropTypes.element,
  text32: PropTypes.element,
  heading21: PropTypes.element,
  heading22: PropTypes.element,
  text33: PropTypes.element,
  heading23: PropTypes.element,
  imageSrc18: PropTypes.string,
  imageAlt18: PropTypes.string,
  imageSrc19: PropTypes.string,
  imageAlt19: PropTypes.string,
  imageSrc20: PropTypes.string,
  imageAlt20: PropTypes.string,
  imageSrc21: PropTypes.string,
  imageAlt21: PropTypes.string,
}

export default Home1
