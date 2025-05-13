import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Practice = (props) => {
  return (
    <>
      <div className="practice-practice">
        <div className="practice-heading">
          <h3 className="practice-header">{props.title}</h3>
          <p className="practice-caption">{props.description}</p>
        </div>
        <div className="read-more">
          <span className="practice-text">Read more</span>
          <img
            alt="image"
            src="/Icons/arrow-2.svg"
            className="practice-image"
          />
        </div>
      </div>
      <style jsx>
        {`
          .practice-practice {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            position: relative;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-threeunits);
            border-color: #b4b9c6;
            flex-direction: column;
            border-top-width: 1px;
          }
          .practice-heading {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .practice-header {
            font-size: 30px;
            font-style: normal;
            font-weight: 600;
            line-height: 36px;
          }
          .practice-caption {
            max-width: 385px;
            line-height: 24px;
          }
          .practice-text {
            font-style: normal;
            font-weight: 600;
            line-height: 24px;
          }
          .practice-image {
            width: 12px;
            object-fit: cover;
          }
          @media (max-width: 767px) {
            .practice-practice {
              padding-top: var(--dl-layout-space-oneandhalfunits);
            }
            .practice-header {
              font-size: 20px;
              line-height: 24px;
            }
            .practice-caption {
              font-size: 14px;
              line-height: 21px;
            }
          }
        `}
      </style>
    </>
  )
}

Practice.defaultProps = {
  title: 'Cardiology',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
}

Practice.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
}

export default Practice
