import React, { Fragment } from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Navbar = (props) => {
  const translate = useTranslations()
  return (
    <>
      <header className={`navbar-header ${props.rootClassName} `}>
        <header data-thq="thq-navbar" className="navbar-navbar">
          <div className="navbar-left">
            <Link href="/">
              <a className="navbar-link10">
                <img
                  alt={props.logoAlt}
                  sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
                  src="/logo-1500h.webp"
                  srcSet="/logo-1500h.webp 1200w, /logo-tablet.webp 800w, /logo-mobile.webp 480w"
                  className="navbar-logo1"
                />
              </a>
            </Link>
          </div>
          <div className="navbar-container1">
            <div data-thq="thq-navbar-btn-group" className="navbar-right">
              <nav className="navbar-links">
                <Link href="/">
                  <a className="navbar-link12 nav-link">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Link_yc9l2k'),
                      }}
                    ></span>
                  </a>
                </Link>
                <Link href="/about-us">
                  <a className="navbar-link14 nav-link">
                    {props.link5 ?? (
                      <Fragment>
                        <span className="navbar-text19">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_XKSv8C'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </a>
                </Link>
                <span className="navbar-link15 nav-link">
                  {props.link4 ?? (
                    <Fragment>
                      <span className="navbar-text18">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_Yx-Q4z'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
                <Link href="/scientific-projects">
                  <a className="navbar-link17 nav-link">
                    {props.link1 ?? (
                      <Fragment>
                        <span className="navbar-text22">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_oFPqiK'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </a>
                </Link>
                <span className="navbar-link18 nav-link">
                  {props.link2 ?? (
                    <Fragment>
                      <span className="navbar-text16">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_6Dgtdi'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
                <Link href="/news">
                  <a className="navbar-link20 nav-link">
                    {props.link3 ?? (
                      <Fragment>
                        <span className="navbar-text14">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_ZbO4ZF'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </a>
                </Link>
              </nav>
              <nav className="navbar-language-selector">
                <a href="/en/" className="navbar-link21 nav-link">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('Link_KikdwW'),
                    }}
                  ></span>
                </a>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_WasigG'),
                    }}
                  ></span>
                </span>
                <a href="/hu/" className="navbar-link23 nav-link">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_nA6Ihy'),
                    }}
                  ></span>
                </a>
              </nav>
            </div>
          </div>
          <div data-thq="thq-burger-menu" className="navbar-burger-menu">
            <svg viewBox="0 0 1024 1024" className="navbar-icon1">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="navbar-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="navbar-nav1"
            >
              <div className="navbar-container2">
                <img
                  alt={props.logoAlt1}
                  sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
                  src="/logo-1500h.webp"
                  srcSet="/logo-1500h.webp 1200w, /logo-tablet.webp 800w, /logo-mobile.webp 480w"
                  className="navbar-logo2"
                />
                <div data-thq="thq-close-menu" className="navbar-menu-close">
                  <svg viewBox="0 0 1024 1024" className="navbar-icon3">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="navbar-nav2"
              >
                <span className="navbar-text10">
                  {props.text2 ?? (
                    <Fragment>
                      <span className="navbar-text17">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_ztyu10'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
                <span className="navbar-text11">
                  {props.text3 ?? (
                    <Fragment>
                      <span className="navbar-text15">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_It6yL4'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
                <span className="navbar-text12">
                  {props.text4 ?? (
                    <Fragment>
                      <span className="navbar-text21">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_Yi1O6j'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
                <span className="navbar-text13">
                  {props.text5 ?? (
                    <Fragment>
                      <span className="navbar-text20">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_xHbHJl'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </nav>
            </div>
          </div>
        </header>
      </header>
      <style jsx>
        {`
          .navbar-header {
            width: 100%;
            display: flex;
            position: relative;
            justify-content: center;
          }
          .navbar-navbar {
            width: 100%;
            display: flex;
            z-index: 100;
            max-width: 1440px;
            align-items: center;
            padding-top: var(--dl-layout-space-oneandhalfunits);
            padding-left: var(--dl-layout-space-fiveunits);
            padding-right: var(--dl-layout-space-fiveunits);
            padding-bottom: var(--dl-layout-space-oneandhalfunits);
            justify-content: space-between;
          }
          .navbar-left {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .navbar-link10 {
            display: contents;
          }
          .navbar-logo1 {
            width: 165px;
            object-fit: cover;
            text-decoration: none;
          }
          .navbar-container1 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: space-between;
            flex-direction: column;
          }
          .navbar-right {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .navbar-links {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .navbar-link12 {
            cursor: pointer;
            font-style: normal;
            transition: 0.3s;
            font-weight: 500;
            line-height: 24px;
            text-decoration: none;
          }
          .navbar-link12:hover {
            opacity: 0.5;
          }
          .navbar-link14 {
            cursor: pointer;
            font-style: normal;
            transition: 0.3s;
            font-weight: 500;
            line-height: 24px;
            text-decoration: none;
          }
          .navbar-link14:hover {
            opacity: 0.5;
          }
          .navbar-link15 {
            cursor: pointer;
            font-style: normal;
            transition: 0.3s;
            font-weight: 500;
            line-height: 24px;
          }
          .navbar-link15:hover {
            opacity: 0.5;
          }
          .navbar-link17 {
            cursor: pointer;
            font-style: normal;
            transition: 0.3s;
            font-weight: 500;
            line-height: 24px;
            text-decoration: none;
          }
          .navbar-link17:hover {
            opacity: 0.5;
          }
          .navbar-link18 {
            cursor: pointer;
            font-style: normal;
            transition: 0.3s;
            font-weight: 500;
            line-height: 24px;
          }
          .navbar-link18:hover {
            opacity: 0.5;
          }
          .navbar-link20 {
            cursor: pointer;
            font-style: normal;
            transition: 0.3s;
            font-weight: 500;
            line-height: 24px;
            text-decoration: none;
          }
          .navbar-link20:hover {
            opacity: 0.5;
          }
          .navbar-language-selector {
            gap: 1rem;
            display: flex;
            align-items: center;
            margin-left: 1rem;
            justify-content: center;
          }
          .navbar-link21 {
            cursor: pointer;
            font-style: normal;
            transition: 0.3s;
            font-weight: 500;
            line-height: 24px;
            text-decoration: none;
          }
          .navbar-link21:hover {
            opacity: 0.5;
          }
          .navbar-link23 {
            cursor: pointer;
            font-style: normal;
            transition: 0.3s;
            font-weight: 500;
            line-height: 24px;
            text-decoration: none;
          }
          .navbar-link23:hover {
            opacity: 0.5;
          }
          .navbar-burger-menu {
            display: none;
            align-items: center;
            justify-content: center;
          }
          .navbar-icon1 {
            width: var(--dl-layout-size-xsmall);
            height: var(--dl-layout-size-xsmall);
          }
          .navbar-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: 32px;
            z-index: 1000;
            position: fixed;
            flex-direction: column;
            justify-content: space-between;
            background-color: #fff;
          }
          .navbar-nav1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .navbar-container2 {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-layout-space-threeunits);
            justify-content: space-between;
          }
          .navbar-logo2 {
            width: 165px;
            object-fit: cover;
          }
          .navbar-menu-close {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .navbar-icon3 {
            width: var(--dl-layout-size-xsmall);
            height: var(--dl-layout-size-xsmall);
          }
          .navbar-nav2 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .navbar-text10 {
            margin-bottom: var(--dl-layout-space-unit);
          }
          .navbar-text11 {
            margin-bottom: var(--dl-layout-space-unit);
          }
          .navbar-text12 {
            margin-bottom: var(--dl-layout-space-unit);
          }
          .navbar-text13 {
            margin-bottom: var(--dl-layout-space-unit);
          }
          .navbar-text14 {
            display: inline-block;
          }
          .navbar-text15 {
            display: inline-block;
          }
          .navbar-text16 {
            display: inline-block;
          }
          .navbar-text17 {
            display: inline-block;
          }
          .navbar-text18 {
            display: inline-block;
          }
          .navbar-text19 {
            display: inline-block;
          }
          .navbar-text20 {
            display: inline-block;
          }
          .navbar-text21 {
            display: inline-block;
          }
          .navbar-text22 {
            display: inline-block;
          }

          @media (max-width: 1600px) {
            .navbar-link21 {
              font-style: normal;
              font-weight: 500;
              line-height: 24px;
              text-decoration: none;
            }
          }
          @media (max-width: 991px) {
            .navbar-navbar {
              z-index: 1000;
            }
            .navbar-right {
              display: none;
            }
            .navbar-links {
              display: none;
            }
            .navbar-language-selector {
              display: none;
            }
            .navbar-burger-menu {
              display: flex;
              padding: var(--dl-layout-space-unit);
              border-radius: var(--dl-layout-radius-round);
              background-color: var(--dl-others-imported-primary-color);
            }
            .navbar-icon1 {
              fill: white;
            }
          }
          @media (max-width: 767px) {
            .navbar-navbar {
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
              padding-bottom: var(--dl-layout-space-unit);
            }
            .navbar-burger-menu {
              display: flex;
            }
          }
          @media (max-width: 479px) {
            .navbar-navbar {
              padding: var(--dl-layout-space-unit);
            }
            .navbar-mobile-menu {
              padding: 16px;
            }
          }
        `}
      </style>
    </>
  )
}

Navbar.defaultProps = {
  link3: undefined,
  text3: undefined,
  link2: undefined,
  logoAlt: 'image',
  text2: undefined,
  link4: undefined,
  logoAlt1: 'image',
  rootClassName: '',
  link5: undefined,
  text5: undefined,
  text4: undefined,
  link1: undefined,
}

Navbar.propTypes = {
  link3: PropTypes.element,
  text3: PropTypes.element,
  link2: PropTypes.element,
  logoAlt: PropTypes.string,
  text2: PropTypes.element,
  link4: PropTypes.element,
  logoAlt1: PropTypes.string,
  rootClassName: PropTypes.string,
  link5: PropTypes.element,
  text5: PropTypes.element,
  text4: PropTypes.element,
  link1: PropTypes.element,
}

export default Navbar
