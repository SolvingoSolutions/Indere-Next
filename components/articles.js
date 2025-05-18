import React, { Fragment } from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Articles = (props) => {
  const translate = useTranslations()
  return (
    <>
      <section className="articles-container10 portfolio-section">
        <div>
          <div className="articles-container12">
            <React.Fragment>
              <React.Fragment>
                <Script>{`
  const fontAwesome = document.createElement("link")
  fontAwesome.rel = "stylesheet"
  fontAwesome.href =
    "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
  document.head.appendChild(fontAwesome)
  document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".filter-btn")
    const portfolioItems = document.querySelectorAll(".portfolio-item")
    const searchInput = document.getElementById("searchInput")
    const noResults = document.querySelector(".no-results")
    function filterItems() {
      const activeCategory = document
        .querySelector(".filter-btn.active")
        .getAttribute("data-filter")
      const searchTerm = searchInput.value.toLowerCase()
      let foundItems = false
      portfolioItems.forEach((item) => {
        const categories = item.getAttribute("data-filter").split(" ")
        const title = item
          .querySelector(".card-title")
          .textContent.toLowerCase()
        const text = item.querySelector(".card-text").textContent.toLowerCase()
        const content = title + " " + text
        const matchesCategory =
          activeCategory === "all" || categories.includes(activeCategory)
        const matchesSearch = searchTerm === "" || content.includes(searchTerm)
        if (matchesCategory && matchesSearch) {
          item.style.display = "block"
          foundItems = true
        } else {
          item.style.display = "none"
        }
      })
      noResults.style.display = foundItems ? "none" : "block"
    }
    filterButtons.forEach((button) => {
      button.addEventListener("click", function () {
        filterButtons.forEach((btn) => btn.classList.remove("active"))
        this.classList.add("active")
        filterItems()
      })
    })
    searchInput.addEventListener("input", filterItems)
  })
`}</Script>
              </React.Fragment>
            </React.Fragment>
          </div>
        </div>
        <div className="container">
          <div className="filter-container">
            <div className="search-wrapper">
              <input
                type="text"
                id="searchInput"
                placeholder={props.textinputPlaceholder}
                className="search-input input"
              />
              <button className="search-btn button">
                <i className="fas fa-search"></i>
              </button>
            </div>
            <div className="category-filters">
              <button data-filter="all" className="active filter-btn button">
                <span>
                  {props.button ?? (
                    <Fragment>
                      <span className="articles-text44">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_IiwYDG'),
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
                      <span className="articles-text50">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_0rRwWA'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
              <button data-filter="innovations" className="filter-btn button">
                <span>
                  {props.button2 ?? (
                    <Fragment>
                      <span className="articles-text47">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_RzLRhc'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
              <button data-filter="laboratory" className="filter-btn button">
                <span>
                  {props.button3 ?? (
                    <Fragment>
                      <span className="articles-text58">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_62WRZf'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
              <button data-filter="management" className="filter-btn button">
                <span>
                  {props.button4 ?? (
                    <Fragment>
                      <span className="articles-text62">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_qWEQXq'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
              <button data-filter="research" className="filter-btn button">
                <span>
                  {props.button5 ?? (
                    <Fragment>
                      <span className="articles-text59">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_iptxbB'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
          </div>
          <div className="portfolio-grid">
            <div data-category="catering laboratory" className="portfolio-item">
              <div className="card">
                <div className="card-image">
                  <img alt={props.imageAlt} src={props.imageSrc} />
                </div>
                <div className="card-content">
                  <div className="date-tag">
                    <i className="far fa-calendar-alt"></i>
                    <span>
                      {props.text7 ?? (
                        <Fragment>
                          <span className="articles-text52">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_noD4TA'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <h3 className="card-title">
                    {props.heading1 ?? (
                      <Fragment>
                        <span className="articles-text65">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_992iSq'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <p className="card-text">
                    {props.text1 ?? (
                      <Fragment>
                        <span className="articles-text53">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_ZYO_HU'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </p>
                </div>
              </div>
            </div>
            <div data-category="catering management" className="portfolio-item">
              <div className="card">
                <div className="card-image">
                  <img alt={props.imageAlt1} src={props.imageSrc1} />
                </div>
                <div className="card-content">
                  <div className="date-tag">
                    <i className="far fa-calendar-alt"></i>
                    <span>
                      {props.text8 ?? (
                        <Fragment>
                          <span className="articles-text63">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_peB0wC'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <h3 className="card-title">
                    {props.heading2 ?? (
                      <Fragment>
                        <span className="articles-text55">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_D4a8a8'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <p className="card-text">
                    {props.text2 ?? (
                      <Fragment>
                        <span className="articles-text57">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_pT9BD9'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </p>
                </div>
              </div>
            </div>
            <div data-category="research catering" className="portfolio-item">
              <div className="card">
                <div className="card-image">
                  <img alt={props.imageAlt2} src={props.imageSrc2} />
                </div>
                <div className="card-content">
                  <div className="date-tag">
                    <i className="far fa-calendar-alt"></i>
                    <span>
                      {props.text9 ?? (
                        <Fragment>
                          <span className="articles-text48">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_sEp3Bl'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <h3 className="card-title">
                    {props.heading3 ?? (
                      <Fragment>
                        <span className="articles-text45">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_sRzAB5'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <p className="card-text">
                    {props.text3 ?? (
                      <Fragment>
                        <span className="articles-text49">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_roJ0b0'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </p>
                </div>
              </div>
            </div>
            <div data-category="research catering" className="portfolio-item">
              <div className="card">
                <div className="card-image">
                  <img alt={props.imageAlt3} src={props.imageSrc3} />
                </div>
                <div className="card-content">
                  <div className="date-tag">
                    <i className="far fa-calendar-alt"></i>
                    <span>
                      {props.text10 ?? (
                        <Fragment>
                          <span className="articles-text61">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_RqDI0f'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <h3 className="card-title">
                    {props.heading4 ?? (
                      <Fragment>
                        <span className="articles-text46">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_VNfx6e'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <p className="card-text">
                    {props.text4 ?? (
                      <Fragment>
                        <span className="articles-text43">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_AK8zeC'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </p>
                </div>
              </div>
            </div>
            <div
              data-category="innovations management"
              className="portfolio-item"
            >
              <div className="card">
                <div className="card-image">
                  <img alt={props.imageAlt4} src={props.imageSrc4} />
                </div>
                <div className="card-content">
                  <div className="date-tag">
                    <i className="far fa-calendar-alt"></i>
                    <span>
                      {props.text11 ?? (
                        <Fragment>
                          <span className="articles-text66">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_XLYnYW'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <h3 className="card-title">
                    {props.heading5 ?? (
                      <Fragment>
                        <span className="articles-text67">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_7uFhEt'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <p className="card-text">
                    {props.text5 ?? (
                      <Fragment>
                        <span className="articles-text54">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_USehW0'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </p>
                </div>
              </div>
            </div>
            <div data-category="research laboratory" className="portfolio-item">
              <div className="card">
                <div className="card-image">
                  <img alt={props.imageAlt5} src={props.imageSrc5} />
                </div>
                <div className="card-content">
                  <div className="date-tag">
                    <i className="far fa-calendar-alt"></i>
                    <span>
                      {props.text12 ?? (
                        <Fragment>
                          <span className="articles-text64">
                            <span
                              dangerouslySetInnerHTML={{
                                __html: translate.raw('text_OyWkAb'),
                              }}
                            ></span>
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <h3 className="card-title">
                    {props.heading6 ?? (
                      <Fragment>
                        <span className="articles-text56">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_nG1maq'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <p className="card-text">
                    {props.text6 ?? (
                      <Fragment>
                        <span className="articles-text51">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_raVisR'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="articles-container48 no-results">
            <h3>
              {props.heading ?? (
                <Fragment>
                  <span className="articles-text60">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_xQ9EMy'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </h3>
            <p>
              {props.text ?? (
                <Fragment>
                  <span className="articles-text68">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_xmIJTV'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </p>
          </div>
        </div>
      </section>
      <style jsx>
        {`
          .articles-container10 {
            position: relative;
          }
          .articles-container12 {
            display: contents;
          }
          .articles-container48 {
            display: none;
          }
          .articles-text43 {
            display: inline-block;
          }
          .articles-text44 {
            display: inline-block;
          }
          .articles-text45 {
            display: inline-block;
          }
          .articles-text46 {
            display: inline-block;
          }
          .articles-text47 {
            display: inline-block;
          }
          .articles-text48 {
            display: inline-block;
          }
          .articles-text49 {
            display: inline-block;
          }
          .articles-text50 {
            display: inline-block;
          }
          .articles-text51 {
            display: inline-block;
          }
          .articles-text52 {
            display: inline-block;
          }
          .articles-text53 {
            display: inline-block;
          }
          .articles-text54 {
            display: inline-block;
          }
          .articles-text55 {
            display: inline-block;
          }
          .articles-text56 {
            display: inline-block;
          }
          .articles-text57 {
            display: inline-block;
          }
          .articles-text58 {
            display: inline-block;
          }
          .articles-text59 {
            display: inline-block;
          }
          .articles-text60 {
            display: inline-block;
          }
          .articles-text61 {
            display: inline-block;
          }
          .articles-text62 {
            display: inline-block;
          }
          .articles-text63 {
            display: inline-block;
          }
          .articles-text64 {
            display: inline-block;
          }
          .articles-text65 {
            display: inline-block;
          }
          .articles-text66 {
            display: inline-block;
          }
          .articles-text67 {
            display: inline-block;
          }
          .articles-text68 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

Articles.defaultProps = {
  text4: undefined,
  button: undefined,
  heading3: undefined,
  heading4: undefined,
  button2: undefined,
  text9: undefined,
  text3: undefined,
  imageSrc5: 'images/food-quality.jpg',
  button1: undefined,
  imageAlt1: 'School Catering',
  text6: undefined,
  imageAlt: 'Gluten Contamination Article',
  imageSrc1: 'images/school-catering.jpg',
  text7: undefined,
  text1: undefined,
  imageAlt3: 'Food Waste Reduction',
  imageSrc3: 'images/food-waste.jpg',
  text5: undefined,
  heading2: undefined,
  heading6: undefined,
  text2: undefined,
  button3: undefined,
  button5: undefined,
  heading: undefined,
  imageAlt5: 'Food Quality Publication',
  text10: undefined,
  imageSrc4: 'images/otka.jpg',
  button4: undefined,
  textinputPlaceholder: 'Search articles...',
  imageSrc2: 'images/allergen-control.jpg',
  text8: undefined,
  imageAlt4: 'OTKA Program',
  imageSrc: 'images/gluten-contamination.jpg',
  text12: undefined,
  heading1: undefined,
  text11: undefined,
  heading5: undefined,
  text: undefined,
  imageAlt2: 'Allergen Control',
}

Articles.propTypes = {
  text4: PropTypes.element,
  button: PropTypes.element,
  heading3: PropTypes.element,
  heading4: PropTypes.element,
  button2: PropTypes.element,
  text9: PropTypes.element,
  text3: PropTypes.element,
  imageSrc5: PropTypes.string,
  button1: PropTypes.element,
  imageAlt1: PropTypes.string,
  text6: PropTypes.element,
  imageAlt: PropTypes.string,
  imageSrc1: PropTypes.string,
  text7: PropTypes.element,
  text1: PropTypes.element,
  imageAlt3: PropTypes.string,
  imageSrc3: PropTypes.string,
  text5: PropTypes.element,
  heading2: PropTypes.element,
  heading6: PropTypes.element,
  text2: PropTypes.element,
  button3: PropTypes.element,
  button5: PropTypes.element,
  heading: PropTypes.element,
  imageAlt5: PropTypes.string,
  text10: PropTypes.element,
  imageSrc4: PropTypes.string,
  button4: PropTypes.element,
  textinputPlaceholder: PropTypes.string,
  imageSrc2: PropTypes.string,
  text8: PropTypes.element,
  imageAlt4: PropTypes.string,
  imageSrc: PropTypes.string,
  text12: PropTypes.element,
  heading1: PropTypes.element,
  text11: PropTypes.element,
  heading5: PropTypes.element,
  text: PropTypes.element,
  imageAlt2: PropTypes.string,
}

export default Articles
