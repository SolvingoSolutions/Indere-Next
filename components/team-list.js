import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

import TeamCard from './team-card'

const TeamList = (props) => {
  const translate = useTranslations()
  return (
    <>
      <section
        className={`team-list-container1 team-section ${props.rootClassName} `}
      >
        <div className="container">
          <section className="projects-intro">
            <h1 className="team-list-text10 research-title">
              {props.heading3 ?? (
                <Fragment>
                  <span className="team-list-text53">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_cOcVw5'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              )}
            </h1>
          </section>
          <p className="team-list-text11 blog-excerpt">
            {props.text ?? (
              <Fragment>
                <span className="team-list-text52">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_tsy3Zh'),
                    }}
                  ></span>
                </span>
              </Fragment>
            )}
          </p>
          <div className="team-list-container4 team-grid">
            <TeamCard
              name={
                <Fragment>
                  <span className="team-list-text12">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_H34d4i'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              imageAlt="Prof. h.c. Dr. Andras Bittsanszky PhD image"
              imageSrc="/Team/andras-bittsanszky-300w.webp"
              position={
                <Fragment>
                  <span className="team-list-text13">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_Z7YcNR'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              emailLink="mailto:andras.bittsanszky@indere.hu"
              introduction={
                <Fragment>
                  <span className="team-list-text14">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_KIz8HA'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              qualification={
                <Fragment>
                  <span className="team-list-text15">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_PlK-AQ'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
            ></TeamCard>
            <TeamCard
              name={
                <Fragment>
                  <span className="team-list-text16">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_6N5VnD'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              imageAlt="Prof. h.c. Dr. Andras Bittsanszky PhD image"
              imageSrc="/Team/toth-andras-jozsef-300w.webp"
              position={
                <Fragment>
                  <span className="team-list-text17">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_r1cPk6'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              emailLink="mailto:andras.toth@foodcontrol.hu"
              introduction={
                <Fragment>
                  <span className="team-list-text18">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_RVv9vb'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              qualification={
                <Fragment>
                  <span className="team-list-text19">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_h9PseB'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
            ></TeamCard>
            <TeamCard
              name={
                <Fragment>
                  <span className="team-list-text20">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_UUW0A4'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              imageAlt="Prof. h.c. Dr. Andras Bittsanszky PhD image"
              imageSrc="/Team/andras-bulkai-300w.webp"
              position={
                <Fragment>
                  <span className="team-list-text21">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_hy3mT9'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              emailLink="mailto:food@foodcontrol.hu"
              introduction={
                <Fragment>
                  <span className="team-list-text22">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_2RK3Ud'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              qualification={
                <Fragment>
                  <span className="team-list-text23">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_QDvExv'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
            ></TeamCard>
            <TeamCard
              name={
                <Fragment>
                  <span className="team-list-text24">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_i0oE0O'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              imageAlt="Prof. h.c. Dr. Andras Bittsanszky PhD image"
              imageSrc="/Team/jozsef-toth-300w.webp"
              position={
                <Fragment>
                  <span className="team-list-text25">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_VHLkts'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              emailLink="mailto:soreca@soreca.hu"
              introduction={
                <Fragment>
                  <span className="team-list-text26">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_POokh3'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              qualification={
                <Fragment>
                  <span className="team-list-text27">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_do5bqd'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
            ></TeamCard>
            <TeamCard
              name={
                <Fragment>
                  <span className="team-list-text28">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_rkdwCm'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              imageAlt="Prof. h.c. Dr. Andras Bittsanszky PhD image"
              imageSrc="/Team/zoltan-koller-300w.webp"
              position={
                <Fragment>
                  <span className="team-list-text29">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_ZtLSGv'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              emailLink="mailto:zoltan.koller@foodcontrol.hu"
              introduction={
                <Fragment>
                  <span className="team-list-text30">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_qEDmci'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              qualification={
                <Fragment>
                  <span className="team-list-text31">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_gM5U6m'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
            ></TeamCard>
            <TeamCard
              name={
                <Fragment>
                  <span className="team-list-text32">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_WAbeal'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              imageAlt="Prof. h.c. Dr. Andras Bittsanszky PhD image"
              imageSrc="/Team/anett-balogh-300w.webp"
              position={
                <Fragment>
                  <span className="team-list-text33">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_ps8GQ8'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              emailLink="mailto:anett.balogh@soreca.hu"
              introduction={
                <Fragment>
                  <span className="team-list-text34">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_wX6tma'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              qualification={
                <Fragment>
                  <span className="team-list-text35">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_wbD1bg'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
            ></TeamCard>
            <TeamCard
              name={
                <Fragment>
                  <span className="team-list-text36">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_4uTHuM'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              imageAlt="Prof. h.c. Dr. Andras Bittsanszky PhD image"
              imageSrc="/Team/marton-kajtor-300w.webp"
              position={
                <Fragment>
                  <span className="team-list-text37">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_mwUtsm'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              emailLink="mailto:marton.kajtor@foodcontrol.hu"
              introduction={
                <Fragment>
                  <span className="team-list-text38">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_y6qgG8'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              qualification={
                <Fragment>
                  <span className="team-list-text39">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_G2Laft'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
            ></TeamCard>
            <TeamCard
              name={
                <Fragment>
                  <span className="team-list-text40">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_HadU_d'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              imageAlt="Prof. h.c. Dr. Andras Bittsanszky PhD image"
              imageSrc="/Team/luca-gyimesi-300w.webp"
              position={
                <Fragment>
                  <span className="team-list-text41">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_17ftPH'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              emailLink="mailto:luca.gyimesi@indere.hu"
              introduction={
                <Fragment>
                  <span className="team-list-text42">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_l5P4u2'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              qualification={
                <Fragment>
                  <span className="team-list-text43">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_DOZ0wN'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
            ></TeamCard>
            <TeamCard
              name={
                <Fragment>
                  <span className="team-list-text44">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_alFnN5'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              imageAlt="Prof. h.c. Dr. Andras Bittsanszky PhD image"
              imageSrc="/Team/vince-kovacs-300w.webp"
              position={
                <Fragment>
                  <span className="team-list-text45">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_UL_Wti'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              emailLink="mailto:soreca@soreca.hu"
              introduction={
                <Fragment>
                  <span className="team-list-text46">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_40P3QH'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              qualification={
                <Fragment>
                  <span className="team-list-text47">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_EXsfy9'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
            ></TeamCard>
            <TeamCard
              name={
                <Fragment>
                  <span className="team-list-text48">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_ZSEaaZ'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              imageAlt="Prof. h.c. Dr. Andras Bittsanszky PhD image"
              imageSrc="/Team/bernadett-kelemen-300w.webp"
              position={
                <Fragment>
                  <span className="team-list-text49">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_GjH6hh'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              emailLink="mailto:bernadett.kelemen@foodcontrol.hu"
              introduction={
                <Fragment>
                  <span className="team-list-text50">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_zmAKBq'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
              qualification={
                <Fragment>
                  <span className="team-list-text51">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text__kReKI'),
                      }}
                    ></span>
                  </span>
                </Fragment>
              }
            ></TeamCard>
          </div>
        </div>
      </section>
      <style jsx>
        {`
          .team-list-container1 {
            position: relative;
          }
          .team-list-text10 {
            margin: 0;
          }
          .team-list-text11 {
            margin: 0 auto;
            font-size: 1rem;
            max-width: 1000px;
            text-align: justify;
          }
          .team-list-container4 {
            margin-top: 1.5rem;
          }
          .team-list-text12 {
            display: inline-block;
          }
          .team-list-text13 {
            display: inline-block;
          }
          .team-list-text14 {
            display: inline-block;
          }
          .team-list-text15 {
            display: inline-block;
          }
          .team-list-text16 {
            display: inline-block;
          }
          .team-list-text17 {
            display: inline-block;
          }
          .team-list-text18 {
            display: inline-block;
          }
          .team-list-text19 {
            display: inline-block;
          }
          .team-list-text20 {
            display: inline-block;
          }
          .team-list-text21 {
            display: inline-block;
          }
          .team-list-text22 {
            display: inline-block;
          }
          .team-list-text23 {
            display: inline-block;
          }
          .team-list-text24 {
            display: inline-block;
          }
          .team-list-text25 {
            display: inline-block;
          }
          .team-list-text26 {
            display: inline-block;
          }
          .team-list-text27 {
            display: inline-block;
          }
          .team-list-text28 {
            display: inline-block;
          }
          .team-list-text29 {
            display: inline-block;
          }
          .team-list-text30 {
            display: inline-block;
          }
          .team-list-text31 {
            display: inline-block;
          }
          .team-list-text32 {
            display: inline-block;
          }
          .team-list-text33 {
            display: inline-block;
          }
          .team-list-text34 {
            display: inline-block;
          }
          .team-list-text35 {
            display: inline-block;
          }
          .team-list-text36 {
            display: inline-block;
          }
          .team-list-text37 {
            display: inline-block;
          }
          .team-list-text38 {
            display: inline-block;
          }
          .team-list-text39 {
            display: inline-block;
          }
          .team-list-text40 {
            display: inline-block;
          }
          .team-list-text41 {
            display: inline-block;
          }
          .team-list-text42 {
            display: inline-block;
          }
          .team-list-text43 {
            display: inline-block;
          }
          .team-list-text44 {
            display: inline-block;
          }
          .team-list-text45 {
            display: inline-block;
          }
          .team-list-text46 {
            display: inline-block;
          }
          .team-list-text47 {
            display: inline-block;
          }
          .team-list-text48 {
            display: inline-block;
          }
          .team-list-text49 {
            display: inline-block;
          }
          .team-list-text50 {
            display: inline-block;
          }
          .team-list-text51 {
            display: inline-block;
          }
          .team-list-text52 {
            display: inline-block;
          }
          .team-list-text53 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

TeamList.defaultProps = {
  rootClassName: '',
  text: undefined,
  heading3: undefined,
}

TeamList.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.element,
  heading3: PropTypes.element,
}

export default TeamList
