import React, { Fragment } from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import Header from '../components/header'
import Articles from '../components/articles'
import Footer from '../components/footer'

const Home = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Indere</title>
          <meta property="og:title" content="Indere" />
        </Head>
        <div data-modal="practices" className="home-modal">
          <div className="home-practices">
            <div className="home-heading1">
              <span className="home-header1">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('Header_t533aS'),
                  }}
                ></span>
              </span>
              <svg
                viewBox="0 0 1024 1024"
                data-close="practices"
                className="home-close"
              >
                <path d="M225.835 286.165l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l225.835-225.835 225.835 225.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-225.835 225.835-225.835-225.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
              </svg>
            </div>
            <div className="home-grid">
              <div className="home-section1">
                <div className="home-heading2">
                  <span className="home-header2">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Header_DTwxXd'),
                      }}
                    ></span>
                  </span>
                  <span className="home-caption1">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Caption_aLiA99'),
                      }}
                    ></span>
                  </span>
                </div>
                <div className="read-more">
                  <span className="home-text10">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_3HzFDq'),
                      }}
                    ></span>
                  </span>
                  <img
                    alt="image"
                    src="/Icons/arrow-2.svg"
                    className="home-image1"
                  />
                </div>
              </div>
              <div className="home-section2">
                <div className="home-heading3">
                  <span className="home-header3">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Header_DTcPHT'),
                      }}
                    ></span>
                  </span>
                  <span className="home-caption2">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Caption_pyyj8S'),
                      }}
                    ></span>
                  </span>
                </div>
                <div className="read-more">
                  <span className="home-text11">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_5J5zFn'),
                      }}
                    ></span>
                  </span>
                  <img
                    alt="image"
                    src="/Icons/arrow-2.svg"
                    className="home-image2"
                  />
                </div>
              </div>
              <div className="home-section3">
                <div className="home-heading4">
                  <span className="home-header4">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Header_SoI402'),
                      }}
                    ></span>
                  </span>
                  <span className="home-caption3">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Caption_V4pObq'),
                      }}
                    ></span>
                  </span>
                </div>
                <div className="read-more">
                  <span className="home-text12">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_i2QZoa'),
                      }}
                    ></span>
                  </span>
                  <img
                    alt="image"
                    src="/Icons/arrow-2.svg"
                    className="home-image3"
                  />
                </div>
              </div>
              <div className="home-section4">
                <div className="home-heading5">
                  <span className="home-header5">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Header_H9AX2H'),
                      }}
                    ></span>
                  </span>
                  <span className="home-caption4">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Caption_TW25lR'),
                      }}
                    ></span>
                  </span>
                </div>
                <div className="read-more">
                  <span className="home-text13">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_D4Ryy1'),
                      }}
                    ></span>
                  </span>
                  <img
                    alt="image"
                    src="/Icons/arrow-2.svg"
                    className="home-image4"
                  />
                </div>
              </div>
              <div className="home-section5">
                <div className="home-heading6">
                  <span className="home-header6">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Header_4lGPQU'),
                      }}
                    ></span>
                  </span>
                  <span className="home-caption5">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Caption_PHBvyn'),
                      }}
                    ></span>
                  </span>
                </div>
                <div className="read-more">
                  <span className="home-text14">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_905w-_'),
                      }}
                    ></span>
                  </span>
                  <img
                    alt="image"
                    src="/Icons/arrow-2.svg"
                    className="home-image5"
                  />
                </div>
              </div>
              <div className="home-section6">
                <div className="home-heading7">
                  <span className="home-header7">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Header_0zTeoq'),
                      }}
                    ></span>
                  </span>
                  <span className="home-caption6">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('Caption_ai7WRC'),
                      }}
                    ></span>
                  </span>
                </div>
                <div className="read-more">
                  <span className="home-text15">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: translate.raw('text_10ksGZ'),
                      }}
                    ></span>
                  </span>
                  <img
                    alt="image"
                    src="/Icons/arrow-2.svg"
                    className="home-image6"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Header
          link1={
            <Fragment>
              <span className="home-text16">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_P4Q6i4'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link2={
            <Fragment>
              <span className="home-text17">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_C1BjPx'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link3={
            <Fragment>
              <span className="home-text18">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_5dc0ac'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link4={
            <Fragment>
              <span className="home-text19">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_N6nLV5'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link5={
            <Fragment>
              <span className="home-text20">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_VpVeFk'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="home-text21">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_JbR-Ks'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="home-text22">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_xsXECc'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="home-text23">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Ynr0TN'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text5={
            <Fragment>
              <span className="home-text24">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_MK3jjB'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text6={
            <Fragment>
              <span className="home-text25">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_pm_yC3'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
        ></Header>
        <Articles
          text={
            <Fragment>
              <span className="home-text26">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_4Dmd7n'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="home-text27">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_c0qcUs'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="home-text28">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_EPvznw'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="home-text29">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_dBMy8-'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="home-text30">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_3ZsG1Q'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text5={
            <Fragment>
              <span className="home-text31">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_yTUB5K'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text6={
            <Fragment>
              <span className="home-text32">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_YJuRp2'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text7={
            <Fragment>
              <span className="home-text33">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Iwis_u'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text8={
            <Fragment>
              <span className="home-text34">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_4aBndW'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text9={
            <Fragment>
              <span className="home-text35">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_TacVV_'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          button={
            <Fragment>
              <span className="home-text36">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ztkkZt'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text10={
            <Fragment>
              <span className="home-text37">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_7ZyN_s'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text11={
            <Fragment>
              <span className="home-text38">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_EFbFgs'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text12={
            <Fragment>
              <span className="home-text39">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_2u0fVt'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          button1={
            <Fragment>
              <span className="home-text40">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_tVCF-G'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          button2={
            <Fragment>
              <span className="home-text41">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_8XWWjs'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          button3={
            <Fragment>
              <span className="home-text42">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ywLpQZ'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          button4={
            <Fragment>
              <span className="home-text43">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_obn5aS'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          button5={
            <Fragment>
              <span className="home-text44">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_sS82Pn'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading={
            <Fragment>
              <span className="home-text45">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_4pw76T'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text46">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_CJr571'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading2={
            <Fragment>
              <span className="home-text47">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ZZAYzK'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading3={
            <Fragment>
              <span className="home-text48">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Q8b30R'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading4={
            <Fragment>
              <span className="home-text49">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ffMMX0'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading5={
            <Fragment>
              <span className="home-text50">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_C02SMb'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading6={
            <Fragment>
              <span className="home-text51">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_PnP8vI'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
        ></Articles>
        <Footer
          header2={
            <Fragment>
              <span className="home-text52">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_LwTLpz'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link102={
            <Fragment>
              <span className="home-text53">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_9RkW1l'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link112={
            <Fragment>
              <span className="home-text54">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_UOqxqu'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          header21={
            <Fragment>
              <span className="home-text55">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_nTN0vK'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link1121={
            <Fragment>
              <span className="home-text56">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_p7kZ5R'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
        ></Footer>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            scroll-behavior: smooth;
          }
          .home-modal {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            z-index: 200;
            position: fixed;
            align-items: center;
            padding-left: var(--dl-layout-space-fiveunits);
            padding-right: var(--dl-layout-space-fiveunits);
            flex-direction: column;
            backdrop-filter: blur(4px);
            justify-content: center;
          }
          .home-practices {
            display: flex;
            padding: var(--dl-layout-space-oneandhalfunits);
            box-shadow: 0px 0px 25px -2px rgba(66, 68, 90, 0.4);
            align-items: center;
            border-radius: 12px;
            flex-direction: column;
            justify-content: center;
            background-color: #ffffff;
          }
          .home-heading1 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            padding-bottom: var(--dl-layout-space-oneandhalfunits);
            justify-content: space-between;
          }
          .home-header1 {
            font-size: 32px;
            font-style: normal;
            font-weight: 600;
          }
          .home-close {
            width: 24px;
            cursor: pointer;
            height: 24px;
            transition: 0.3s;
          }
          .home-close:hover {
            opacity: 0.5;
          }
          .home-grid {
            gap: var(--dl-layout-space-threeunits);
            flex: 1;
            display: grid;
            align-items: flex-start;
            flex-direction: column;
            grid-template-columns: repeat(2, 1fr);
          }
          .home-section1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-threeunits);
            border-color: #b4b9c6;
            flex-direction: column;
            border-top-width: 1px;
          }
          .home-heading2 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header2 {
            font-size: 30px;
            font-style: normal;
            font-weight: 600;
            line-height: 36px;
          }
          .home-caption1 {
            max-width: 385px;
            line-height: 24px;
          }
          .home-text10 {
            font-style: normal;
            font-weight: 600;
            line-height: 24px;
          }
          .home-image1 {
            width: 12px;
            object-fit: cover;
          }
          .home-section2 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-threeunits);
            border-color: #b4b9c6;
            flex-direction: column;
            border-top-width: 1px;
          }
          .home-heading3 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header3 {
            font-size: 30px;
            font-style: normal;
            font-weight: 600;
            line-height: 36px;
          }
          .home-caption2 {
            max-width: 385px;
            line-height: 24px;
          }
          .home-text11 {
            font-style: normal;
            font-weight: 600;
            line-height: 24px;
          }
          .home-image2 {
            width: 12px;
            object-fit: cover;
          }
          .home-section3 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-threeunits);
            border-color: #b4b9c6;
            flex-direction: column;
            border-top-width: 1px;
          }
          .home-heading4 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header4 {
            font-size: 30px;
            font-style: normal;
            font-weight: 600;
            line-height: 36px;
          }
          .home-caption3 {
            max-width: 385px;
            line-height: 24px;
          }
          .home-text12 {
            font-style: normal;
            font-weight: 600;
            line-height: 24px;
          }
          .home-image3 {
            width: 12px;
            object-fit: cover;
          }
          .home-section4 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-threeunits);
            border-color: #b4b9c6;
            flex-direction: column;
            border-top-width: 1px;
          }
          .home-heading5 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header5 {
            font-size: 30px;
            font-style: normal;
            font-weight: 600;
            line-height: 36px;
          }
          .home-caption4 {
            max-width: 385px;
            line-height: 24px;
          }
          .home-text13 {
            font-style: normal;
            font-weight: 600;
            line-height: 24px;
          }
          .home-image4 {
            width: 12px;
            object-fit: cover;
          }
          .home-section5 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-threeunits);
            border-color: #b4b9c6;
            flex-direction: column;
            border-top-width: 1px;
          }
          .home-heading6 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header6 {
            font-size: 30px;
            font-style: normal;
            font-weight: 600;
            line-height: 36px;
          }
          .home-caption5 {
            max-width: 385px;
            line-height: 24px;
          }
          .home-text14 {
            font-style: normal;
            font-weight: 600;
            line-height: 24px;
          }
          .home-image5 {
            width: 12px;
            object-fit: cover;
          }
          .home-section6 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-threeunits);
            border-color: #b4b9c6;
            flex-direction: column;
            border-top-width: 1px;
          }
          .home-heading7 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header7 {
            font-size: 30px;
            font-style: normal;
            font-weight: 600;
            line-height: 36px;
          }
          .home-caption6 {
            max-width: 385px;
            line-height: 24px;
          }
          .home-text15 {
            font-style: normal;
            font-weight: 600;
            line-height: 24px;
          }
          .home-image6 {
            width: 12px;
            object-fit: cover;
          }
          .home-text16 {
            display: inline-block;
          }
          .home-text17 {
            display: inline-block;
          }
          .home-text18 {
            display: inline-block;
          }
          .home-text19 {
            display: inline-block;
          }
          .home-text20 {
            display: inline-block;
          }
          .home-text21 {
            display: inline-block;
          }
          .home-text22 {
            display: inline-block;
          }
          .home-text23 {
            display: inline-block;
          }
          .home-text24 {
            display: inline-block;
          }
          .home-text25 {
            display: inline-block;
          }
          .home-text26 {
            display: inline-block;
          }
          .home-text27 {
            display: inline-block;
          }
          .home-text28 {
            display: inline-block;
          }
          .home-text29 {
            display: inline-block;
          }
          .home-text30 {
            display: inline-block;
          }
          .home-text31 {
            display: inline-block;
          }
          .home-text32 {
            display: inline-block;
          }
          .home-text33 {
            display: inline-block;
          }
          .home-text34 {
            display: inline-block;
          }
          .home-text35 {
            display: inline-block;
          }
          .home-text36 {
            display: inline-block;
          }
          .home-text37 {
            display: inline-block;
          }
          .home-text38 {
            display: inline-block;
          }
          .home-text39 {
            display: inline-block;
          }
          .home-text40 {
            display: inline-block;
          }
          .home-text41 {
            display: inline-block;
          }
          .home-text42 {
            display: inline-block;
          }
          .home-text43 {
            display: inline-block;
          }
          .home-text44 {
            display: inline-block;
          }
          .home-text45 {
            display: inline-block;
          }
          .home-text46 {
            display: inline-block;
          }
          .home-text47 {
            display: inline-block;
          }
          .home-text48 {
            display: inline-block;
          }
          .home-text49 {
            display: inline-block;
          }
          .home-text50 {
            display: inline-block;
          }
          .home-text51 {
            display: inline-block;
          }
          .home-text52 {
            display: inline-block;
          }
          .home-text53 {
            display: inline-block;
          }
          .home-text54 {
            display: inline-block;
          }
          .home-text55 {
            display: inline-block;
          }
          .home-text56 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

export default Home

export async function getStaticProps(context) {
  const messages = (await import('/locales/' + context.locale + '.json'))
    .default
  return {
    props: {
      messages,
      ...context,
    },
  }
}
