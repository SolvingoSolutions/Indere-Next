import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Hero = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="hero-container1 hero">
        <div className="hero-content">
          <h1 className="hero-title">
            {props.heading ?? (
              <Fragment>
                <span className="hero-text7">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_Q2bUsT'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </h1>
          <p className="hero-subtitle">
            {props.text ?? (
              <Fragment>
                <span className="hero-text6">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_p3IzkY'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </p>
          <div className="hero-buttons">
            <span className="btn btn-primary">
              {props.text1 ?? (
                <Fragment>
                  <span className="hero-text8">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_CaeYuD'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
            <span className="btn btn-secondary">
              {props.text2 ?? (
                <Fragment>
                  <span className="hero-text5">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_NWzZOY'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </span>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .hero-container1 {
            position: relative;
          }
          .hero-text5 {
            display: inline-block;
          }
          .hero-text6 {
            display: inline-block;
          }
          .hero-text7 {
            display: inline-block;
          }
          .hero-text8 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

Hero.defaultProps = {
  text2: undefined,
  text: undefined,
  heading: undefined,
  text1: undefined,
}

Hero.propTypes = {
  text2: PropTypes.element,
  text: PropTypes.element,
  heading: PropTypes.element,
  text1: PropTypes.element,
}

export default Hero
