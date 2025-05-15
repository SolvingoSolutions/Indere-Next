import React, { Fragment } from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import Header from '../components/header'
import Articles from '../components/articles'
import Footer from '../components/footer'

const Home = (props) => {
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
              <span className="home-header1">Our practices</span>
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
                  <span className="home-header2">Cardiology</span>
                  <span className="home-caption1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                  </span>
                </div>
                <div className="read-more">
                  <span className="home-text10">Read more</span>
                  <img
                    alt="image"
                    src="/Icons/arrow-2.svg"
                    className="home-image1"
                  />
                </div>
              </div>
              <div className="home-section2">
                <div className="home-heading3">
                  <span className="home-header3">Orthopedics</span>
                  <span className="home-caption2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                  </span>
                </div>
                <div className="read-more">
                  <span className="home-text11">Read more</span>
                  <img
                    alt="image"
                    src="/Icons/arrow-2.svg"
                    className="home-image2"
                  />
                </div>
              </div>
              <div className="home-section3">
                <div className="home-heading4">
                  <span className="home-header4">Ophtalmology</span>
                  <span className="home-caption3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                  </span>
                </div>
                <div className="read-more">
                  <span className="home-text12">Read more</span>
                  <img
                    alt="image"
                    src="/Icons/arrow-2.svg"
                    className="home-image3"
                  />
                </div>
              </div>
              <div className="home-section4">
                <div className="home-heading5">
                  <span className="home-header5">Pediatrics</span>
                  <span className="home-caption4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                  </span>
                </div>
                <div className="read-more">
                  <span className="home-text13">Read more</span>
                  <img
                    alt="image"
                    src="/Icons/arrow-2.svg"
                    className="home-image4"
                  />
                </div>
              </div>
              <div className="home-section5">
                <div className="home-heading6">
                  <span className="home-header6">Nutrition</span>
                  <span className="home-caption5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                  </span>
                </div>
                <div className="read-more">
                  <span className="home-text14">Read more</span>
                  <img
                    alt="image"
                    src="/Icons/arrow-2.svg"
                    className="home-image5"
                  />
                </div>
              </div>
              <div className="home-section6">
                <div className="home-heading7">
                  <span className="home-header7">General</span>
                  <span className="home-caption6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                  </span>
                </div>
                <div className="read-more">
                  <span className="home-text15">Read more</span>
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
              <span className="home-text16">Scientific projects</span>
            </Fragment>
          }
          link2={
            <Fragment>
              <span className="home-text17">Kapinfood</span>
            </Fragment>
          }
          link3={
            <Fragment>
              <span className="home-text18">News</span>
            </Fragment>
          }
          link4={
            <Fragment>
              <span className="home-text19">Services</span>
            </Fragment>
          }
          link5={
            <Fragment>
              <span className="home-text20">About US</span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="home-text21">Features</span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="home-text22">How it works</span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="home-text23">Prices</span>
            </Fragment>
          }
          text5={
            <Fragment>
              <span className="home-text24">Contact</span>
            </Fragment>
          }
          text6={
            <Fragment>
              <span className="home-text25">Book an appointment</span>
            </Fragment>
          }
        ></Header>
        <Articles
          heading={
            <Fragment>
              <span className="home-text26">
                No articles match your search criteria
              </span>
            </Fragment>
          }
          text={
            <Fragment>
              <span className="home-text27">
                Try adjusting your search terms or selecting a different
                category
              </span>
            </Fragment>
          }
          button={
            <Fragment>
              <span className="home-text28">All</span>
            </Fragment>
          }
          button1={
            <Fragment>
              <span className="home-text29">Catering</span>
            </Fragment>
          }
          button2={
            <Fragment>
              <span className="home-text30">
                {' '}
                Innovations
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </Fragment>
          }
          button3={
            <Fragment>
              <span className="home-text31">Laboratory</span>
            </Fragment>
          }
          button4={
            <Fragment>
              <span className="home-text32">
                {' '}
                Management system/Innovation
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </Fragment>
          }
          button5={
            <Fragment>
              <span className="home-text33">Research</span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text34">
                Gluten Contamination in School Kitchens
              </span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="home-text35">
                {' '}
                In Hungary, school caterers are obliged to provide gluten-free
                meal for students having a medical referral. However,
                implementing gluten-free catering is not a simple task. In [...]
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </Fragment>
          }
          heading2={
            <Fragment>
              <span className="home-text36">
                {' '}
                Measuring the effectiveness of legislation regulating public
                catering
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="home-text37">
                {' '}
                School catering models have a decisive role in preserving
                children&apos;s health and establishing adequatenutritional
                status. Children spend a significant part of their time at
                school, so [...]
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </Fragment>
          }
          heading3={
            <Fragment>
              <span className="home-text38">
                {' '}
                Hungarian Society of Nutrition PhD conference 2023
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="home-text39">
                {' '}
                Assessment of the conditions for gluten-free catering in
                childcare Gluten sensitivity is a digestive disease, affecting
                currently 1% of the world population. The only accepted therapy
                [...]
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </Fragment>
          }
          heading4={
            <Fragment>
              <span className="home-text40">
                {' '}
                Food waste reduction in the catering sector
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="home-text41">
                {' '}
                At the InDeRe Institute for Food System Research and Innovation,
                we work in consortium partnership with the University of
                Veterinary Medicine Budapest, the Hungarian Food Bank [...]
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </Fragment>
          }
          heading5={
            <Fragment>
              <span className="home-text42">
                &quot;OTKA&quot; Postdoctoral ExcellenceProgramme
              </span>
            </Fragment>
          }
          text5={
            <Fragment>
              <span className="home-text43">
                {' '}
                András József Tóth, PhD. has been awarded a Postdoctoral
                Excellence Programme as a Principal Investigator, researching
                Sustainable Child Nutrition. The host institution is the InDeRe
                Institute [...]
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </Fragment>
          }
          heading6={
            <Fragment>
              <span className="home-text44">
                {' '}
                New publication in the journal &quot;Food Quality
                andPreference&quot;!
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </Fragment>
          }
          text6={
            <Fragment>
              <span className="home-text45">
                {' '}
                &quot;Food liking and consumption in schools: Comparison of
                questionnaire-based surveys with real consumption&quot; is the
                title of our new scientific publication in &quot;Food Quality
                and Preference&quot;. [...]
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </Fragment>
          }
          text7={
            <Fragment>
              <span className="home-text46">2024.02.05.</span>
            </Fragment>
          }
          text8={
            <Fragment>
              <span className="home-text47">2023.05.23.</span>
            </Fragment>
          }
          text9={
            <Fragment>
              <span className="home-text48">2023.05.10.</span>
            </Fragment>
          }
          text10={
            <Fragment>
              <span className="home-text49">2023.01.16.</span>
            </Fragment>
          }
          text11={
            <Fragment>
              <span className="home-text50">2022.10.01.</span>
            </Fragment>
          }
          text12={
            <Fragment>
              <span className="home-text51">2022.07.17.</span>
            </Fragment>
          }
        ></Articles>
        <Footer
          header2={
            <Fragment>
              <span className="home-text52">Contact</span>
            </Fragment>
          }
          link102={
            <Fragment>
              <span className="home-text53">
                Office: 1118 Budapest, Budaörsi út 15. I.em. 11.
              </span>
            </Fragment>
          }
          link112={
            <Fragment>
              <span className="home-text54">Tel: 00-36-70-338-2408</span>
            </Fragment>
          }
          header21={
            <Fragment>
              <span className="home-text55">
                © 2020 Foodcontrol. Adatkezelési tájékoztató Powered by Bettery
              </span>
            </Fragment>
          }
          link1121={
            <Fragment>
              <span className="home-text56">food@foodcontrol.hu</span>
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
