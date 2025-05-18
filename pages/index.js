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
          <title>Indere</title>
          <meta property="og:title" content="Indere" />
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
          text7={
            <Fragment>
              <span className="home-src-text17">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_QrPkRO'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text8={
            <Fragment>
              <span className="home-src-text18">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_vznvxn'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text9={
            <Fragment>
              <span className="home-src-text19">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_gx4Awc'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text10={
            <Fragment>
              <span className="home-src-text20">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_sCOzyQ'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text11={
            <Fragment>
              <span className="home-src-text21">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_rlRnPg'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text12={
            <Fragment>
              <span className="home-src-text22">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ArYoug'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
        ></Navbar>
        <Hero
          heading1={
            <Fragment>
              <span className="home-src-text23">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_P5S_lq'),
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
                    __html: translate.raw('text_tFUqu2'),
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
                    __html: translate.raw('text_o6vr-w'),
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
                    __html: translate.raw('text_1VRFNG'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
        ></Hero>
        <Home1
          heading12={
            <Fragment>
              <span className="home-src-text27">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_U39Sr_'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading13={
            <Fragment>
              <span className="home-src-text28">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ZnKkZx'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text17={
            <Fragment>
              <span className="home-src-text29">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_C4AMaL'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading14={
            <Fragment>
              <span className="home-src-text30">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_wD1gEt'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text18={
            <Fragment>
              <span className="home-src-text31">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_8-1vlO'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading15={
            <Fragment>
              <span className="home-src-text32">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_vZLY1c'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text19={
            <Fragment>
              <span className="home-src-text33">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_hWW9WI'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading16={
            <Fragment>
              <span className="home-src-text34">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ZHgNaL'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          button4={
            <Fragment>
              <span className="home-src-text35">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_dDws24'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          button5={
            <Fragment>
              <span className="home-src-text36">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_tDM1Pt'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          button6={
            <Fragment>
              <span className="home-src-text37">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_bpBYgy'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          button7={
            <Fragment>
              <span className="home-src-text38">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ElXdol'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text20={
            <Fragment>
              <span className="home-src-text39">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_SfmGTP'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text21={
            <Fragment>
              <span className="home-src-text40">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Qltyec'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading17={
            <Fragment>
              <span className="home-src-text41">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ljkVVf'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text22={
            <Fragment>
              <span className="home-src-text42">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_NFm8f6'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text23={
            <Fragment>
              <span className="home-src-text43">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_BanNtE'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text24={
            <Fragment>
              <span className="home-src-text44">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_qpjfYX'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading18={
            <Fragment>
              <span className="home-src-text45">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_BecXAk'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text25={
            <Fragment>
              <span className="home-src-text46">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_rP8it0'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text26={
            <Fragment>
              <span className="home-src-text47">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_wfNgh9'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text27={
            <Fragment>
              <span className="home-src-text48">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_iD55DE'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading19={
            <Fragment>
              <span className="home-src-text49">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_j692Hu'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text28={
            <Fragment>
              <span className="home-src-text50">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_k1E_U3'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text29={
            <Fragment>
              <span className="home-src-text51">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_SfLI5B'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text30={
            <Fragment>
              <span className="home-src-text52">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_TabN6S'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading20={
            <Fragment>
              <span className="home-src-text53">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_M6iJGQ'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text31={
            <Fragment>
              <span className="home-src-text54">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_mstk2_'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text32={
            <Fragment>
              <span className="home-src-text55">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_h2wNIR'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading21={
            <Fragment>
              <span className="home-src-text56">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_bh8IRa'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading22={
            <Fragment>
              <span className="home-src-text57">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_-VYWDt'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text33={
            <Fragment>
              <span className="home-src-text58">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_TnucPQ'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading23={
            <Fragment>
              <span className="home-src-text59">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_frClEe'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
        ></Home1>
        <Footer1
          text16={
            <Fragment>
              <span className="home-src-text60">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_MR1CEq'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text17={
            <Fragment>
              <span className="home-src-text61">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_7sA_E8'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading2={
            <Fragment>
              <span className="home-src-text62">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_pCivZC'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading3={
            <Fragment>
              <span className="home-src-text63">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_InOm2w'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text18={
            <Fragment>
              <span className="home-src-text64">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_XxMSxG'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text19={
            <Fragment>
              <span className="home-src-text65">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_hwuuyV'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text20={
            <Fragment>
              <span className="home-src-text66">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_dze8PY'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text21={
            <Fragment>
              <span className="home-src-text67">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_VyVTXp'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text22={
            <Fragment>
              <span className="home-src-text68">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_BVaLyF'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text23={
            <Fragment>
              <span className="home-src-text69">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_z0e_Gm'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text24={
            <Fragment>
              <span className="home-src-text70">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_SV0TVC'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text25={
            <Fragment>
              <span className="home-src-text71">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_kPRN3K'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text26={
            <Fragment>
              <span className="home-src-text72">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_CXGrJK'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text27={
            <Fragment>
              <span className="home-src-text73">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_mdE4Kt'),
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
          .home-src-text58 {
            display: inline-block;
          }
          .home-src-text59 {
            display: inline-block;
          }
          .home-src-text60 {
            display: inline-block;
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
          .home-src-text72 {
            display: inline-block;
          }
          .home-src-text73 {
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
