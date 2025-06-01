import React, { Fragment } from 'react'
import Link from 'next/link'

import { DataProvider, Repeater } from '@teleporthq/react-components'
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
                  <span className="home-content-text44">
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
                  <span className="home-content-text46">
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
              <Link href="/scientific-projects">
                <a>
                  <span className="home-content-text12 hero-btn hero-btn-primary">
                    {props.text1 ?? (
                      <Fragment>
                        <span className="home-content-text41">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_iJzrCe'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </a>
              </Link>
              <Link href="/about-us">
                <a>
                  <span className="home-content-text13 hero-btn hero-btn-secondary">
                    {props.text2 ?? (
                      <Fragment>
                        <span className="home-content-text42">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_XJmIuu'),
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
        </div>
        <section className="partners-section">
          <div className="partners-grid home-content-container15">
            <img
              alt={props.imageAlt}
              src={props.imageSrc}
              className="home-content-image1"
            />
            <img
              alt={props.imageAlt1}
              src={props.imageSrc1}
              className="home-content-image2"
            />
            <img
              alt={props.imageAlt2}
              src={props.imageSrc2}
              className="home-content-image3"
            />
            <img
              alt={props.imageAlt3}
              src={props.imageSrc3}
              className="home-content-image4"
            />
          </div>
        </section>
        <section className="research-section">
          <div className="research-container">
            <h2 className="research-title">
              {props.heading1 ?? (
                <Fragment>
                  <span className="home-content-text31">
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
                      <span className="home-content-text34">
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
                      <span className="home-content-text35">
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
                      <span className="home-content-text33">
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
                      <span className="home-content-text43">
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
                      <span className="home-content-text48">
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
                      <span className="home-content-text45">
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
                  <span className="home-content-text39">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_PpBK1c'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </h2>
            <DataProvider
              fetchData={(params) =>
                fetch('/api/get-entities-with-pagination1', {
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  method: 'POST',
                  body: JSON.stringify(params),
                })
                  .then((res) => res.json())
                  .then((data) => data)
              }
              renderSuccess={(params) => (
                <Fragment>
                  <div className="news-grid">
                    <Repeater
                      items={params}
                      renderItem={(context_mc7j9y) => (
                        <Fragment>
                          <article className="news-card">
                            <div className="news-image">
                              <img
                                alt={props.imageAlt11}
                                src={context_mc7j9y?.heroImage?.url}
                              />
                              <span className="news-tag">
                                {context_mc7j9y?.tags}
                              </span>
                            </div>
                            <div className="news-content">
                              <h3 className="news-title">
                                {context_mc7j9y?.title}
                              </h3>
                              <p className="news-excerpt">
                                {props.text21 ?? (
                                  <Fragment>
                                    <span className="home-content-text36">
                                      <span
                                        dangerouslySetInnerHTML={{
                                          __html: translate.raw('text_ofUvSy'),
                                        }}
                                      ></span>
                                    </span>
                                  </Fragment>
                                )}
                              </p>
                              <div className="news-meta">
                                <span className="news-date">
                                  {context_mc7j9y?.createdAt}
                                </span>
                                <Link href={`/news/${context_mc7j9y?.slug}`}>
                                  <a>
                                    <span className="home-content-text26 news-link">
                                      {props.text22 ?? (
                                        <Fragment>
                                          <span className="home-content-text40">
                                            <span
                                              dangerouslySetInnerHTML={{
                                                __html:
                                                  translate.raw('text_goQhcL'),
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
                          </article>
                        </Fragment>
                      )}
                    />
                  </div>
                </Fragment>
              )}
              params={{
                projectId: '1f01710c-9be4-418c-bc66-6fd9fc8b8d20',
                query:
                  'query MyQuery($first: Int, $after: String, $locale: String){allNews(locale: $locale,first: $first, after: $after){pageInfo{endCursor,hasNextPage,hasPreviousPage}edges{node{_meta{createdAt updatedAt id}body{json connections{__typename  }}slug tags title heroImage{__typename _meta{createdAt updatedAt id}description height id src title width}imageTitle}}}}',
                locale: props?.locale ?? '',
                page: 1,
                perPage: 6,
              }}
            />
            <div className="blog-cta">
              <Link href="/news">
                <a>
                  <span className="home-content-text27 blog-btn blog-btn-primary">
                    {props.text3 ?? (
                      <Fragment>
                        <span className="home-content-text32">
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
            <h2 className="home-content-text28 video-title">
              {props.heading3 ?? (
                <Fragment>
                  <span className="home-content-text38">
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
                    <span className="home-content-text37">
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
                    <span className="home-content-text47">
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
          .home-content-text12 {
            text-decoration: none;
          }
          .home-content-text13 {
            text-decoration: none;
          }
          .home-content-image1 {
            height: 100%;
          }
          .home-content-image2 {
            height: 100%;
          }
          .home-content-image3 {
            height: 100%;
          }
          .home-content-image4 {
            height: 100%;
          }
          .home-content-container23 {
            padding-left: 20px;
            padding-right: 20px;
          }
          .home-content-text26 {
            text-decoration: none;
          }
          .home-content-text27 {
            text-decoration: none;
          }
          .home-content-text28 {
            margin-bottom: 2rem;
          }
          .home-content-text31 {
            display: inline-block;
          }
          .home-content-text32 {
            display: inline-block;
          }
          .home-content-text33 {
            display: inline-block;
          }
          .home-content-text34 {
            display: inline-block;
          }
          .home-content-text35 {
            display: inline-block;
          }
          .home-content-text36 {
            display: inline-block;
          }
          .home-content-text37 {
            display: inline-block;
          }
          .home-content-text38 {
            display: inline-block;
          }
          .home-content-text39 {
            display: inline-block;
          }
          .home-content-text40 {
            display: inline-block;
          }
          .home-content-text41 {
            display: inline-block;
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
  heading1: undefined,
  imageAlt5: 'Science Icon',
  imageAlt1: 'KapInFood',
  imageAlt: 'InDeRe',
  text3: undefined,
  heading6: undefined,
  heading5: undefined,
  imageAlt2: 'Soreca',
  text5: undefined,
  text21: undefined,
  heading4: undefined,
  imageSrc2: '/Partners/partner3-1500w.webp',
  heading3: undefined,
  heading2: undefined,
  text22: undefined,
  imageSrc6: '/Cards/sustainability-200h.webp',
  imageSrc5: '/Cards/food-safety-200h.webp',
  imageAlt4: 'Catering Icon',
  text1: undefined,
  imageAlt6: 'Sustainability Icon',
  imageSrc4: '/Cards/school-nutrition-200h.webp',
  text2: undefined,
  imageAlt11: 'School Catering Regulations',
  imageSrc: '/Partners/partner1-1500w.webp',
  imageSrc1: '/Partners/partner2-1500w.webp',
  text6: undefined,
  imageAlt3: 'Creaveg',
  heading: undefined,
  imageSrc3: '/Partners/partner4-1500w.webp',
  text7: undefined,
  text: undefined,
  text4: undefined,
  heading7: undefined,
}

HomeContent.propTypes = {
  heading1: PropTypes.element,
  imageAlt5: PropTypes.string,
  imageAlt1: PropTypes.string,
  imageAlt: PropTypes.string,
  text3: PropTypes.element,
  heading6: PropTypes.element,
  heading5: PropTypes.element,
  imageAlt2: PropTypes.string,
  text5: PropTypes.element,
  text21: PropTypes.element,
  heading4: PropTypes.element,
  imageSrc2: PropTypes.string,
  heading3: PropTypes.element,
  heading2: PropTypes.element,
  text22: PropTypes.element,
  imageSrc6: PropTypes.string,
  imageSrc5: PropTypes.string,
  imageAlt4: PropTypes.string,
  text1: PropTypes.element,
  imageAlt6: PropTypes.string,
  imageSrc4: PropTypes.string,
  text2: PropTypes.element,
  imageAlt11: PropTypes.string,
  imageSrc: PropTypes.string,
  imageSrc1: PropTypes.string,
  text6: PropTypes.element,
  imageAlt3: PropTypes.string,
  heading: PropTypes.element,
  imageSrc3: PropTypes.string,
  text7: PropTypes.element,
  text: PropTypes.element,
  text4: PropTypes.element,
  heading7: PropTypes.element,
}

export default HomeContent
