import React, { Fragment } from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

import { useGlobalContext } from '@/global-context'

const Header = (props) => {
  const translate = useTranslations()
  const { locale, locales } = useGlobalContext()
  return (
    <>
      <header className="header-header">
        <header data-thq="thq-navbar" className="header-navbar">
          <div className="header-left">
            <img
              alt={props.logoAlt}
              src="/logo-200h.jpg"
              className="header-logo"
            />
          </div>
          <div className="header-container1">
            <div data-thq="thq-navbar-btn-group" className="header-right">
              <nav className="header-links">
                <Link href="/home">
                  <a className="header-link2">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Link_yc9l2k'),
                      }}
                    ></span>
                  </a>
                </Link>
                <Link href="/">
                  <a className="header-link4">
                    {props.link5 ?? (
                      <Fragment>
                        <span className="header-text21">
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
                <span className="header-link5">
                  {props.link4 ?? (
                    <Fragment>
                      <span className="header-text20">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_Yx-Q4z'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
                <span className="header-link6">
                  {props.link1 ?? (
                    <Fragment>
                      <span className="header-text24">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_oFPqiK'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
                <span className="header-link7">
                  {props.link2 ?? (
                    <Fragment>
                      <span className="header-text18">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_6Dgtdi'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
                <span className="header-link8">
                  {props.link3 ?? (
                    <Fragment>
                      <span className="header-text15">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_ZbO4ZF'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
              </nav>
              <div
                data-thq="thq-dropdown"
                className="header-language-switcher list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="header-language-switcher-toggle"
                >
                  <span className="header-language-name">
                    {locale?.['name']}
                  </span>
                  <div
                    data-thq="thq-dropdown-arrow"
                    className="header-dropdown-arrow"
                  >
                    <svg viewBox="0 0 1024 1024" className="header-icon1">
                      <path d="M426 726v-428l214 214z"></path>
                    </svg>
                  </div>
                </div>
                <ul
                  data-thq="thq-dropdown-list"
                  className="header-language-switcher-list"
                >
                  <div>
                    {locales.map((all_languages, index) => (
                      <Fragment key={index}>
                        <div className="header-language-switcher-item">
                          <a href={props.languageLinkUrl}>
                            {all_languages?.name}
                          </a>
                        </div>
                      </Fragment>
                    ))}
                  </div>
                </ul>
              </div>
            </div>
          </div>
          <div data-thq="thq-burger-menu" className="header-burger-menu">
            <svg viewBox="0 0 1024 1024" className="header-icon3">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="header-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="header-nav1"
            >
              <div className="header-container3">
                <img
                  alt={props.imageAlt2}
                  src={props.imageSrc2}
                  className="header-image1"
                />
                <div data-thq="thq-close-menu" className="header-menu-close">
                  <svg viewBox="0 0 1024 1024" className="header-icon5">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="header-nav2"
              >
                <span className="header-text10">
                  {props.text2 ?? (
                    <Fragment>
                      <span className="header-text19">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_ztyu10'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
                <span className="header-text11">
                  {props.text3 ?? (
                    <Fragment>
                      <span className="header-text16">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_It6yL4'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
                <span className="header-text12">
                  {props.text4 ?? (
                    <Fragment>
                      <span className="header-text23">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_Yi1O6j'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
                <span className="header-text13">
                  {props.text5 ?? (
                    <Fragment>
                      <span className="header-text22">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_xHbHJl'),
                          }}
                        ></span>
                      </span>
                    </Fragment>
                  )}
                </span>
                <a href="#book" className="header-book button button-main">
                  <img
                    alt={props.imageAlt3}
                    src={props.imageSrc3}
                    className="header-image2"
                  />
                  <span className="header-text14">
                    {props.text6 ?? (
                      <Fragment>
                        <span className="header-text17">
                          <span
                            dangerouslySetInnerHTML={{
                              __html: translate.raw('text_azIbCS'),
                            }}
                          ></span>
                        </span>
                      </Fragment>
                    )}
                  </span>
                </a>
              </nav>
            </div>
          </div>
        </header>
      </header>
      <style jsx>
        {`
          .header-header {
            width: 100%;
            display: flex;
            position: relative;
            justify-content: center;
          }
          .header-navbar {
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
          .header-left {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .header-logo {
            width: 165px;
            object-fit: cover;
          }
          .header-container1 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: space-between;
            flex-direction: column;
          }
          .header-right {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .header-links {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .header-link2 {
            cursor: pointer;
            font-style: normal;
            transition: 0.3s;
            font-weight: 500;
            line-height: 24px;
            text-decoration: none;
          }
          .header-link2:hover {
            opacity: 0.5;
          }
          .header-link4 {
            cursor: pointer;
            font-style: normal;
            transition: 0.3s;
            font-weight: 500;
            line-height: 24px;
            text-decoration: none;
          }
          .header-link4:hover {
            opacity: 0.5;
          }
          .header-link5 {
            cursor: pointer;
            font-style: normal;
            transition: 0.3s;
            font-weight: 500;
            line-height: 24px;
          }
          .header-link5:hover {
            opacity: 0.5;
          }
          .header-link6 {
            cursor: pointer;
            font-style: normal;
            transition: 0.3s;
            font-weight: 500;
            line-height: 24px;
          }
          .header-link6:hover {
            opacity: 0.5;
          }
          .header-link7 {
            cursor: pointer;
            font-style: normal;
            transition: 0.3s;
            font-weight: 500;
            line-height: 24px;
          }
          .header-link7:hover {
            opacity: 0.5;
          }
          .header-link8 {
            cursor: pointer;
            font-style: normal;
            transition: 0.3s;
            font-weight: 500;
            line-height: 24px;
          }
          .header-link8:hover {
            opacity: 0.5;
          }
          .header-language-switcher {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-layout-radius-radius2);
          }
          .header-language-switcher-toggle {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            align-items: center;
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: var(--dl-layout-space-unit);
            border-radius: var(--dl-layout-radius-radius2);
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: var(--dl-layout-space-halfunit);
          }
          .header-language-name {
            font-size: 14px;
            font-style: normal;
            text-align: center;
            font-weight: 500;
            margin-right: 4px;
            vertical-align: middle;
          }
          .header-dropdown-arrow {
            transition: 0.3s;
          }
          .header-icon1 {
            width: 18px;
            height: 18px;
            transition: 0.3s;
          }
          .header-language-switcher-list {
            left: 0%;
            width: max-content;
            display: none;
            z-index: 100;
            position: absolute;
            min-width: 100%;
            transition: 0.3s;
            align-items: stretch;
            border-color: #d9d9d9;
            border-width: 1px;
            border-radius: var(--dl-layout-radius-radius4);
            flex-direction: column;
            list-style-type: none;
            list-style-position: inside;
          }
          .header-language-switcher-item {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: var(--dl-layout-space-unit);
            padding-right: var(--dl-layout-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-halfunit);
            background-color: #fff;
          }
          .header-burger-menu {
            display: none;
            align-items: center;
            justify-content: center;
          }
          .header-icon3 {
            width: var(--dl-layout-size-xsmall);
            height: var(--dl-layout-size-xsmall);
          }
          .header-mobile-menu {
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
          .header-nav1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .header-container3 {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-layout-space-threeunits);
            justify-content: space-between;
          }
          .header-image1 {
            height: 2rem;
          }
          .header-menu-close {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .header-icon5 {
            width: var(--dl-layout-size-xsmall);
            height: var(--dl-layout-size-xsmall);
          }
          .header-nav2 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .header-text10 {
            margin-bottom: var(--dl-layout-space-unit);
          }
          .header-text11 {
            margin-bottom: var(--dl-layout-space-unit);
          }
          .header-text12 {
            margin-bottom: var(--dl-layout-space-unit);
          }
          .header-text13 {
            margin-bottom: var(--dl-layout-space-unit);
          }
          .header-book {
            text-decoration: none;
          }
          .header-image2 {
            width: 18px;
            object-fit: cover;
          }
          .header-text14 {
            font-family: Inter;
          }
          .header-text15 {
            display: inline-block;
          }
          .header-text16 {
            display: inline-block;
          }
          .header-text17 {
            display: inline-block;
          }
          .header-text18 {
            display: inline-block;
          }
          .header-text19 {
            display: inline-block;
          }
          .header-text20 {
            display: inline-block;
          }
          .header-text21 {
            display: inline-block;
          }
          .header-text22 {
            display: inline-block;
          }
          .header-text23 {
            display: inline-block;
          }
          .header-text24 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .header-navbar {
              z-index: 1000;
            }
            .header-right {
              display: none;
            }
            .header-links {
              display: none;
            }
            .header-burger-menu {
              display: flex;
              padding: var(--dl-layout-space-unit);
              border-radius: var(--dl-layout-radius-round);
              background-color: #2461ff;
            }
            .header-icon3 {
              fill: white;
            }
          }
          @media (max-width: 767px) {
            .header-navbar {
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
              padding-bottom: var(--dl-layout-space-unit);
            }
            .header-burger-menu {
              display: flex;
            }
          }
          @media (max-width: 479px) {
            .header-navbar {
              padding: var(--dl-layout-space-unit);
            }
            .header-mobile-menu {
              padding: 16px;
            }
          }
        `}
      </style>
    </>
  )
}

Header.defaultProps = {
  link3: undefined,
  text3: undefined,
  text6: undefined,
  link2: undefined,
  logoAlt: 'image',
  text2: undefined,
  link4: undefined,
  imageSrc3: '/Icons/calendar.svg',
  imageAlt2: 'image',
  link5: undefined,
  text5: undefined,
  imageAlt3: 'image',
  imageSrc2: '/Branding/logo-1500h.png',
  text4: undefined,
  link1: undefined,
  languageLinkUrl: 'https://www.teleporthq.io',
}

Header.propTypes = {
  link3: PropTypes.element,
  text3: PropTypes.element,
  text6: PropTypes.element,
  link2: PropTypes.element,
  logoAlt: PropTypes.string,
  text2: PropTypes.element,
  link4: PropTypes.element,
  imageSrc3: PropTypes.string,
  imageAlt2: PropTypes.string,
  link5: PropTypes.element,
  text5: PropTypes.element,
  imageAlt3: PropTypes.string,
  imageSrc2: PropTypes.string,
  text4: PropTypes.element,
  link1: PropTypes.element,
  languageLinkUrl: PropTypes.string,
}

export default Header
