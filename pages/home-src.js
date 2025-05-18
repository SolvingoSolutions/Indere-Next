import React, { Fragment } from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import Navbar from '../components/navbar'
import Hero from '../components/hero'
import Home1 from '../components/home1'
import Footer1 from '../components/footer1'

const HomeSrc = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="home-src-container">
        <Head>
          <title>HomeSrc - Indere</title>
          <meta property="og:title" content="HomeSrc - Indere" />
        </Head>
        <Navbar
          text={
            <Fragment>
              <span className="home-src-text10">
                <img alt="Food Control Logo" src="assets/logo.png" />
              </span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="home-src-text11">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_NUrzlA'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="home-src-text12">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_WGa9kV'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="home-src-text13">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_9kWZZN'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="home-src-text14">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_IplmZv'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text5={
            <Fragment>
              <span className="home-src-text15">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_2twMLp'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text6={
            <Fragment>
              <span className="home-src-text16">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_CRTnel'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
        ></Navbar>
        <Hero
          text={
            <Fragment>
              <span className="home-src-text17">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_hFbk4I'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="home-src-text18">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_z4fVzS'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="home-src-text19">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_qBNwRJ'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading={
            <Fragment>
              <span className="home-src-text20">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_hfumIP'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
        ></Hero>
        <Home1
          text={
            <Fragment>
              <span className="home-src-text21">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_rkTp5Q'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="home-src-text22">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text__e-21c'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="home-src-text23">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_b5e_Bj'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="home-src-text24">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_WGZtuJ'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="home-src-text25">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_n2Dvig'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text5={
            <Fragment>
              <span className="home-src-text26">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_SMTsAf'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text6={
            <Fragment>
              <span className="home-src-text27">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_iP-9Qz'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text7={
            <Fragment>
              <span className="home-src-text28">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_JusERQ'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text8={
            <Fragment>
              <span className="home-src-text29">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_7-pc0l'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text9={
            <Fragment>
              <span className="home-src-text30">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_vv0D4A'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          button={
            <Fragment>
              <span className="home-src-text31">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_6Cc3FD'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text10={
            <Fragment>
              <span className="home-src-text32">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ZxxrcC'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text11={
            <Fragment>
              <span className="home-src-text33">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_GtQCQr'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text12={
            <Fragment>
              <span className="home-src-text34">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_W8aalF'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text13={
            <Fragment>
              <span className="home-src-text35">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_nlav65'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text14={
            <Fragment>
              <span className="home-src-text36">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_yHy83G'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text15={
            <Fragment>
              <span className="home-src-text37">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_NJvf0O'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text16={
            <Fragment>
              <span className="home-src-text38">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_4QKhry'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          button1={
            <Fragment>
              <span className="home-src-text39">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_1U-NgY'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          button2={
            <Fragment>
              <span className="home-src-text40">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_TjbI6a'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          button3={
            <Fragment>
              <span className="home-src-text41">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_KGe950'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading={
            <Fragment>
              <span className="home-src-text42">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_cAdFd9'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-src-text43">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_WOc1w_'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading2={
            <Fragment>
              <span className="home-src-text44">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_CCmB-_'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading3={
            <Fragment>
              <span className="home-src-text45">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_45BSLj'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading4={
            <Fragment>
              <span className="home-src-text46">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_rWhYW8'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading5={
            <Fragment>
              <span className="home-src-text47">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_qaC5Dt'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading6={
            <Fragment>
              <span className="home-src-text48">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_dCq2bR'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading7={
            <Fragment>
              <span className="home-src-text49">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_nWYDIk'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading8={
            <Fragment>
              <span className="home-src-text50">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_WuPAdE'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading9={
            <Fragment>
              <span className="home-src-text51">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_tiEGVK'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading10={
            <Fragment>
              <span className="home-src-text52">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_3uKdEH'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading11={
            <Fragment>
              <span className="home-src-text53">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_HWGKLK'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
        ></Home1>
        <Footer1
          text={
            <Fragment>
              <span className="home-src-text54">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_P0mq_e'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="home-src-text55">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_hzuroq'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="home-src-text56">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_QcPk46'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="home-src-text57">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_wxCPO8'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text4={
            <Fragment>
              <a
                href="https://www.facebook.com/foodcontrolcsoport/"
                aria-label="Facebook"
                className="home-src-link1 social-link"
              >
                <span className="home-src-text58 fab fa-facebook-f"></span>
              </a>
            </Fragment>
          }
          text5={
            <Fragment>
              <a
                href="#"
                aria-label="Youtube"
                className="home-src-link2 social-link"
              >
                <span className="home-src-text59 fa-youtube fab"></span>
              </a>
            </Fragment>
          }
          text6={
            <Fragment>
              <a
                href="#"
                aria-label="LinkedIn"
                className="home-src-link3 social-link"
              >
                <span className="home-src-text60 fab fa-linkedin-in"></span>
              </a>
            </Fragment>
          }
          text7={
            <Fragment>
              <span className="home-src-text61">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_BISGda'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text8={
            <Fragment>
              <span className="home-src-text62">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_z3pyzv'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text9={
            <Fragment>
              <span className="home-src-text63">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_T9eZGF'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text10={
            <Fragment>
              <span className="home-src-text64">
                <a href="mailto:food@foodcontrol.hu?subject=">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_CdYWEI'),
                    }}
                  ></span>
                </a>
              </span>
            </Fragment>
          }
          text11={
            <Fragment>
              <span className="home-src-text65">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ImHeON'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text12={
            <Fragment>
              <span className="home-src-text66">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_cQovZT'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text13={
            <Fragment>
              <span className="home-src-text67">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_XpDDBq'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text14={
            <Fragment>
              <span className="home-src-text68">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_q9nq-T'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text15={
            <Fragment>
              <span className="home-src-text69">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_FnTufq'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading={
            <Fragment>
              <span className="home-src-text70">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_KZetfk'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-src-text71">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_08agJH'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
        ></Footer1>
      </div>
      <style jsx>
        {`
          .home-src-container {
            color: var(--text-color);
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            line-height: 1.6;
            flex-direction: column;
            scroll-behavior: smooth;
            background-color: var(--bg-white);
          }
          .home-src-text10 {
            display: inline-block;
          }
          .home-src-text11 {
            display: inline-block;
          }
          .home-src-text12 {
            display: inline-block;
          }
          .home-src-text13 {
            display: inline-block;
          }
          .home-src-text14 {
            display: inline-block;
          }
          .home-src-text15 {
            display: inline-block;
          }
          .home-src-text16 {
            display: inline-block;
          }
          .home-src-text17 {
            display: inline-block;
          }
          .home-src-text18 {
            display: inline-block;
          }
          .home-src-text19 {
            display: inline-block;
          }
          .home-src-text20 {
            display: inline-block;
          }
          .home-src-text21 {
            display: inline-block;
          }
          .home-src-text22 {
            display: inline-block;
          }
          .home-src-text23 {
            display: inline-block;
          }
          .home-src-text24 {
            display: inline-block;
          }
          .home-src-text25 {
            display: inline-block;
          }
          .home-src-text26 {
            display: inline-block;
          }
          .home-src-text27 {
            display: inline-block;
          }
          .home-src-text28 {
            display: inline-block;
          }
          .home-src-text29 {
            display: inline-block;
          }
          .home-src-text30 {
            display: inline-block;
          }
          .home-src-text31 {
            display: inline-block;
          }
          .home-src-text32 {
            display: inline-block;
          }
          .home-src-text33 {
            display: inline-block;
          }
          .home-src-text34 {
            display: inline-block;
          }
          .home-src-text35 {
            display: inline-block;
          }
          .home-src-text36 {
            display: inline-block;
          }
          .home-src-text37 {
            display: inline-block;
          }
          .home-src-text38 {
            display: inline-block;
          }
          .home-src-text39 {
            display: inline-block;
          }
          .home-src-text40 {
            display: inline-block;
          }
          .home-src-text41 {
            display: inline-block;
          }
          .home-src-text42 {
            display: inline-block;
          }
          .home-src-text43 {
            display: inline-block;
          }
          .home-src-text44 {
            display: inline-block;
          }
          .home-src-text45 {
            display: inline-block;
          }
          .home-src-text46 {
            display: inline-block;
          }
          .home-src-text47 {
            display: inline-block;
          }
          .home-src-text48 {
            display: inline-block;
          }
          .home-src-text49 {
            display: inline-block;
          }
          .home-src-text50 {
            display: inline-block;
          }
          .home-src-text51 {
            display: inline-block;
          }
          .home-src-text52 {
            display: inline-block;
          }
          .home-src-text53 {
            display: inline-block;
          }
          .home-src-text54 {
            display: inline-block;
          }
          .home-src-text55 {
            display: inline-block;
          }
          .home-src-text56 {
            display: inline-block;
          }
          .home-src-text57 {
            display: inline-block;
          }
          .home-src-link1 {
            display: inline-block;
          }
          .home-src-text58 {
            font-style: italic;
          }
          .home-src-link2 {
            display: inline-block;
          }
          .home-src-text59 {
            font-style: italic;
          }
          .home-src-link3 {
            display: inline-block;
          }
          .home-src-text60 {
            font-style: italic;
          }
          .home-src-text61 {
            display: inline-block;
          }
          .home-src-text62 {
            display: inline-block;
          }
          .home-src-text63 {
            display: inline-block;
          }
          .home-src-text64 {
            display: inline-block;
          }
          .home-src-text65 {
            display: inline-block;
          }
          .home-src-text66 {
            display: inline-block;
          }
          .home-src-text67 {
            display: inline-block;
          }
          .home-src-text68 {
            display: inline-block;
          }
          .home-src-text69 {
            display: inline-block;
          }
          .home-src-text70 {
            display: inline-block;
          }
          .home-src-text71 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

export default HomeSrc

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
