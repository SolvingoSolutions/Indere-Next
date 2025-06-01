import React, { Fragment } from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import Navbar from '../components/navbar'
import TeamList from '../components/team-list'
import Footer1 from '../components/footer1'

const AboutUs = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="about-us-container">
        <Head>
          <title>AboutUs - Indere</title>
          <meta property="og:title" content="AboutUs - Indere" />
        </Head>
        <Navbar
          link1={
            <Fragment>
              <span className="about-us-text10">
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
              <span className="about-us-text11">
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
              <span className="about-us-text12">
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
              <span className="about-us-text13">
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
              <span className="about-us-text14">
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
              <span className="about-us-text15">
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
              <span className="about-us-text16">
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
              <span className="about-us-text17">
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
              <span className="about-us-text18">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_MK3jjB'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
        ></Navbar>
        <TeamList
          text={
            <Fragment>
              <span className="about-us-text19">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_pCyL4M'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="team-listroot-class-name1"
        ></TeamList>
        <Footer1
          text={
            <Fragment>
              <span className="about-us-text20">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_vp9W9g'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="about-us-text21">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_gnnX-6'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="about-us-text22">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_bUi7Io'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="about-us-text23">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_igkogp'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text7={
            <Fragment>
              <span className="about-us-text24">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_5uGeco'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text8={
            <Fragment>
              <span className="about-us-text25">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_jPESXr'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text9={
            <Fragment>
              <span className="about-us-text26">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_er_BIQ'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text11={
            <Fragment>
              <span className="about-us-text27">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_iB4LAl'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text12={
            <Fragment>
              <span className="about-us-text28">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_XJZTMu'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text13={
            <Fragment>
              <span className="about-us-text29">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_2wnFfm'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text14={
            <Fragment>
              <span className="about-us-text30">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_gI7IZS'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text91={
            <Fragment>
              <span className="about-us-text31">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_lC5643'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading={
            <Fragment>
              <span className="about-us-text32">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_XZ03h4'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="about-us-text33">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_sy2hC9'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="footer1root-class-name"
        ></Footer1>
      </div>
      <style jsx>
        {`
          .about-us-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            scroll-behavior: smooth;
          }
          .about-us-text10 {
            display: inline-block;
          }
          .about-us-text11 {
            display: inline-block;
          }
          .about-us-text12 {
            display: inline-block;
          }
          .about-us-text13 {
            display: inline-block;
          }
          .about-us-text14 {
            display: inline-block;
          }
          .about-us-text15 {
            display: inline-block;
          }
          .about-us-text16 {
            display: inline-block;
          }
          .about-us-text17 {
            display: inline-block;
          }
          .about-us-text18 {
            display: inline-block;
          }
          .about-us-text19 {
            display: inline-block;
          }
          .about-us-text20 {
            display: inline-block;
          }
          .about-us-text21 {
            display: inline-block;
          }
          .about-us-text22 {
            display: inline-block;
          }
          .about-us-text23 {
            display: inline-block;
          }
          .about-us-text24 {
            display: inline-block;
          }
          .about-us-text25 {
            display: inline-block;
          }
          .about-us-text26 {
            display: inline-block;
          }
          .about-us-text27 {
            display: inline-block;
          }
          .about-us-text28 {
            display: inline-block;
          }
          .about-us-text29 {
            display: inline-block;
          }
          .about-us-text30 {
            display: inline-block;
          }
          .about-us-text31 {
            display: inline-block;
          }
          .about-us-text32 {
            display: inline-block;
          }
          .about-us-text33 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

export default AboutUs

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
