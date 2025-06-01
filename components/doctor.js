import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Doctor = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="doctor-doctor">
        <img
          alt={props.imageAlt}
          src={props.imageSrc}
          className="doctor-image"
        />
        <div className="doctor-heading">
          <h2 className="doctor-text1">
            {props.heading1 ?? (
              <Fragment>
                <span className="doctor-text4">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_qv0xhT'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </h2>
          <p className="doctor-text2">
            {props.text1 ?? (
              <Fragment>
                <span className="doctor-text3">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_13DUSA'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </p>
        </div>
      </div>
      <style jsx>
        {`
          .doctor-doctor {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            position: relative;
            max-width: 270px;
            align-items: center;
            flex-direction: column;
          }
          .doctor-image {
            width: 270px;
            object-fit: cover;
          }
          .doctor-heading {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .doctor-text1 {
            width: 100%;
            font-size: 24px;
            max-width: 270px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .doctor-text2 {
            width: 100%;
            font-size: 14px;
            max-width: 240px;
            text-align: center;
            line-height: 21px;
          }
          .doctor-text3 {
            display: inline-block;
          }
          .doctor-text4 {
            display: inline-block;
          }
          @media (max-width: 767px) {
            .doctor-image {
              width: 200px;
            }
            .doctor-text1 {
              font-size: 16px;
              max-width: 200px;
              line-height: 24px;
            }
            .doctor-text2 {
              font-size: 12px;
              max-width: 200px;
              line-height: 18px;
            }
          }
        `}
      </style>
    </>
  )
}

Doctor.defaultProps = {
  text1: undefined,
  heading1: undefined,
  imageSrc: 'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
  imageAlt: 'image',
}

Doctor.propTypes = {
  text1: PropTypes.element,
  heading1: PropTypes.element,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
}

export default Doctor
