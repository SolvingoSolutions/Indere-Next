import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Footer = (props) => {
  return (
    <>
      <div className="footer-footer">
        <div className="footer-left">
          <div className="footer-brand">
            <img
              alt={props.imageAlt}
              src={props.imageSrc}
              className="footer-image1"
            />
            <p className="footer-text10">
              {props.text ?? (
                <Fragment>
                  <span className="footer-text22">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                  </span>
                </Fragment>
              )}
            </p>
          </div>
          <div className="footer-socials">
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
            <div className="social">
              <img
                alt={props.imageAlt3}
                src={props.imageSrc3}
                className="footer-image4"
              />
            </div>
          </div>
          <div className="footer-legal1">
            <span className="footer-copyright1">
              {props.copyright1 ?? (
                <Fragment>
                  <span className="footer-text24">
                    © 2022 finbest. All Rights Reserved.
                  </span>
                </Fragment>
              )}
            </span>
            <span className="legal-link">
              {props.copyright2 ?? (
                <Fragment>
                  <span className="footer-text12">Privacy Policy</span>
                </Fragment>
              )}
            </span>
            <span className="legal-link">
              {props.copyright3 ?? (
                <Fragment>
                  <span className="footer-text30">Terms of Use</span>
                </Fragment>
              )}
            </span>
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-list1">
            <span className="footer-header1">
              {props.header ?? (
                <Fragment>
                  <span className="footer-text32">Menu</span>
                </Fragment>
              )}
            </span>
            <div className="footer-links1">
              <span className="footer-link10">
                {props.link ?? (
                  <Fragment>
                    <span className="footer-text18">Home</span>
                  </Fragment>
                )}
              </span>
              <span className="footer-link11">
                {props.link1 ?? (
                  <Fragment>
                    <span className="footer-text31">About</span>
                  </Fragment>
                )}
              </span>
              <span className="footer-link12">
                {props.link2 ?? (
                  <Fragment>
                    <span className="footer-text28">Services</span>
                  </Fragment>
                )}
              </span>
              <span className="footer-link13">
                {props.link3 ?? (
                  <Fragment>
                    <span className="footer-text16">Blog</span>
                  </Fragment>
                )}
              </span>
              <span className="footer-link14">
                {props.link4 ?? (
                  <Fragment>
                    <span className="footer-text17">Support</span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div className="footer-list2">
            <span className="footer-header2">
              {props.header1 ?? (
                <Fragment>
                  <span className="footer-text15">Resources</span>
                </Fragment>
              )}
            </span>
            <div className="footer-links2">
              <span className="footer-link15">
                {props.link5 ?? (
                  <Fragment>
                    <span className="footer-text20">Test Results</span>
                  </Fragment>
                )}
              </span>
              <span className="footer-link16">
                {props.link6 ?? (
                  <Fragment>
                    <span className="footer-text25">Patients</span>
                  </Fragment>
                )}
              </span>
              <span className="footer-link17">
                {props.link7 ?? (
                  <Fragment>
                    <span className="footer-text11">Doctors</span>
                  </Fragment>
                )}
              </span>
              <span className="footer-link18">
                {props.link8 ?? (
                  <Fragment>
                    <span className="footer-text21">Health</span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div className="footer-list3">
            <span className="footer-header3">
              {props.header2 ?? (
                <Fragment>
                  <span className="footer-text29">Contact</span>
                </Fragment>
              )}
            </span>
            <div className="footer-links3">
              <span className="footer-link19">
                {props.link9 ?? (
                  <Fragment>
                    <span className="footer-text13">
                      24 Street Name, City FI 01234, RO
                    </span>
                  </Fragment>
                )}
              </span>
              <a
                href="mailto:contact@template.new?subject=Main"
                className="footer-link20"
              >
                {props.link10 ?? (
                  <Fragment>
                    <span className="footer-text19">contact@template.new</span>
                  </Fragment>
                )}
              </a>
              <a href="tel:(004) 234 - 5678" className="footer-link21">
                {props.link11 ?? (
                  <Fragment>
                    <span className="footer-text23">(004) 234 - 5678</span>
                  </Fragment>
                )}
              </a>
            </div>
          </div>
        </div>
        <div className="footer-legal2">
          <div className="footer-row">
            <span className="legal-link">
              {props.copyright4 ?? (
                <Fragment>
                  <span className="footer-text26">Privacy Policy</span>
                </Fragment>
              )}
            </span>
            <span className="legal-link">
              {props.copyright5 ?? (
                <Fragment>
                  <span className="footer-text27">Terms of Use</span>
                </Fragment>
              )}
            </span>
          </div>
          <span className="footer-copyright6">
            {props.copyright ?? (
              <Fragment>
                <span className="footer-text14">
                  © 2022 finbest. All Rights Reserved.
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
            padding-top: 120px;
            padding-left: var(--dl-layout-space-fiveunits);
            padding-right: var(--dl-layout-space-fiveunits);
            flex-direction: row;
            padding-bottom: var(--dl-layout-space-fiveunits);
            justify-content: space-between;
            background-color: #000000;
          }
          .footer-left {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            align-items: flex-start;
            padding-right: var(--dl-layout-space-threeunits);
            flex-direction: column;
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
          .footer-text10 {
            color: rgb(255, 255, 255);
            font-size: 14px;
            line-height: 21px;
          }
          .footer-socials {
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
          .footer-image4 {
            width: 24px;
            object-fit: cover;
          }
          .footer-legal1 {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .footer-copyright1 {
            color: rgb(255, 255, 255);
            font-size: 12px;
          }
          .footer-right {
            gap: 140px;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .footer-list1 {
            gap: var(--dl-layout-space-unit);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer-header1 {
            color: rgb(255, 255, 255);
            font-style: normal;
            font-weight: 600;
          }
          .footer-links1 {
            gap: 12px;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer-link10 {
            color: rgb(255, 255, 255);
            cursor: pointer;
            transition: 0.3s;
          }
          .footer-link10:hover {
            opacity: 0.5;
          }
          .footer-link11 {
            color: rgb(255, 255, 255);
            cursor: pointer;
            transition: 0.3s;
          }
          .footer-link11:hover {
            opacity: 0.5;
          }
          .footer-link12 {
            color: rgb(255, 255, 255);
            cursor: pointer;
            transition: 0.3s;
          }
          .footer-link12:hover {
            opacity: 0.5;
          }
          .footer-link13 {
            color: rgb(255, 255, 255);
            cursor: pointer;
            transition: 0.3s;
          }
          .footer-link13:hover {
            opacity: 0.5;
          }
          .footer-link14 {
            color: rgb(255, 255, 255);
            cursor: pointer;
            transition: 0.3s;
          }
          .footer-link14:hover {
            opacity: 0.5;
          }
          .footer-list2 {
            gap: var(--dl-layout-space-unit);
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer-header2 {
            color: rgb(255, 255, 255);
            font-style: normal;
            font-weight: 600;
          }
          .footer-links2 {
            gap: 12px;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer-link15 {
            color: rgb(255, 255, 255);
            cursor: pointer;
            transition: 0.3s;
          }
          .footer-link15:hover {
            opacity: 0.5;
          }
          .footer-link16 {
            color: rgb(255, 255, 255);
            cursor: pointer;
            transition: 0.3s;
          }
          .footer-link16:hover {
            opacity: 0.5;
          }
          .footer-link17 {
            color: rgb(255, 255, 255);
            cursor: pointer;
            transition: 0.3s;
          }
          .footer-link17:hover {
            opacity: 0.5;
          }
          .footer-link18 {
            color: rgb(255, 255, 255);
            cursor: pointer;
            transition: 0.3s;
          }
          .footer-link18:hover {
            opacity: 0.5;
          }
          .footer-list3 {
            gap: var(--dl-layout-space-unit);
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer-header3 {
            color: rgb(255, 255, 255);
            font-style: normal;
            font-weight: 600;
          }
          .footer-links3 {
            gap: 12px;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer-link19 {
            color: rgb(255, 255, 255);
            width: 215px;
            cursor: pointer;
            transition: 0.3s;
          }
          .footer-link19:hover {
            opacity: 0.5;
          }
          .footer-link20 {
            color: rgb(255, 255, 255);
            width: 215px;
            cursor: pointer;
            transition: 0.3s;
            text-decoration: none;
          }
          .footer-link20:hover {
            opacity: 0.5;
          }
          .footer-link21 {
            color: rgb(255, 255, 255);
            width: 215px;
            cursor: pointer;
            transition: 0.3s;
            text-decoration: none;
          }
          .footer-link21:hover {
            opacity: 0.5;
          }
          .footer-legal2 {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            display: none;
            align-items: flex-start;
            flex-direction: row;
          }
          .footer-row {
            display: flex;
          }
          .footer-copyright6 {
            color: rgb(255, 255, 255);
            font-size: 12px;
          }
          .footer-text11 {
            display: inline-block;
          }
          .footer-text12 {
            display: inline-block;
          }
          .footer-text13 {
            display: inline-block;
          }
          .footer-text14 {
            display: inline-block;
          }
          .footer-text15 {
            display: inline-block;
          }
          .footer-text16 {
            display: inline-block;
          }
          .footer-text17 {
            display: inline-block;
          }
          .footer-text18 {
            display: inline-block;
          }
          .footer-text19 {
            display: inline-block;
          }
          .footer-text20 {
            display: inline-block;
          }
          .footer-text21 {
            display: inline-block;
          }
          .footer-text22 {
            display: inline-block;
          }
          .footer-text23 {
            display: inline-block;
          }
          .footer-text24 {
            display: inline-block;
          }
          .footer-text25 {
            display: inline-block;
          }
          .footer-text26 {
            display: inline-block;
          }
          .footer-text27 {
            display: inline-block;
          }
          .footer-text28 {
            display: inline-block;
          }
          .footer-text29 {
            display: inline-block;
          }
          .footer-text30 {
            display: inline-block;
          }
          .footer-text31 {
            display: inline-block;
          }
          .footer-text32 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .footer-footer {
              gap: 100px;
              align-items: flex-start;
              flex-direction: column;
              justify-content: flex-start;
            }
            .footer-left {
              padding-right: 0px;
            }
            .footer-socials {
              display: none;
            }
            .footer-legal1 {
              display: none;
            }
            .footer-right {
              gap: var(--dl-layout-space-twounits);
              flex-direction: column;
            }
            .footer-legal2 {
              gap: var(--dl-layout-space-twounits);
              display: flex;
              flex-direction: column;
            }
            .footer-row {
              gap: var(--dl-layout-space-oneandhalfunits);
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
            .footer-text10 {
              font-size: 12px;
              line-height: 18px;
            }
          }
        `}
      </style>
    </>
  )
}

Footer.defaultProps = {
  imageAlt: 'image',
  link7: undefined,
  copyright2: undefined,
  link9: undefined,
  imageAlt1: 'image',
  copyright: undefined,
  imageAlt3: 'image',
  header1: undefined,
  imageSrc: '/Branding/logo-2.svg',
  link3: undefined,
  link4: undefined,
  imageSrc2: '/Icons/instagram.svg',
  imageSrc1: '/Icons/insider.svg',
  link: undefined,
  link10: undefined,
  link5: undefined,
  link8: undefined,
  text: undefined,
  link11: undefined,
  imageAlt2: 'image',
  copyright1: undefined,
  imageSrc3: '/Icons/twitter.svg',
  link6: undefined,
  copyright4: undefined,
  copyright5: undefined,
  link2: undefined,
  header2: undefined,
  copyright3: undefined,
  link1: undefined,
  header: undefined,
}

Footer.propTypes = {
  imageAlt: PropTypes.string,
  link7: PropTypes.element,
  copyright2: PropTypes.element,
  link9: PropTypes.element,
  imageAlt1: PropTypes.string,
  copyright: PropTypes.element,
  imageAlt3: PropTypes.string,
  header1: PropTypes.element,
  imageSrc: PropTypes.string,
  link3: PropTypes.element,
  link4: PropTypes.element,
  imageSrc2: PropTypes.string,
  imageSrc1: PropTypes.string,
  link: PropTypes.element,
  link10: PropTypes.element,
  link5: PropTypes.element,
  link8: PropTypes.element,
  text: PropTypes.element,
  link11: PropTypes.element,
  imageAlt2: PropTypes.string,
  copyright1: PropTypes.element,
  imageSrc3: PropTypes.string,
  link6: PropTypes.element,
  copyright4: PropTypes.element,
  copyright5: PropTypes.element,
  link2: PropTypes.element,
  header2: PropTypes.element,
  copyright3: PropTypes.element,
  link1: PropTypes.element,
  header: PropTypes.element,
}

export default Footer
