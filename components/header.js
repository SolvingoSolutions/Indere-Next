import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Header = (props) => {
  return (
    <>
      <header className="header-header">
        <header data-thq="thq-navbar" className="header-navbar">
          <div className="header-left">
            <img
              alt={props.logoAlt}
              src={props.logoSrc}
              className="header-logo"
            />
            <nav className="header-links">
              <a href="#features" className="header-link1">
                {props.link ?? (
                  <Fragment>
                    <span className="header-text21">Features</span>
                  </Fragment>
                )}
              </a>
              <a href="#how-it-works" className="header-link2">
                {props.link1 ?? (
                  <Fragment>
                    <span className="header-text26">How it works</span>
                  </Fragment>
                )}
              </a>
              <span className="header-link3">
                {props.link2 ?? (
                  <Fragment>
                    <span className="header-text20">Prices</span>
                  </Fragment>
                )}
              </span>
              <a href="#schedule" className="header-link4">
                {props.link3 ?? (
                  <Fragment>
                    <span className="header-text17">Contact</span>
                  </Fragment>
                )}
              </a>
            </nav>
          </div>
          <div data-thq="thq-navbar-btn-group" className="header-right">
            <button className="header-phone button">
              <img
                alt={props.imageAlt}
                src={props.imageSrc}
                className="header-image1"
              />
              <span className="header-text10">
                {props.text ?? (
                  <Fragment>
                    <span className="header-text23">+0 123-456-789</span>
                  </Fragment>
                )}
              </span>
            </button>
            <a href="#book" className="header-book1 button button-main">
              <img
                alt={props.imageAlt1}
                src={props.imageSrc1}
                className="header-image2"
              />
              <span className="header-text11">
                {props.text1 ?? (
                  <Fragment>
                    <span className="header-text27">Book an appointment</span>
                  </Fragment>
                )}
              </span>
            </a>
          </div>
          <div data-thq="thq-burger-menu" className="header-burger-menu">
            <svg viewBox="0 0 1024 1024" className="header-icon1">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="header-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="header-nav1"
            >
              <div className="header-container">
                <img
                  alt={props.imageAlt2}
                  src={props.imageSrc2}
                  className="header-image3"
                />
                <div data-thq="thq-close-menu" className="header-menu-close">
                  <svg viewBox="0 0 1024 1024" className="header-icon3">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="header-nav2"
              >
                <span className="header-text12">
                  {props.text2 ?? (
                    <Fragment>
                      <span className="header-text22">Features</span>
                    </Fragment>
                  )}
                </span>
                <span className="header-text13">
                  {props.text3 ?? (
                    <Fragment>
                      <span className="header-text18">How it works</span>
                    </Fragment>
                  )}
                </span>
                <span className="header-text14">
                  {props.text4 ?? (
                    <Fragment>
                      <span className="header-text25">Prices</span>
                    </Fragment>
                  )}
                </span>
                <span className="header-text15">
                  {props.text5 ?? (
                    <Fragment>
                      <span className="header-text24">Contact</span>
                    </Fragment>
                  )}
                </span>
                <a href="#book" className="header-book2 button button-main">
                  <img
                    alt={props.imageAlt3}
                    src={props.imageSrc3}
                    className="header-image4"
                  />
                  <span className="header-text16">
                    {props.text6 ?? (
                      <Fragment>
                        <span className="header-text19">
                          Book an appointment
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
          .header-links {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .header-link1 {
            cursor: pointer;
            font-style: normal;
            transition: 0.3s;
            font-weight: 500;
            line-height: 24px;
            text-decoration: none;
          }
          .header-link1:hover {
            opacity: 0.5;
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
          .header-link3 {
            cursor: pointer;
            font-style: normal;
            transition: 0.3s;
            font-weight: 500;
            line-height: 24px;
          }
          .header-link3:hover {
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
          .header-right {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .header-phone {
            gap: var(--dl-layout-space-halfunit);
            cursor: pointer;
            display: flex;
            align-items: center;
            border-width: 0px;
            flex-direction: row;
            justify-content: center;
          }
          .header-image1 {
            width: 18px;
            object-fit: cover;
          }
          .header-text10 {
            font-style: normal;
            font-weight: 600;
            line-height: 24px;
          }
          .header-book1 {
            text-decoration: none;
          }
          .header-image2 {
            width: 18px;
            object-fit: cover;
          }
          .header-text11 {
            font-family: Inter;
          }
          .header-burger-menu {
            display: none;
            align-items: center;
            justify-content: center;
          }
          .header-icon1 {
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
          .header-container {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-layout-space-threeunits);
            justify-content: space-between;
          }
          .header-image3 {
            height: 2rem;
          }
          .header-menu-close {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .header-icon3 {
            width: var(--dl-layout-size-xsmall);
            height: var(--dl-layout-size-xsmall);
          }
          .header-nav2 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .header-text12 {
            margin-bottom: var(--dl-layout-space-unit);
          }
          .header-text13 {
            margin-bottom: var(--dl-layout-space-unit);
          }
          .header-text14 {
            margin-bottom: var(--dl-layout-space-unit);
          }
          .header-text15 {
            margin-bottom: var(--dl-layout-space-unit);
          }
          .header-book2 {
            text-decoration: none;
          }
          .header-image4 {
            width: 18px;
            object-fit: cover;
          }
          .header-text16 {
            font-family: Inter;
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
          .header-text25 {
            display: inline-block;
          }
          .header-text26 {
            display: inline-block;
          }
          .header-text27 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .header-navbar {
              z-index: 1000;
            }
            .header-links {
              display: none;
            }
            .header-right {
              display: none;
            }
            .header-burger-menu {
              display: flex;
              padding: var(--dl-layout-space-unit);
              border-radius: var(--dl-layout-radius-round);
              background-color: #2461ff;
            }
            .header-icon1 {
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
  link: undefined,
  imageAlt: 'image',
  imageSrc1: '/Icons/calendar.svg',
  logoAlt: 'image',
  text2: undefined,
  text: undefined,
  imageSrc: '/Icons/phone.svg',
  imageSrc3: '/Icons/calendar.svg',
  imageAlt2: 'image',
  text5: undefined,
  imageAlt3: 'image',
  logoSrc: '/Branding/logo-1500h.png',
  imageSrc2: '/Branding/logo-1500h.png',
  text4: undefined,
  link1: undefined,
  text1: undefined,
  imageAlt1: 'image',
}

Header.propTypes = {
  link3: PropTypes.element,
  text3: PropTypes.element,
  text6: PropTypes.element,
  link2: PropTypes.element,
  link: PropTypes.element,
  imageAlt: PropTypes.string,
  imageSrc1: PropTypes.string,
  logoAlt: PropTypes.string,
  text2: PropTypes.element,
  text: PropTypes.element,
  imageSrc: PropTypes.string,
  imageSrc3: PropTypes.string,
  imageAlt2: PropTypes.string,
  text5: PropTypes.element,
  imageAlt3: PropTypes.string,
  logoSrc: PropTypes.string,
  imageSrc2: PropTypes.string,
  text4: PropTypes.element,
  link1: PropTypes.element,
  text1: PropTypes.element,
  imageAlt1: PropTypes.string,
}

export default Header
