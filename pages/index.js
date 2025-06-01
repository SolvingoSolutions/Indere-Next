import React, { Fragment } from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import Navbar from '../components/navbar'
import HomeContent from '../components/home-content'
import Footer1 from '../components/footer1'

const Home = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Indere</title>
          <meta property="og:title" content="Indere" />
        </Head>
        <Navbar
          link1={
            <Fragment>
              <span className="home-text10">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_R60_p2'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link2={
            <Fragment>
              <span className="home-text11">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_9mbSwW'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link3={
            <Fragment>
              <span className="home-text12">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_tnH01w'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link4={
            <Fragment>
              <span className="home-text13">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_I9Wfwj'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link5={
            <Fragment>
              <span className="home-text14">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_CItZQM'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="home-text15">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_H2QuKX'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="home-text16">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_aj7N0s'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="home-text17">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_PZBrjJ'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text5={
            <Fragment>
              <span className="home-text18">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_8uhXmo'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="navbarroot-class-name"
        ></Navbar>
        <HomeContent
          text={
            <Fragment>
              <span className="home-text19">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_fR-8-w'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="home-text20">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text__BcsqO'),
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
                    __html: translate.raw('text_lIW4iq'),
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
                    __html: translate.raw('text_7EOogA'),
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
                    __html: translate.raw('text_ag54hP'),
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
                    __html: translate.raw('text_rh03zt'),
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
                    __html: translate.raw('text_aWVtMd'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text7={
            <Fragment>
              <span className="home-text26">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text__e5meD'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text21={
            <Fragment>
              <span className="home-text27">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_n-_NYv'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text22={
            <Fragment>
              <span className="home-text28">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Ecq50c'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading={
            <Fragment>
              <span className="home-text29">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_kFBBcO'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text30">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_63XMTL'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading2={
            <Fragment>
              <span className="home-text31">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_sRtVna'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading3={
            <Fragment>
              <span className="home-text32">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_q3Rj8g'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading4={
            <Fragment>
              <span className="home-text33">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_0RycUs'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading5={
            <Fragment>
              <span className="home-text34">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_dzDPKd'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading6={
            <Fragment>
              <span className="home-text35">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_rjksKi'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading7={
            <Fragment>
              <span className="home-text36">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_wy-1bK'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
        ></HomeContent>
        <Footer1
          text={
            <Fragment>
              <span className="home-text37">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_QnawwY'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="home-text38">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_tbNKyQ'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="home-text39">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_AERHpN'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="home-text40">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ebesLK'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text7={
            <Fragment>
              <span className="home-text41">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_q7VIzb'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text8={
            <Fragment>
              <span className="home-text42">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_vQ1Iz6'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text9={
            <Fragment>
              <span className="home-text43">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_chEL3t'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text13={
            <Fragment>
              <span className="home-text44">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text__QtbNy'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text14={
            <Fragment>
              <span className="home-text45">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_r0jnZS'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text91={
            <Fragment>
              <span className="home-text46">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_BsJh81'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading={
            <Fragment>
              <span className="home-text47">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_6eiWQs'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text131={
            <Fragment>
              <span className="home-text48">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_dEUiOj'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text132={
            <Fragment>
              <span className="home-text49">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_c_Vafi'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text133={
            <Fragment>
              <span className="home-text50">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_kEyNqI'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text51">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Thz2rS'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
        ></Footer1>
      </div>
      <style jsx>
        {`
          .home-container {
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
          .home-text10 {
            display: inline-block;
          }
          .home-text11 {
            display: inline-block;
          }
          .home-text12 {
            display: inline-block;
          }
          .home-text13 {
            display: inline-block;
          }
          .home-text14 {
            display: inline-block;
          }
          .home-text15 {
            display: inline-block;
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
