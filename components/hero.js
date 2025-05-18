import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Hero = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="hero-container1 hero">
        <div className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">
              {props.heading1 ?? (
                <Fragment>
                  <span className="hero-text5">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_Gtdc10'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </h1>
            <p className="hero-subtitle">
              {props.text3 ?? (
                <Fragment>
                  <span className="hero-text6">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_rr9V4_'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </p>
            <div className="hero-buttons">
              <span className="hero-btn hero-btn-primary">
                {props.text4 ?? (
                  <Fragment>
                    <span className="hero-text7">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_Pw_tN7'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
              <span className="hero-btn hero-btn-secondary">
                {props.text5 ?? (
                  <Fragment>
                    <span className="hero-text8">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_8fp087'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
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
  heading1: undefined,
  text3: undefined,
  text4: undefined,
  text5: undefined,
}

Hero.propTypes = {
  heading1: PropTypes.element,
  text3: PropTypes.element,
  text4: PropTypes.element,
  text5: PropTypes.element,
}

export default Hero
