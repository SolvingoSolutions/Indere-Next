import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const TeamCard = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="team-card-container1 team-card">
        <div className="member-image">
          <img
            alt={props.imageAlt}
            src={props.imageSrc}
            className="team-card-image1"
          />
        </div>
        <div className="member-info">
          <h3 className="member-name">
            {props.name ?? (
              <Fragment>
                <span className="team-card-text18">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_RgMwnk'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </h3>
          <p className="member-position">
            {props.position ?? (
              <Fragment>
                <span className="team-card-text19">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_rRAruW'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </p>
          <div className="divider"></div>
          <div className="member-details">
            <h4>
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('text_W9fpc4'),
                }}
              ></span>
            </h4>
            <p>
              {props.qualification ?? (
                <Fragment>
                  <span className="team-card-text20">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_RE7VGN'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </p>
            <h4>
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('text_JPLYH1'),
                }}
              ></span>
            </h4>
            <p>
              {props.introduction ?? (
                <Fragment>
                  <span className="team-card-text17">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_PQU2lY'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </p>
          </div>
          <div className="contact-links">
            <h4>
              <span
                dangerouslySetInnerHTML={{
                  __html: translate.raw('text_SG0QAX'),
                }}
              ></span>
            </h4>
            <div className="social-icons">
              {props.emailLink !== '' && (
                <a href={props.emailLink}>
                  <img
                    alt="image"
                    src="/Icons/gmail.svg"
                    className="team-card-image2 icon-link"
                  />
                </a>
              )}
              {props.facebookLink !== '' && (
                <a href={props.facebookLink}>
                  <img
                    alt="image"
                    src="/Icons/facebook.svg"
                    className="team-card-image3 icon-link"
                  />
                </a>
              )}
              {props.linkedinLink !== '' && (
                <a href={props.linkedinLink}>
                  <img
                    alt="image"
                    src="/Icons/linkedin.svg"
                    className="team-card-image4 icon-link"
                  />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .team-card-container1 {
            position: relative;
          }
          .team-card-image1 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .team-card-image2 {
            object-fit: cover;
            background-color: var(--dl-others-imported-bg-lighter);
          }
          .team-card-image3 {
            object-fit: cover;
          }
          .team-card-image4 {
            object-fit: cover;
          }
          .team-card-text17 {
            display: inline-block;
          }
          .team-card-text18 {
            display: inline-block;
          }
          .team-card-text19 {
            display: inline-block;
          }
          .team-card-text20 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

TeamCard.defaultProps = {
  linkedinLink: '',
  imageAlt: 'Prof. h.c. Dr. Andras Bittsanszky PhD',
  introduction: undefined,
  name: undefined,
  emailLink: '',
  facebookLink: '',
  imageSrc: '/Team/andras-bittsanszky-300w.webp',
  position: undefined,
  qualification: undefined,
}

TeamCard.propTypes = {
  linkedinLink: PropTypes.string,
  imageAlt: PropTypes.string,
  introduction: PropTypes.element,
  name: PropTypes.element,
  emailLink: PropTypes.string,
  facebookLink: PropTypes.string,
  imageSrc: PropTypes.string,
  position: PropTypes.element,
  qualification: PropTypes.element,
}

export default TeamCard
