import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Practice = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="practice-practice">
        <div className="practice-heading">
          <h3 className="practice-header">
            {props.title1 ?? (
              <Fragment>
                <span className="practice-text2">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_CpTJ8q'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </h3>
          <p className="practice-caption">
            {props.description1 ?? (
              <Fragment>
                <span className="practice-text3">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_q5VKuL'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </p>
        </div>
        <div className="read-more">
          <span className="practice-text1">
            <span
              dangerouslySetInnerHTML={{
                __html: translate.raw('text_qk0Co2'),
              }}
            ></span>
          </span>
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
          .practice-text1 {
            font-style: normal;
            font-weight: 600;
            line-height: 24px;
          }
          .practice-image {
            width: 12px;
            object-fit: cover;
          }
          .practice-text2 {
            display: inline-block;
          }
          .practice-text3 {
            display: inline-block;
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
  title1: undefined,
  description1: undefined,
}

Practice.propTypes = {
  title1: PropTypes.element,
  description1: PropTypes.element,
}

export default Practice
