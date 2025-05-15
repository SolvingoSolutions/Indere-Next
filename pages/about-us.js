import React, { Fragment } from 'react'
import Head from 'next/head'

import { useTranslations } from 'next-intl'

import Header from '../components/header'
import Team from '../components/team'
import Footer from '../components/footer'

const AboutUs = (props) => {
  return (
    <>
      <div className="about-us-container">
        <Head>
          <title>AboutUs - Indere</title>
          <meta property="og:title" content="AboutUs - Indere" />
        </Head>
        <Header
          link1={
            <Fragment>
              <span className="about-us-text10">Scientific projects</span>
            </Fragment>
          }
          link2={
            <Fragment>
              <span className="about-us-text11">Kapinfood</span>
            </Fragment>
          }
          link3={
            <Fragment>
              <span className="about-us-text12">News</span>
            </Fragment>
          }
          link4={
            <Fragment>
              <span className="about-us-text13">Services</span>
            </Fragment>
          }
          link5={
            <Fragment>
              <span className="about-us-text14">About US</span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="about-us-text15">Features</span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="about-us-text16">How it works</span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="about-us-text17">Prices</span>
            </Fragment>
          }
          text5={
            <Fragment>
              <span className="about-us-text18">Contact</span>
            </Fragment>
          }
          text6={
            <Fragment>
              <span className="about-us-text19">Book an appointment</span>
            </Fragment>
          }
        ></Header>
        <Team
          heading1={
            <Fragment>
              <span className="about-us-text20">
                Prof. h.c. Dr. Andras Bittsanszky PhD
              </span>
            </Fragment>
          }
          text7={
            <Fragment>
              <a
                href="#"
                aria-label="Facebook"
                className="about-us-link1 facebook icon-link"
              >
                <span className="about-us-text21 fab fa-facebook-f"></span>
              </a>
            </Fragment>
          }
          heading4={
            <Fragment>
              <span className="about-us-text22">Introduction:</span>
            </Fragment>
          }
          heading6={
            <Fragment>
              <span className="about-us-text23">Qualification:</span>
            </Fragment>
          }
          heading7={
            <Fragment>
              <span className="about-us-text24">Introduction:</span>
            </Fragment>
          }
          text={
            <Fragment>
              <span className="about-us-text25">
                {' '}
                Research director, honorary university professor
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </Fragment>
          }
          text5={
            <Fragment>
              <span className="about-us-text26">
                {' '}
                I graduated from Pannon University of Veszprém with an MBA in
                economics, then obtained PhD at the Doctoral School of
                Management and Business Administration at Szent István
                University. I have more than 15 years of experience in the
                hospitality / food industry, where I am part of the processes
                that affect the sector on every day. My research interests are
                food safety management, food security and the applicability of
                rapid microbiological methods in food product development.
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
              <span className="about-us-text27">Contact:</span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="about-us-text28">
                {' '}
                MBA - Master of Business Administration, doctor of management
                and business administration
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
              <span className="about-us-text29">Qualification:</span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="about-us-text30">
                {' '}
                I started my research activity during my university years. I
                have been researching the genetic and physiological responses of
                plants to various stresses. My current area of interest is food
                microbiology and food hygiene. My research focuses on the
                agricultural production and food processing, the primary goal is
                to bring safe and good quality food to our table.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="about-us-text31">Researcher</span>
            </Fragment>
          }
          heading8={
            <Fragment>
              <span className="about-us-text32">Contact:</span>
            </Fragment>
          }
          text11={
            <Fragment>
              <a
                href="#"
                aria-label="Facebook"
                className="about-us-link2 facebook icon-link"
              >
                <span className="about-us-text33 fab fa-facebook-f"></span>
              </a>
            </Fragment>
          }
          text8={
            <Fragment>
              <a
                href="#"
                aria-label="Twitter"
                className="about-us-link3 twitter icon-link"
              >
                <span className="about-us-text34 fa-twitter fab"></span>
              </a>
            </Fragment>
          }
          text6={
            <Fragment>
              <a
                href="#"
                aria-label="Email"
                className="about-us-link4 email icon-link"
              >
                <span className="about-us-text35 fas fa-envelope"></span>
              </a>
            </Fragment>
          }
          heading2={
            <Fragment>
              <span className="about-us-text36">
                Dr. Andras Jozsef Toth, PhD
              </span>
            </Fragment>
          }
          text12={
            <Fragment>
              <a
                href="#"
                aria-label="Twitter"
                className="about-us-link5 twitter icon-link"
              >
                <span className="about-us-text37 fa-twitter fab"></span>
              </a>
            </Fragment>
          }
          text9={
            <Fragment>
              <a
                href="#"
                aria-label="LinkedIn"
                className="about-us-link6 linkedin icon-link"
              >
                <span className="about-us-text38 fab fa-linkedin-in"></span>
              </a>
            </Fragment>
          }
          text10={
            <Fragment>
              <a
                href="#"
                aria-label="Email"
                className="about-us-link7 email icon-link"
              >
                <span className="about-us-text39 fas fa-envelope"></span>
              </a>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="about-us-text40">
                {' '}
                Agricultural engineer, doctor of plant and horticulture sciences
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </Fragment>
          }
          heading={
            <Fragment>
              <span className="about-us-text41">The Team</span>
            </Fragment>
          }
          rootClassName="teamroot-class-name1"
        ></Team>
        <Footer
          header2={
            <Fragment>
              <span className="about-us-text42">Contact</span>
            </Fragment>
          }
          link102={
            <Fragment>
              <span className="about-us-text43">
                Office: 1118 Budapest, Budaörsi út 15. I.em. 11.
              </span>
            </Fragment>
          }
          link112={
            <Fragment>
              <span className="about-us-text44">Tel: 00-36-70-338-2408</span>
            </Fragment>
          }
          header21={
            <Fragment>
              <span className="about-us-text45">
                © 2020 Foodcontrol. Adatkezelési tájékoztató Powered by Bettery
              </span>
            </Fragment>
          }
          link1121={
            <Fragment>
              <span className="about-us-text46">food@foodcontrol.hu</span>
            </Fragment>
          }
        ></Footer>
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
          .about-us-link1 {
            display: inline-block;
          }
          .about-us-text21 {
            font-style: italic;
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
          .about-us-link2 {
            display: inline-block;
          }
          .about-us-text33 {
            font-style: italic;
          }
          .about-us-link3 {
            display: inline-block;
          }
          .about-us-text34 {
            font-style: italic;
          }
          .about-us-link4 {
            display: inline-block;
          }
          .about-us-text35 {
            font-style: italic;
          }
          .about-us-text36 {
            display: inline-block;
          }
          .about-us-link5 {
            display: inline-block;
          }
          .about-us-text37 {
            font-style: italic;
          }
          .about-us-link6 {
            display: inline-block;
          }
          .about-us-text38 {
            font-style: italic;
          }
          .about-us-link7 {
            display: inline-block;
          }
          .about-us-text39 {
            font-style: italic;
          }
          .about-us-text40 {
            display: inline-block;
          }
          .about-us-text41 {
            display: inline-block;
          }
          .about-us-text42 {
            display: inline-block;
          }
          .about-us-text43 {
            display: inline-block;
          }
          .about-us-text44 {
            display: inline-block;
          }
          .about-us-text45 {
            display: inline-block;
          }
          .about-us-text46 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

export default AboutUs
