import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Features = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="features-section quick-links">
        <div className="features-heading">
          <h3 className="features-header">
            {props.title1 ?? (
              <Fragment>
                <span className="features-text3">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_vlpDaD'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </h3>
          <img alt="image" src={props.icon} className="features-icon" />
        </div>
        <p className="features-text1">
          {props.description1 ?? (
            <Fragment>
              <span className="features-text2">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Mhjxfg'),
                  }}
                ></span>
              </span>
            </Fragment>
          )}
        </p>
        <div className="features-divider"></div>
      </div>
      <style jsx>
        {`
          .features-section {
            position: relative;
          }
          .features-heading {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .features-header {
            color: rgb(255, 255, 255);
            font-size: 24px;
            font-style: normal;
            font-weight: 600;
          }
          .features-icon {
            width: 20px;
            object-fit: cover;
          }
          .features-text1 {
            color: rgb(255, 255, 255);
            width: 100%;
            max-width: 300px;
            line-height: 24px;
          }
          .features-divider {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: none;
          }
          .features-text2 {
            display: inline-block;
          }
          .features-text3 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .features-section {
              border-right-width: 0px;
            }
            .features-divider {
              width: 80px;
              height: 1px;
              display: flex;
              border-color: #ffffff;
              border-width: 0px;
              background-color: #ffffff;
            }
          }
          @media (max-width: 767px) {
            .features-header {
              font-size: 20px;
              line-height: 24px;
            }
            .features-text1 {
              font-size: 14px;
              line-height: 21px;
            }
          }
        `}
      </style>
    </>
  )
}

Features.defaultProps = {
  description1: undefined,
  title1: undefined,
  icon: '/Icons/arrow.svg',
}

Features.propTypes = {
  description1: PropTypes.element,
  title1: PropTypes.element,
  icon: PropTypes.string,
}

export default Features
