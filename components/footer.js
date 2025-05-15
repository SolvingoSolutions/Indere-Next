import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Footer = (props) => {
  return (
    <>
      <div className="footer-footer">
        <div className="footer-content">
          <div className="footer-brand">
            <img
              alt={props.imageAlt}
              src="/logo-200h.jpg"
              className="footer-image1"
            />
          </div>
          <div className="footer-socials">
            <span className="footer-socials-title">FOLLOW US ON</span>
            <div className="footer-icons">
              <div className="social">
                <img
                  alt={props.imageAlt1}
                  src={props.imageSrc1}
                  className="footer-image2"
                />
              </div>
              <div className="social">
                <img
                  alt={props.imageAlt2}
                  src={props.imageSrc2}
                  className="footer-image3"
                />
              </div>
            </div>
          </div>
          <div className="footer-list">
            <span className="footer-header1">
              {props.header2 ?? (
                <Fragment>
                  <span className="footer-text5">Contact</span>
                </Fragment>
              )}
            </span>
            <div className="footer-links">
              <span className="footer-link1">FOOD CONTROL GROUP</span>
              <a
                href="mailto:contact@template.new?subject=Main"
                className="footer-link2"
              >
                {props.link102 ?? (
                  <Fragment>
                    <span className="footer-text2">
                      Office: 1118 Budapest, Budaörsi út 15. I.em. 11.
                    </span>
                  </Fragment>
                )}
              </a>
              <a href="tel:(004) 234 - 5678" className="footer-link3">
                {props.link112 ?? (
                  <Fragment>
                    <span className="footer-text3">Tel: 00-36-70-338-2408</span>
                  </Fragment>
                )}
              </a>
              <a href="tel:(004) 234 - 5678" className="footer-link4">
                {props.link1121 ?? (
                  <Fragment>
                    <span className="footer-text4">food@foodcontrol.hu</span>
                  </Fragment>
                )}
              </a>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <span className="footer-header2">
            {props.header21 ?? (
              <Fragment>
                <span className="footer-text1">
                  © 2020 Foodcontrol. Adatkezelési tájékoztató Powered by
                  Bettery
                </span>
              </Fragment>
            )}
          </span>
        </div>
      </div>
      <style jsx>
        {`
          .footer-footer {
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: #69bd8b;
          }
          .footer-content {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            display: flex;
            padding: 30px 60px;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .footer-brand {
            gap: var(--dl-layout-space-unit);
            display: flex;
            max-width: 400px;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer-image1 {
            width: 165px;
            object-fit: cover;
          }
          .footer-socials {
            gap: var(--dl-layout-space-unit);
            display: flex;
            max-width: 400px;
            align-items: center;
            flex-direction: column;
          }
          .footer-socials-title {
            color: rgb(255, 255, 255);
            font-style: normal;
            font-weight: 600;
          }
          .footer-icons {
            gap: var(--dl-layout-space-unit);
            display: flex;
            max-width: 400px;
            align-items: flex-start;
            flex-direction: row;
          }
          .footer-image2 {
            width: 24px;
            object-fit: cover;
          }
          .footer-image3 {
            width: 24px;
            object-fit: cover;
          }
          .footer-list {
            gap: var(--dl-layout-space-unit);
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer-header1 {
            color: rgb(255, 255, 255);
            font-style: normal;
            font-weight: 600;
          }
          .footer-links {
            gap: 12px;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer-link1 {
            color: rgb(255, 255, 255);
            width: 215px;
            cursor: pointer;
            transition: 0.3s;
          }
          .footer-link1:hover {
            opacity: 0.5;
          }
          .footer-link2 {
            color: rgb(255, 255, 255);
            width: 215px;
            cursor: pointer;
            transition: 0.3s;
            text-decoration: none;
          }
          .footer-link2:hover {
            opacity: 0.5;
          }
          .footer-link3 {
            color: rgb(255, 255, 255);
            width: 215px;
            cursor: pointer;
            transition: 0.3s;
            text-decoration: none;
          }
          .footer-link3:hover {
            opacity: 0.5;
          }
          .footer-link4 {
            color: rgb(255, 255, 255);
            width: 215px;
            cursor: pointer;
            transition: 0.3s;
            text-decoration: none;
          }
          .footer-link4:hover {
            opacity: 0.5;
          }
          .footer-copyright {
            width: 100%;
            display: flex;
            padding: 30px 0 30px 0;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .footer-header2 {
            color: rgb(255, 255, 255);
            font-style: normal;
            font-weight: 600;
          }
          .footer-text1 {
            display: inline-block;
          }
          .footer-text2 {
            display: inline-block;
          }
          .footer-text3 {
            display: inline-block;
          }
          .footer-text4 {
            display: inline-block;
          }
          .footer-text5 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .footer-footer {
              gap: 100px;
              align-items: flex-start;
              flex-direction: column;
              justify-content: flex-start;
            }
            .footer-content {
              padding-right: 0px;
            }
            .footer-socials {
              display: none;
            }
            .footer-icons {
              display: none;
            }
            .footer-copyright {
              padding-right: 0px;
            }
          }
          @media (max-width: 767px) {
            .footer-footer {
              padding-top: var(--dl-layout-space-fourunits);
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
              padding-bottom: var(--dl-layout-space-threeunits);
            }
            .footer-image1 {
              width: 110px;
            }
          }
        `}
      </style>
    </>
  )
}

Footer.defaultProps = {
  header21: undefined,
  imageAlt: 'image',
  link102: undefined,
  imageAlt1: 'image',
  link112: undefined,
  imageSrc2: '/Icons/instagram.svg',
  imageSrc1: '/Icons/insider.svg',
  link1121: undefined,
  imageAlt2: 'image',
  header2: undefined,
}

Footer.propTypes = {
  header21: PropTypes.element,
  imageAlt: PropTypes.string,
  link102: PropTypes.element,
  imageAlt1: PropTypes.string,
  link112: PropTypes.element,
  imageSrc2: PropTypes.string,
  imageSrc1: PropTypes.string,
  link1121: PropTypes.element,
  imageAlt2: PropTypes.string,
  header2: PropTypes.element,
}

export default Footer
