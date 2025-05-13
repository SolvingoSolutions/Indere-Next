import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Features = (props) => {
  return (
    <>
      <div className="features-section quick-links">
        <div className="features-heading">
          <h3 className="features-header">{props.title}</h3>
          <img alt="image" src={props.icon} className="features-icon" />
        </div>
        <p className="features-text">{props.description}</p>
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
          .features-text {
            color: rgb(255, 255, 255);
            width: 100%;
            max-width: 300px;
            line-height: 24px;
          }
          .features-divider {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: none;
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
            .features-text {
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
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  icon: '/Icons/arrow.svg',
  title: 'Virtual Assistant',
}

Features.propTypes = {
  description: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.string,
}

export default Features
