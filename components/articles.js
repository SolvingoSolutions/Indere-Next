import React, { Fragment } from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Articles = (props) => {
  return (
    <>
      <section className="articles-container10 portfolio-section">
        <div>
          <div className="articles-container12">
            <Script
              html={`<script>
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
</script>
`}
            ></Script>
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
                <i className="fa-search fas"></i>
              </button>
            </div>
            <div className="category-filters">
              <button data-filter="all" className="filter-btn active button">
                <span>
                  {props.button ?? (
                    <Fragment>
                      <span className="articles-text45">All</span>
                    </Fragment>
                  )}
                </span>
              </button>
              <button data-filter="catering" className="filter-btn button">
                <span>
                  {props.button1 ?? (
                    <Fragment>
                      <span className="articles-text46">Catering</span>
                    </Fragment>
                  )}
                </span>
              </button>
              <button data-filter="innovations" className="filter-btn button">
                <span>
                  {props.button2 ?? (
                    <Fragment>
                      <span className="articles-text47">
                        {' '}
                        Innovations
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
              <button data-filter="laboratory" className="filter-btn button">
                <span>
                  {props.button3 ?? (
                    <Fragment>
                      <span className="articles-text48">Laboratory</span>
                    </Fragment>
                  )}
                </span>
              </button>
              <button data-filter="management" className="filter-btn button">
                <span>
                  {props.button4 ?? (
                    <Fragment>
                      <span className="articles-text49">
                        {' '}
                        Management system/Innovation
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </Fragment>
                  )}
                </span>
              </button>
              <button data-filter="research" className="filter-btn button">
                <span>
                  {props.button5 ?? (
                    <Fragment>
                      <span className="articles-text50">Research</span>
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
                  <img src={props.imageSrc} alt={props.imageAlt} />
                </div>
                <div className="card-content">
                  <div className="date-tag">
                    <i className="far fa-calendar-alt"></i>
                    <span>
                      {props.text7 ?? (
                        <Fragment>
                          <span className="articles-text63">2024.02.05.</span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <h3 className="card-title">
                    {props.heading1 ?? (
                      <Fragment>
                        <span className="articles-text51">
                          Gluten Contamination in School Kitchens
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <p className="card-text">
                    {props.text1 ?? (
                      <Fragment>
                        <span className="articles-text52">
                          {' '}
                          In Hungary, school caterers are obliged to provide
                          gluten-free meal for students having a medical
                          referral. However, implementing gluten-free catering
                          is not a simple task. In [...]
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
              </div>
            </div>
            <div data-category="catering management" className="portfolio-item">
              <div className="card">
                <div className="card-image">
                  <img src={props.imageSrc1} alt={props.imageAlt1} />
                </div>
                <div className="card-content">
                  <div className="date-tag">
                    <i className="far fa-calendar-alt"></i>
                    <span>
                      {props.text8 ?? (
                        <Fragment>
                          <span className="articles-text64">2023.05.23.</span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <h3 className="card-title">
                    {props.heading2 ?? (
                      <Fragment>
                        <span className="articles-text53">
                          {' '}
                          Measuring the effectiveness of legislation regulating
                          public catering
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <p className="card-text">
                    {props.text2 ?? (
                      <Fragment>
                        <span className="articles-text54">
                          {' '}
                          School catering models have a decisive role in
                          preserving children&apos;s health and establishing
                          adequatenutritional status. Children spend a
                          significant part of their time at school, so [...]
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
              </div>
            </div>
            <div data-category="research catering" className="portfolio-item">
              <div className="card">
                <div className="card-image">
                  <img src={props.imageSrc2} alt={props.imageAlt2} />
                </div>
                <div className="card-content">
                  <div className="date-tag">
                    <i className="far fa-calendar-alt"></i>
                    <span>
                      {props.text9 ?? (
                        <Fragment>
                          <span className="articles-text65">2023.05.10.</span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <h3 className="card-title">
                    {props.heading3 ?? (
                      <Fragment>
                        <span className="articles-text55">
                          {' '}
                          Hungarian Society of Nutrition PhD conference 2023
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <p className="card-text">
                    {props.text3 ?? (
                      <Fragment>
                        <span className="articles-text56">
                          {' '}
                          Assessment of the conditions for gluten-free catering
                          in childcare Gluten sensitivity is a digestive
                          disease, affecting currently 1% of the world
                          population. The only accepted therapy [...]
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
              </div>
            </div>
            <div data-category="research catering" className="portfolio-item">
              <div className="card">
                <div className="card-image">
                  <img src={props.imageSrc3} alt={props.imageAlt3} />
                </div>
                <div className="card-content">
                  <div className="date-tag">
                    <i className="far fa-calendar-alt"></i>
                    <span>
                      {props.text10 ?? (
                        <Fragment>
                          <span className="articles-text66">2023.01.16.</span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <h3 className="card-title">
                    {props.heading4 ?? (
                      <Fragment>
                        <span className="articles-text57">
                          {' '}
                          Food waste reduction in the catering sector
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <p className="card-text">
                    {props.text4 ?? (
                      <Fragment>
                        <span className="articles-text58">
                          {' '}
                          At the InDeRe Institute for Food System Research and
                          Innovation, we work in consortium partnership with the
                          University of Veterinary Medicine Budapest, the
                          Hungarian Food Bank [...]
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
              </div>
            </div>
            <div
              data-category="innovations management"
              className="portfolio-item"
            >
              <div className="card">
                <div className="card-image">
                  <img src={props.imageSrc4} alt={props.imageAlt4} />
                </div>
                <div className="card-content">
                  <div className="date-tag">
                    <i className="far fa-calendar-alt"></i>
                    <span>
                      {props.text11 ?? (
                        <Fragment>
                          <span className="articles-text67">2022.10.01.</span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <h3 className="card-title">
                    {props.heading5 ?? (
                      <Fragment>
                        <span className="articles-text59">
                          &quot;OTKA&quot; Postdoctoral ExcellenceProgramme
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <p className="card-text">
                    {props.text5 ?? (
                      <Fragment>
                        <span className="articles-text60">
                          {' '}
                          András József Tóth, PhD. has been awarded a
                          Postdoctoral Excellence Programme as a Principal
                          Investigator, researching Sustainable Child Nutrition.
                          The host institution is the InDeRe Institute [...]
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
              </div>
            </div>
            <div data-category="research laboratory" className="portfolio-item">
              <div className="card">
                <div className="card-image">
                  <img src={props.imageSrc5} alt={props.imageAlt5} />
                </div>
                <div className="card-content">
                  <div className="date-tag">
                    <i className="far fa-calendar-alt"></i>
                    <span>
                      {props.text12 ?? (
                        <Fragment>
                          <span className="articles-text68">2022.07.17.</span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <h3 className="card-title">
                    {props.heading6 ?? (
                      <Fragment>
                        <span className="articles-text61">
                          {' '}
                          New publication in the journal &quot;Food Quality
                          andPreference&quot;!
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <p className="card-text">
                    {props.text6 ?? (
                      <Fragment>
                        <span className="articles-text62">
                          {' '}
                          &quot;Food liking and consumption in schools:
                          Comparison of questionnaire-based surveys with real
                          consumption&quot; is the title of our new scientific
                          publication in &quot;Food Quality and
                          Preference&quot;. [...]
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
              </div>
            </div>
          </div>
          <div className="articles-container48 no-results">
            <h3>
              {props.heading ?? (
                <Fragment>
                  <span className="articles-text43">
                    No articles match your search criteria
                  </span>
                </Fragment>
              )}
            </h3>
            <p>
              {props.text ?? (
                <Fragment>
                  <span className="articles-text44">
                    Try adjusting your search terms or selecting a different
                    category
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
  heading: undefined,
  text: undefined,
  textinputPlaceholder: 'Search articles...',
  button: undefined,
  button1: undefined,
  button2: undefined,
  button3: undefined,
  button4: undefined,
  button5: undefined,
  imageSrc: 'images/gluten-contamination.jpg',
  imageAlt: 'Gluten Contamination Article',
  heading1: undefined,
  text1: undefined,
  imageSrc1: 'images/school-catering.jpg',
  imageAlt1: 'School Catering',
  heading2: undefined,
  text2: undefined,
  imageSrc2: 'images/allergen-control.jpg',
  imageAlt2: 'Allergen Control',
  heading3: undefined,
  text3: undefined,
  imageSrc3: 'images/food-waste.jpg',
  imageAlt3: 'Food Waste Reduction',
  heading4: undefined,
  text4: undefined,
  imageSrc4: 'images/otka.jpg',
  imageAlt4: 'OTKA Program',
  heading5: undefined,
  text5: undefined,
  imageSrc5: 'images/food-quality.jpg',
  imageAlt5: 'Food Quality Publication',
  heading6: undefined,
  text6: undefined,
  text7: undefined,
  text8: undefined,
  text9: undefined,
  text10: undefined,
  text11: undefined,
  text12: undefined,
}

Articles.propTypes = {
  heading: PropTypes.element,
  text: PropTypes.element,
  textinputPlaceholder: PropTypes.string,
  button: PropTypes.element,
  button1: PropTypes.element,
  button2: PropTypes.element,
  button3: PropTypes.element,
  button4: PropTypes.element,
  button5: PropTypes.element,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  heading1: PropTypes.element,
  text1: PropTypes.element,
  imageSrc1: PropTypes.string,
  imageAlt1: PropTypes.string,
  heading2: PropTypes.element,
  text2: PropTypes.element,
  imageSrc2: PropTypes.string,
  imageAlt2: PropTypes.string,
  heading3: PropTypes.element,
  text3: PropTypes.element,
  imageSrc3: PropTypes.string,
  imageAlt3: PropTypes.string,
  heading4: PropTypes.element,
  text4: PropTypes.element,
  imageSrc4: PropTypes.string,
  imageAlt4: PropTypes.string,
  heading5: PropTypes.element,
  text5: PropTypes.element,
  imageSrc5: PropTypes.string,
  imageAlt5: PropTypes.string,
  heading6: PropTypes.element,
  text6: PropTypes.element,
  text7: PropTypes.element,
  text8: PropTypes.element,
  text9: PropTypes.element,
  text10: PropTypes.element,
  text11: PropTypes.element,
  text12: PropTypes.element,
}

export default Articles
