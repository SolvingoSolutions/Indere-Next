import React, { Fragment } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Header from '../components/header'
import Features from '../components/features'
import Practice from '../components/practice'
import Doctor from '../components/doctor'
import Footer from '../components/footer'

const Home = (props) => {
  return (
    <>
      <div className="home-container1">
        <Head>
          <title>Indere</title>
          <meta property="og:title" content="Indere" />
        </Head>
        <div data-modal="practices" className="home-modal1">
          <div className="home-practices1">
            <div className="home-heading10">
              <span className="home-header10">Our practices</span>
              <svg
                viewBox="0 0 1024 1024"
                data-close="practices"
                className="home-close"
              >
                <path d="M225.835 286.165l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l225.835-225.835 225.835 225.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-225.835 225.835-225.835-225.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"></path>
              </svg>
            </div>
            <div className="home-grid1">
              <div className="home-section1">
                <div className="home-heading11">
                  <span className="home-header11">Cardiology</span>
                  <span className="home-caption1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                  </span>
                </div>
                <div className="read-more">
                  <span className="home-text100">Read more</span>
                  <img
                    alt="image"
                    src="/Icons/arrow-2.svg"
                    className="home-image10"
                  />
                </div>
              </div>
              <div className="home-section2">
                <div className="home-heading12">
                  <span className="home-header12">Orthopedics</span>
                  <span className="home-caption2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                  </span>
                </div>
                <div className="read-more">
                  <span className="home-text101">Read more</span>
                  <img
                    alt="image"
                    src="/Icons/arrow-2.svg"
                    className="home-image11"
                  />
                </div>
              </div>
              <div className="home-section3">
                <div className="home-heading13">
                  <span className="home-header13">Ophtalmology</span>
                  <span className="home-caption3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                  </span>
                </div>
                <div className="read-more">
                  <span className="home-text102">Read more</span>
                  <img
                    alt="image"
                    src="/Icons/arrow-2.svg"
                    className="home-image12"
                  />
                </div>
              </div>
              <div className="home-section4">
                <div className="home-heading14">
                  <span className="home-header14">Pediatrics</span>
                  <span className="home-caption4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                  </span>
                </div>
                <div className="read-more">
                  <span className="home-text103">Read more</span>
                  <img
                    alt="image"
                    src="/Icons/arrow-2.svg"
                    className="home-image13"
                  />
                </div>
              </div>
              <div className="home-section5">
                <div className="home-heading15">
                  <span className="home-header15">Nutrition</span>
                  <span className="home-caption5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                  </span>
                </div>
                <div className="read-more">
                  <span className="home-text104">Read more</span>
                  <img
                    alt="image"
                    src="/Icons/arrow-2.svg"
                    className="home-image14"
                  />
                </div>
              </div>
              <div className="home-section6">
                <div className="home-heading16">
                  <span className="home-header16">General</span>
                  <span className="home-caption6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt.
                  </span>
                </div>
                <div className="read-more">
                  <span className="home-text105">Read more</span>
                  <img
                    alt="image"
                    src="/Icons/arrow-2.svg"
                    className="home-image15"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="home-hero">
          <Header
            link={
              <Fragment>
                <span className="home-text106">Features</span>
              </Fragment>
            }
            text={
              <Fragment>
                <span className="home-text107">+0 123-456-789</span>
              </Fragment>
            }
            link1={
              <Fragment>
                <span className="home-text108">How it works</span>
              </Fragment>
            }
            link2={
              <Fragment>
                <span className="home-text109">Prices</span>
              </Fragment>
            }
            link3={
              <Fragment>
                <span className="home-text110">Contact</span>
              </Fragment>
            }
            text1={
              <Fragment>
                <span className="home-text111">Book an appointment</span>
              </Fragment>
            }
            text2={
              <Fragment>
                <span className="home-text112">Features</span>
              </Fragment>
            }
            text3={
              <Fragment>
                <span className="home-text113">How it works</span>
              </Fragment>
            }
            text4={
              <Fragment>
                <span className="home-text114">Prices</span>
              </Fragment>
            }
            text5={
              <Fragment>
                <span className="home-text115">Contact</span>
              </Fragment>
            }
            text6={
              <Fragment>
                <span className="home-text116">Book an appointment</span>
              </Fragment>
            }
          ></Header>
          <div className="home-main1">
            <div className="home-content10">
              <div className="home-heading17">
                <h1 className="home-header17">
                  Experienced general practitioners who have an eye for your
                  care. Solvingo
                </h1>
                <p className="home-caption7">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
              </div>
              <button className="button button-main home-book1">
                <img
                  alt="image"
                  src="/Icons/calendar.svg"
                  className="home-image16"
                />
                <span>Book an appointment</span>
              </button>
            </div>
            <div className="home-image17">
              <img
                alt="image"
                src="/doctor-image-1500w.png"
                className="home-image18"
              />
            </div>
          </div>
          <div id="features" className="home-features1">
            <div className="home-content11">
              <Features></Features>
              <Features title="Virtual Clinic"></Features>
              <Features title="Clinical results"></Features>
            </div>
          </div>
          <div className="home-background"></div>
        </section>
        <section className="home-practices2">
          <div className="home-heading18">
            <h2 className="home-text118">Our practices</h2>
            <p className="home-text119">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
          </div>
          <div className="home-content12">
            <div className="home-grid2">
              <Link href="/">
                <a>
                  <div className="home-practice-wrapper1">
                    <Practice></Practice>
                  </div>
                </a>
              </Link>
              <Link href="/">
                <a>
                  <div className="home-practice-wrapper2">
                    <Practice title="Orthopedics"></Practice>
                  </div>
                </a>
              </Link>
              <Link href="/">
                <a>
                  <div className="home-practice-wrapper3">
                    <Practice title="Ophtalmology"></Practice>
                  </div>
                </a>
              </Link>
              <Link href="/">
                <a>
                  <div className="home-practice-wrapper4">
                    <Practice title="Pediatrics"></Practice>
                  </div>
                </a>
              </Link>
              <Link href="/">
                <a>
                  <div className="home-practice-wrapper5">
                    <Practice title="Nutrition"></Practice>
                  </div>
                </a>
              </Link>
              <Link href="/">
                <a>
                  <div className="home-practice-wrapper6">
                    <Practice title="General"></Practice>
                  </div>
                </a>
              </Link>
            </div>
            <button data-open="practices" className="button button-main">
              <span>All practices</span>
            </button>
          </div>
        </section>
        <section id="how-it-works" className="home-why">
          <div className="home-heading19">
            <h2 className="home-header18">Why choose us</h2>
            <p className="home-header19">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
          </div>
          <div className="home-content13">
            <div className="home-video1">
              <video
                src
                poster="/video-1500w.png"
                className="home-video2"
              ></video>
              <div className="home-play">
                <img
                  alt="image"
                  src="/Icons/play.svg"
                  className="home-image19"
                />
              </div>
            </div>
            <div className="home-caption8">
              <h3 className="home-header20">
                Consectetur adipiscing elit, sed do eiusmod tempor
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </h3>
              <p className="home-header21">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
          </div>
        </section>
        <section className="home-features2">
          <div className="home-section7">
            <div className="home-content14">
              <div className="home-header22">
                <h2 className="home-heading20">
                  Dedicated doctors with the core mission to help.
                </h2>
                <p className="home-capton1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
              </div>
              <div className="read-more">
                <span className="home-text121">See our doctors</span>
                <img
                  alt="image"
                  src="/Icons/arrow-2.svg"
                  className="home-image20"
                />
              </div>
            </div>
            <img alt="image" src="/xray-1500w.png" className="home-image21" />
          </div>
          <div className="home-section8">
            <div className="home-content15">
              <div className="home-header23">
                <h2 className="home-heading21">
                  Get access to specialty tests and breakthrough information.
                </h2>
                <p className="home-capton2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
              </div>
              <div className="read-more">
                <span className="home-text122">Find test</span>
                <img
                  alt="image"
                  src="/Icons/arrow-2.svg"
                  className="home-image22"
                />
              </div>
            </div>
            <img alt="image" src="/lab-1500w.png" className="home-image23" />
          </div>
          <div className="home-section9">
            <div className="home-content16">
              <div className="home-header24">
                <h2 className="home-heading22">
                  Find out how we can help you help you.
                </h2>
                <p className="home-capton3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
              </div>
              <button className="button button-main home-book2">
                <span>Book a virtual appointment</span>
              </button>
            </div>
            <img
              alt="image"
              src="/examination-1500w.png"
              className="home-image24"
            />
          </div>
          <button className="home-book3 button button-main">
            <span>Book a virtual appointment</span>
          </button>
        </section>
        <section id="schedule" className="home-schedule">
          <div className="home-content17">
            <div className="home-header25">
              <h2 className="home-heading23">
                Schedule an in person or virtual appointment today
              </h2>
              <p className="home-caption9">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
            <div className="home-types1">
              <a
                href="#book"
                className="home-book-person1 button button-main button-white"
              >
                <span>Book in person appointment</span>
              </a>
              <button className="button button-main button-white home-book-person2">
                <span>Book virtual appointment</span>
              </button>
            </div>
          </div>
        </section>
        <div className="home-search1">
          <div className="home-heading24">
            <h2 className="home-text127">Search diseases &amp; conditions</h2>
            <p className="home-text128">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
          </div>
          <div className="home-content18">
            <div className="home-type-one">
              <div className="home-alphabet">
                <div data-letter="a" className="letter">
                  <span className="home-text129">A</span>
                </div>
                <div data-letter="b" className="letter">
                  <span className="home-text130">B</span>
                </div>
                <div data-letter="c" className="letter">
                  <span className="home-text131">C</span>
                </div>
                <div data-letter="d" className="letter">
                  <span className="home-text132">D</span>
                </div>
                <div data-letter="e" className="letter">
                  <span className="home-text133">E</span>
                </div>
                <div data-letter="f" className="letter">
                  <span className="home-text134">F</span>
                </div>
                <div data-letter="g" className="letter">
                  <span className="home-text135">G</span>
                </div>
                <div data-letter="h" className="letter">
                  <span className="home-text136">H</span>
                </div>
                <div data-letter="i" className="letter">
                  <span className="home-text137">I</span>
                </div>
                <div data-letter="j" className="letter">
                  <span className="home-text138">J</span>
                </div>
                <div data-letter="k" className="letter">
                  <span className="home-text139">K</span>
                </div>
                <div data-letter="l" className="letter">
                  <span className="home-text140">L</span>
                </div>
                <div data-letter="m" className="letter">
                  <span className="home-text141">M</span>
                </div>
                <div data-letter="n" className="letter">
                  <span className="home-text142">N</span>
                </div>
                <div data-letter="o" className="letter">
                  <span className="home-text143">O</span>
                </div>
                <div data-letter="p" className="letter">
                  <span className="home-text144">P</span>
                </div>
                <div data-letter="q" className="letter">
                  <span className="home-text145">Q</span>
                </div>
                <div data-letter="r" className="letter">
                  <span className="home-text146">R</span>
                </div>
                <div data-letter="s" className="letter">
                  <span className="home-text147">S</span>
                </div>
                <div data-letter="t" className="letter">
                  <span className="home-text148">T</span>
                </div>
                <div data-letter="u" className="letter">
                  <span className="home-text149">U</span>
                </div>
                <div data-letter="v" className="letter">
                  <span className="home-text150">V</span>
                </div>
                <div data-letter="w" className="letter">
                  <span className="home-text151">W</span>
                </div>
                <div data-letter="x" className="letter">
                  <span className="home-text152">X</span>
                </div>
                <div data-letter="y" className="letter">
                  <span className="home-text153">Y</span>
                </div>
                <div data-letter="z" className="letter">
                  <span className="home-text154">Z</span>
                </div>
              </div>
              <p className="home-text155">
                You don’t know it’s name? Check out symptom checker below
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <div data-teleport="results" className="home-results">
                <span className="home-heading25">Results:</span>
                <div data-results="letters" className="home-list1"></div>
              </div>
            </div>
            <div className="home-type-two">
              <div className="home-heading26">
                <h3 className="home-text156">Symptom checker</h3>
                <p className="home-text157">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
              </div>
              <div className="home-symptoms1">
                <div className="home-row1">
                  <div className="symptom">
                    <span className="home-text158">Abdominal pain</span>
                  </div>
                  <div className="symptom">
                    <span className="home-text159">Chest pain</span>
                  </div>
                  <div className="symptom">
                    <span className="home-text160">Constipation</span>
                  </div>
                  <div className="symptom">
                    <span className="home-text161">Cough</span>
                  </div>
                  <div className="symptom">
                    <span className="home-text162">Breath difficulty</span>
                  </div>
                </div>
                <div className="home-row2">
                  <div className="symptom">
                    <span className="home-text163">Red eye</span>
                  </div>
                  <div className="symptom">
                    <span className="home-text164">Foot pain</span>
                  </div>
                  <div className="symptom">
                    <span className="home-text165">Foot swelling</span>
                  </div>
                  <div className="symptom">
                    <span className="home-text166">Headache</span>
                  </div>
                  <div className="symptom">
                    <span className="home-text167">Heart palpitation</span>
                  </div>
                </div>
                <div className="home-row3">
                  <div className="symptom">
                    <span className="home-text168">Knee pain</span>
                  </div>
                  <div className="symptom">
                    <span className="home-text169">Hip pain</span>
                  </div>
                  <div className="symptom">
                    <span className="home-text170">Low back pain</span>
                  </div>
                  <div className="symptom">
                    <span className="home-text171">Nasal congestion</span>
                  </div>
                  <div className="symptom">
                    <span className="home-text172">Neck pain</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section id="book" className="home-book4">
          <div className="home-heading27">
            <h2 className="home-text173">Book an appointment</h2>
            <p className="home-text174">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
          </div>
          <div className="home-form">
            <div className="home-types2">
              <div className="book-type">
                <span className="home-text175">In person appointment</span>
              </div>
              <div className="book-type">
                <span className="home-text176">Virtual appointment</span>
              </div>
            </div>
            <div className="home-inputs">
              <input
                type="text"
                placeholder="Name"
                autoComplete="name"
                className="input book-input"
              />
              <input
                type="email"
                placeholder="Email"
                autoComplete="email"
                className="input book-input"
              />
              <input
                type="tel"
                placeholder="Phone"
                autoComplete="tel"
                className="input book-input"
              />
              <div className="home-date1">
                <input
                  type="date"
                  placeholder="Date"
                  className="input book-input"
                />
                <img
                  alt="image"
                  src="/Icons/calendar-2.svg"
                  className="home-image25"
                />
              </div>
              <input
                type="text"
                placeholder="Practice"
                className="input book-input"
              />
              <div className="home-lower">
                <p className="home-text177">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
                <div className="home-button">
                  <button className="home-book5 button button-main">
                    <span>Book</span>
                  </button>
                  <p className="home-text179">
                    <span>
                      Lorem ipsum dolor sit amet, consectetur
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="home-text181">adipiscing elit</span>
                    <span>
                      , sed do eiusmod tempor
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="home-text183">incididunt</span>
                    <span>.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="home-meet">
          <div className="home-heading28">
            <h2 className="home-text185">Meet our doctors</h2>
            <p className="home-text186">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
          </div>
          <div className="home-list2">
            <div className="home-controls">
              <img
                alt="image"
                src="/Icons/circle-arrow.svg"
                data-doctors="previous"
                className="arrow"
              />
              <img
                alt="image"
                src="/Icons/circle-arrow.svg"
                data-doctors="next"
                className="home-forward arrow"
              />
            </div>
            <div data-teleport="doctors" className="home-doctors1">
              <Doctor></Doctor>
              <Doctor imageSrc="/Doctors/doctor-2-300w.png"></Doctor>
              <Doctor imageSrc="/Doctors/doctor-3-300w.png"></Doctor>
              <Doctor imageSrc="/Doctors/doctor-4-300w.png"></Doctor>
            </div>
          </div>
          <div className="home-search2">
            <input
              type="text"
              placeholder="Search by name"
              className="home-textinput6 input book-input"
            />
            <button className="button button-main home-book6">
              <span>Search doctor</span>
            </button>
          </div>
        </section>
        <section className="home-news">
          <div className="home-heading29">
            <h2 className="home-text188">Read our latest news</h2>
            <p className="home-text189">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
          </div>
          <div className="home-list3">
            <div className="home-item1">
              <div className="home-image26">
                <img
                  alt="image"
                  src="/News/news-logo-1500w.png"
                  className="home-image27"
                />
              </div>
              <div className="home-content19">
                <div className="home-details1">
                  <span className="home-date2">November 23, 2022</span>
                  <p className="home-quick-description1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
                <div className="read-more">
                  <span className="home-text190">Read more</span>
                  <img
                    alt="image"
                    src="/Icons/arrow.svg"
                    className="home-image28"
                  />
                </div>
              </div>
            </div>
            <div className="home-item2">
              <div className="home-image29">
                <img
                  alt="image"
                  src="/News/news-1-1500w.png"
                  className="home-image30"
                />
              </div>
              <div className="home-content20">
                <div className="home-details2">
                  <span className="home-date3">November 23, 2022</span>
                  <p className="home-quick-description2">
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div>
                <div className="read-more">
                  <span className="home-text191">Read more</span>
                  <img
                    alt="image"
                    src="/Icons/arrow-2.svg"
                    className="home-image31"
                  />
                </div>
              </div>
            </div>
            <div className="home-item3">
              <div className="home-image32">
                <img
                  alt="image"
                  src="/News/news-2-1500w.png"
                  className="home-image33"
                />
              </div>
              <div className="home-content21">
                <div className="home-details3">
                  <span className="home-date4">November 23, 2022</span>
                  <p className="home-quick-description3">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore.
                  </p>
                </div>
                <div className="read-more">
                  <span className="home-text192">Read more</span>
                  <img
                    alt="image"
                    src="/Icons/arrow-2.svg"
                    className="home-image34"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="home-download">
          <div className="home-main2">
            <img alt="image" src="/phone-1500w.png" className="home-image35" />
            <div className="home-content22">
              <h2 className="home-text193">
                Download our mobile app and book your next appointment
              </h2>
              <div className="home-buttons">
                <button className="home-ios button button-main">
                  <img
                    alt="image"
                    src="/Icons/apple.svg"
                    className="home-image36"
                  />
                  <span>Download for iOS</span>
                </button>
                <button className="button button-main home-android">
                  <img
                    alt="image"
                    src="/Icons/android.svg"
                    className="home-image37"
                  />
                  <span>Download for Android</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <Footer
          link={
            <Fragment>
              <span className="home-text196">Home</span>
            </Fragment>
          }
          text={
            <Fragment>
              <span className="home-text197">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </span>
            </Fragment>
          }
          link1={
            <Fragment>
              <span className="home-text198">About</span>
            </Fragment>
          }
          link2={
            <Fragment>
              <span className="home-text199">Services</span>
            </Fragment>
          }
          link3={
            <Fragment>
              <span className="home-text200">Blog</span>
            </Fragment>
          }
          link4={
            <Fragment>
              <span className="home-text201">Support</span>
            </Fragment>
          }
          link5={
            <Fragment>
              <span className="home-text202">Test Results</span>
            </Fragment>
          }
          link6={
            <Fragment>
              <span className="home-text203">Patients</span>
            </Fragment>
          }
          link7={
            <Fragment>
              <span className="home-text204">Doctors</span>
            </Fragment>
          }
          link8={
            <Fragment>
              <span className="home-text205">Health</span>
            </Fragment>
          }
          link9={
            <Fragment>
              <span className="home-text206">
                24 Street Name, City FI 01234, RO
              </span>
            </Fragment>
          }
          header={
            <Fragment>
              <span className="home-text207">Menu</span>
            </Fragment>
          }
          link10={
            <Fragment>
              <span className="home-text208">contact@template.new</span>
            </Fragment>
          }
          link11={
            <Fragment>
              <span className="home-text209">(004) 234 - 5678</span>
            </Fragment>
          }
          header1={
            <Fragment>
              <span className="home-text210">Resources</span>
            </Fragment>
          }
          header2={
            <Fragment>
              <span className="home-text211">Contact</span>
            </Fragment>
          }
          copyright={
            <Fragment>
              <span className="home-text212">
                © 2022 finbest. All Rights Reserved.
              </span>
            </Fragment>
          }
          copyright1={
            <Fragment>
              <span className="home-text213">
                © 2022 finbest. All Rights Reserved.
              </span>
            </Fragment>
          }
          copyright2={
            <Fragment>
              <span className="home-text214">Privacy Policy</span>
            </Fragment>
          }
          copyright3={
            <Fragment>
              <span className="home-text215">Terms of Use</span>
            </Fragment>
          }
          copyright4={
            <Fragment>
              <span className="home-text216">Privacy Policy</span>
            </Fragment>
          }
          copyright5={
            <Fragment>
              <span className="home-text217">Terms of Use</span>
            </Fragment>
          }
        ></Footer>
        <div>
          <div className="home-container3">
            <Script
              html={`<script>
const modalOpen = document.querySelectorAll('[data-open]');
const modalClose = document.querySelectorAll('[data-close]');

modalOpen.forEach(button => {
    button.addEventListener('click', event => {
        const modal = document.querySelector(\`[data-modal="\${event.target.dataset.open}"]\`);
        modal.style.display = "flex";
    });
});

modalClose.forEach(button => {
    button.addEventListener('click', event => {
        const modal = document.querySelector(\`[data-modal="\${event.target.dataset.close}"]\`);
        modal.style.display = "none";
    });
});
</script>
`}
            ></Script>
          </div>
        </div>
        <div>
          <div className="home-container5">
            <Script
              html={`<script>
const dataLetters = document.querySelectorAll("[data-letter]");
let activeLetters = [];
const maxResults = 6;

dataLetters.forEach(letter => {
  letter.addEventListener("click", function() {
    if (this.classList.contains("letter-active")) {
      this.classList.remove("letter-active");
      activeLetters = activeLetters.filter(a => a !== this.dataset.letter);
    } else {
      this.classList.add("letter-active");
      activeLetters.push(this.dataset.letter);
    }
    if (activeLetters.length == 0) {
      document.querySelector("[data-teleport='results']").style.display = "none";
      return;
    }
    showResults();
  });
});

const showResults = () => {
  fetch("https://raw.githubusercontent.com/Shivanshu-Gupta/web-scrapers/master/medical_ner/medicinenet-diseases.json")
    .then(response => response.json())
    .then(data => {
      const filteredData = data.filter(item => {
        const firstLetter = item.disease.charAt(0).toLowerCase();
        if (activeLetters.includes(firstLetter)) {
          return true;
        }
        return false;
      });

      document.querySelector("[data-teleport='results']").style.display = "flex";
      const resultsContainer = document.querySelector("[data-results='letters']");
      resultsContainer.innerHTML = "";

      let counter = 0;
      const diseaseGroups = {};
      const totalActiveLetters = activeLetters.length;

      filteredData.forEach(disease => {
        const firstLetter = disease.disease[0].toLowerCase();
        if (diseaseGroups[firstLetter]) {
          diseaseGroups[firstLetter].push(disease);
        } else {
          diseaseGroups[firstLetter] = [disease];
        }
      });

      Object.keys(diseaseGroups).sort().forEach((firstLetter, index) => {
        const diseasesForThisLetter = diseaseGroups[firstLetter];
        const diseasesToShow = diseasesForThisLetter.slice(0, Math.ceil(maxResults / totalActiveLetters));

        diseasesToShow.forEach(disease => {
          const resultContainer = document.createElement("div");
          resultContainer.classList.add("search-result");
          resultContainer.classList.add("invisible");
          resultContainer.style.animationDelay = \`\${counter * 0.25}s\`;

          const resultText = document.createElement("span");
          resultText.classList.add("result-text");
          resultText.textContent = disease.disease;

          resultContainer.appendChild(resultText);
          resultsContainer.appendChild(resultContainer);
          counter++;

          if (counter === maxResults) {
            const moreContainer = document.createElement("div");
            moreContainer.classList.add("search-result");
            moreContainer.classList.add("more-results");

            const moreText = document.createElement("span");
            moreText.classList.add("result-text");
            moreText.textContent = "More";

            moreContainer.appendChild(moreText);
            resultsContainer.appendChild(moreContainer);
            addedMoreContainer = true;
            return;
          }
        });
      });
    });
};
</script>
`}
            ></Script>
          </div>
        </div>
        <div>
          <div className="home-container7">
            <Script
              html={`<script>
function scroll(direction) {
  const doctorsDiv = document.querySelector('[data-teleport="doctors"]');
  const scrollAmount = 300;
  if (direction === 'previous') {
    doctorsDiv.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth'
    });
  } else if (direction === 'next') {
    doctorsDiv.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  }
}

const buttons = document.querySelectorAll('[data-doctors]');
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const direction = button.dataset.doctors;
    scroll(direction);
  });
});
</script>`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .home-container1 {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            scroll-behavior: smooth;
          }
          .home-modal1 {
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
          .home-practices1 {
            display: flex;
            padding: var(--dl-layout-space-oneandhalfunits);
            box-shadow: 0px 0px 25px -2px rgba(66, 68, 90, 0.4);
            align-items: center;
            border-radius: 12px;
            flex-direction: column;
            justify-content: center;
            background-color: #ffffff;
          }
          .home-heading10 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            padding-bottom: var(--dl-layout-space-oneandhalfunits);
            justify-content: space-between;
          }
          .home-header10 {
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
          .home-grid1 {
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
          .home-heading11 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header11 {
            font-size: 30px;
            font-style: normal;
            font-weight: 600;
            line-height: 36px;
          }
          .home-caption1 {
            max-width: 385px;
            line-height: 24px;
          }
          .home-text100 {
            font-style: normal;
            font-weight: 600;
            line-height: 24px;
          }
          .home-image10 {
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
          .home-heading12 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header12 {
            font-size: 30px;
            font-style: normal;
            font-weight: 600;
            line-height: 36px;
          }
          .home-caption2 {
            max-width: 385px;
            line-height: 24px;
          }
          .home-text101 {
            font-style: normal;
            font-weight: 600;
            line-height: 24px;
          }
          .home-image11 {
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
          .home-heading13 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header13 {
            font-size: 30px;
            font-style: normal;
            font-weight: 600;
            line-height: 36px;
          }
          .home-caption3 {
            max-width: 385px;
            line-height: 24px;
          }
          .home-text102 {
            font-style: normal;
            font-weight: 600;
            line-height: 24px;
          }
          .home-image12 {
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
          .home-heading14 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header14 {
            font-size: 30px;
            font-style: normal;
            font-weight: 600;
            line-height: 36px;
          }
          .home-caption4 {
            max-width: 385px;
            line-height: 24px;
          }
          .home-text103 {
            font-style: normal;
            font-weight: 600;
            line-height: 24px;
          }
          .home-image13 {
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
          .home-heading15 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header15 {
            font-size: 30px;
            font-style: normal;
            font-weight: 600;
            line-height: 36px;
          }
          .home-caption5 {
            max-width: 385px;
            line-height: 24px;
          }
          .home-text104 {
            font-style: normal;
            font-weight: 600;
            line-height: 24px;
          }
          .home-image14 {
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
          .home-heading16 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-header16 {
            font-size: 30px;
            font-style: normal;
            font-weight: 600;
            line-height: 36px;
          }
          .home-caption6 {
            max-width: 385px;
            line-height: 24px;
          }
          .home-text105 {
            font-style: normal;
            font-weight: 600;
            line-height: 24px;
          }
          .home-image15 {
            width: 12px;
            object-fit: cover;
          }
          .home-hero {
            width: 100%;
            height: 100vh;
            display: flex;
            position: relative;
            align-items: center;
            flex-direction: column;
          }
          .home-text106 {
            display: inline-block;
          }
          .home-text107 {
            display: inline-block;
          }
          .home-text108 {
            display: inline-block;
          }
          .home-text109 {
            display: inline-block;
          }
          .home-text110 {
            display: inline-block;
          }
          .home-text111 {
            display: inline-block;
          }
          .home-text112 {
            display: inline-block;
          }
          .home-text113 {
            display: inline-block;
          }
          .home-text114 {
            display: inline-block;
          }
          .home-text115 {
            display: inline-block;
          }
          .home-text116 {
            display: inline-block;
          }
          .home-main1 {
            flex: 1;
            width: 100%;
            display: flex;
            z-index: 100;
            max-width: 1440px;
            align-items: stretch;
            padding-left: var(--dl-layout-space-fiveunits);
            flex-direction: row;
            justify-content: space-between;
          }
          .home-content10 {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-layout-space-oneandhalfunits);
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-oneandhalfunits);
            justify-content: center;
          }
          .home-heading17 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .home-header17 {
            width: 100%;
            font-size: 62px;
            max-width: 750px;
            font-style: normal;
            font-weight: 600;
            line-height: 74px;
          }
          .home-caption7 {
            width: 100%;
            font-size: 18px;
            max-width: 600px;
            line-height: 27px;
          }
          .home-image16 {
            width: 18px;
            object-fit: cover;
          }
          .home-image17 {
            flex: 1;
            display: flex;
            align-items: flex-end;
            padding-right: var(--dl-layout-space-fiveunits);
            flex-direction: row;
            justify-content: center;
          }
          .home-image18 {
            height: 95%;
            object-fit: cover;
          }
          .home-features1 {
            width: 100%;
            display: flex;
            z-index: 100;
            align-items: center;
            padding-top: var(--dl-layout-space-fiveunits);
            flex-direction: row;
            padding-bottom: var(--dl-layout-space-fiveunits);
            justify-content: center;
            background-color: #2461ff;
          }
          .home-content11 {
            gap: var(--dl-layout-space-threeunits);
            flex: 1;
            display: flex;
            max-width: 1440px;
            align-items: center;
            padding-left: var(--dl-layout-space-fiveunits);
            padding-right: var(--dl-layout-space-fiveunits);
            flex-direction: row;
          }
          .home-background {
            right: 0px;
            width: 37%;
            bottom: 0px;
            height: 100%;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-end;
            background-color: #d0f4fd;
          }
          .home-practices2 {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            display: flex;
            max-width: 1440px;
            align-items: flex-start;
            padding-top: 120px;
            padding-left: var(--dl-layout-space-fiveunits);
            padding-right: 120px;
            flex-direction: row;
            padding-bottom: 120px;
          }
          .home-heading18 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text118 {
            font-size: 56px;
            font-style: normal;
            font-weight: 600;
          }
          .home-text119 {
            font-size: 18px;
            max-width: 385px;
            line-height: 27px;
          }
          .home-content12 {
            gap: var(--dl-layout-space-fourunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-grid2 {
            gap: var(--dl-layout-space-threeunits);
            flex: 1;
            display: grid;
            align-items: flex-start;
            flex-direction: column;
            grid-template-columns: repeat(2, 1fr);
          }
          .home-practice-wrapper1 {
            cursor: pointer;
            text-decoration: none;
          }
          .home-practice-wrapper2 {
            cursor: pointer;
            text-decoration: none;
          }
          .home-practice-wrapper3 {
            cursor: pointer;
            text-decoration: none;
          }
          .home-practice-wrapper4 {
            cursor: pointer;
            text-decoration: none;
          }
          .home-practice-wrapper5 {
            cursor: pointer;
            text-decoration: none;
          }
          .home-practice-wrapper6 {
            cursor: pointer;
            text-decoration: none;
          }
          .home-why {
            gap: var(--dl-layout-space-fiveunits);
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: 120px;
            padding-left: var(--dl-layout-space-fiveunits);
            padding-right: var(--dl-layout-space-fiveunits);
            flex-direction: column;
            padding-bottom: 120px;
            background-color: #d0f4fd;
          }
          .home-heading19 {
            gap: var(--dl-layout-space-unit);
            width: 100%;
            display: flex;
            max-width: 1440px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-header18 {
            font-size: 56px;
            max-width: 600px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .home-header19 {
            font-size: 18px;
            max-width: 700px;
            text-align: center;
            line-height: 27px;
          }
          .home-content13 {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-video1 {
            width: 100%;
            display: flex;
            position: relative;
            max-width: 900px;
            align-items: center;
            flex-direction: column;
          }
          .home-video2 {
            width: 100%;
          }
          .home-play {
            top: 0px;
            left: 0px;
            right: 0px;
            width: 100%;
            bottom: 0px;
            cursor: pointer;
            height: 100%;
            margin: auto;
            display: flex;
            position: absolute;
            transition: 0.3s;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-play:hover {
            background-color: rgba(0, 0, 0, 0.3);
          }
          .home-image19 {
            width: 80px;
            object-fit: cover;
          }
          .home-caption8 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-header20 {
            font-size: 24px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
            line-height: 36px;
          }
          .home-header21 {
            max-width: 600px;
            text-align: center;
            line-height: 24px;
          }
          .home-features2 {
            gap: 120px;
            width: 100%;
            display: flex;
            max-width: 1440px;
            align-items: center;
            padding-top: 120px;
            padding-left: var(--dl-layout-space-fiveunits);
            padding-right: var(--dl-layout-space-fiveunits);
            flex-direction: column;
            padding-bottom: 120px;
          }
          .home-section7 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-content14 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-header22 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-heading20 {
            font-size: 56px;
            max-width: 600px;
            font-style: normal;
            font-weight: 600;
          }
          .home-capton1 {
            font-size: 18px;
            max-width: 600px;
            line-height: 27px;
          }
          .home-text121 {
            font-style: normal;
            font-weight: 600;
            line-height: 24px;
          }
          .home-image20 {
            width: 12px;
            object-fit: cover;
          }
          .home-image21 {
            width: 400px;
            object-fit: cover;
          }
          .home-section8 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row-reverse;
            justify-content: space-between;
          }
          .home-content15 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-header23 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-heading21 {
            font-size: 56px;
            max-width: 600px;
            font-style: normal;
            font-weight: 600;
          }
          .home-capton2 {
            font-size: 18px;
            max-width: 600px;
            line-height: 27px;
          }
          .home-text122 {
            font-style: normal;
            font-weight: 600;
            line-height: 24px;
          }
          .home-image22 {
            width: 12px;
            object-fit: cover;
          }
          .home-image23 {
            width: 520px;
            object-fit: cover;
          }
          .home-section9 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-content16 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-header24 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-heading22 {
            font-size: 56px;
            max-width: 600px;
            font-style: normal;
            font-weight: 600;
          }
          .home-capton3 {
            font-size: 18px;
            max-width: 600px;
            line-height: 27px;
          }
          .home-image24 {
            width: 580px;
            object-fit: cover;
          }
          .home-book3 {
            display: none;
          }
          .home-schedule {
            width: 100%;
            display: flex;
            max-width: 1440px;
            align-items: center;
            padding-left: var(--dl-layout-space-fiveunits);
            padding-right: var(--dl-layout-space-fiveunits);
            flex-direction: column;
            padding-bottom: 120px;
            justify-content: center;
          }
          .home-content17 {
            gap: var(--dl-layout-space-fourunits);
            width: 100%;
            display: flex;
            padding: var(--dl-layout-space-fiveunits);
            align-items: center;
            flex-direction: column;
            background-color: #2461ff;
          }
          .home-header25 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-heading23 {
            color: #ffffff;
            font-size: 56px;
            max-width: 800px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .home-caption9 {
            color: rgba(255, 255, 255, 0.8);
            font-size: 18px;
            max-width: 900px;
            text-align: center;
            line-height: 27px;
          }
          .home-types1 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-book-person1 {
            text-decoration: none;
          }
          .home-search1 {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            display: flex;
            max-width: 1440px;
            align-items: stretch;
            border-color: #b4b9c6;
            padding-left: var(--dl-layout-space-fiveunits);
            padding-right: var(--dl-layout-space-fiveunits);
            flex-direction: row;
            padding-bottom: 110px;
            justify-content: flex-start;
            border-bottom-width: 1px;
          }
          .home-heading24 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text127 {
            font-size: 56px;
            max-width: 385px;
            font-style: normal;
            font-weight: 600;
          }
          .home-text128 {
            font-size: 18px;
            max-width: 385px;
            line-height: 27px;
          }
          .home-content18 {
            gap: var(--dl-layout-space-fiveunits);
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-type-one {
            gap: var(--dl-layout-space-threeunits);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: flex-start;
            border-color: #b4b9c6;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-fiveunits);
            justify-content: flex-start;
            border-bottom-width: 1px;
          }
          .home-alphabet {
            display: grid;
            grid-gap: var(--dl-layout-space-oneandhalfunits);
            align-items: center;
            justify-content: center;
            grid-template-columns: repeat(10, minmax(60px, 1fr));
          }
          .home-text129 {
            font-size: 20px;
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
          }
          .home-text130 {
            font-size: 20px;
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
          }
          .home-text131 {
            font-size: 20px;
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
          }
          .home-text132 {
            font-size: 20px;
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
          }
          .home-text133 {
            font-size: 20px;
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
          }
          .home-text134 {
            font-size: 20px;
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
          }
          .home-text135 {
            font-size: 20px;
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
          }
          .home-text136 {
            font-size: 20px;
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
          }
          .home-text137 {
            font-size: 20px;
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
          }
          .home-text138 {
            font-size: 20px;
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
          }
          .home-text139 {
            font-size: 20px;
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
          }
          .home-text140 {
            font-size: 20px;
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
          }
          .home-text141 {
            font-size: 20px;
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
          }
          .home-text142 {
            font-size: 20px;
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
          }
          .home-text143 {
            font-size: 20px;
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
          }
          .home-text144 {
            font-size: 20px;
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
          }
          .home-text145 {
            font-size: 20px;
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
          }
          .home-text146 {
            font-size: 20px;
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
          }
          .home-text147 {
            font-size: 20px;
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
          }
          .home-text148 {
            font-size: 20px;
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
          }
          .home-text149 {
            font-size: 20px;
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
          }
          .home-text150 {
            font-size: 20px;
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
          }
          .home-text151 {
            font-size: 20px;
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
          }
          .home-text152 {
            font-size: 20px;
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
          }
          .home-text153 {
            font-size: 20px;
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
          }
          .home-text154 {
            font-size: 20px;
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
          }
          .home-text155 {
            max-width: 700px;
            line-height: 24px;
          }
          .home-results {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: none;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-heading25 {
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
            white-space: nowrap;
          }
          .home-list1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-type-two {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 1;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-heading26 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text156 {
            font-size: 30px;
            font-style: normal;
            font-weight: 600;
          }
          .home-text157 {
            max-width: 700px;
            line-height: 24px;
          }
          .home-symptoms1 {
            gap: var(--dl-layout-space-unit);
            flex: 1;
            width: 100%;
            display: flex;
            grid-gap: var(--dl-layout-space-unit);
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-row1 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-text158 {
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
            white-space: nowrap;
          }
          .home-text159 {
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
            white-space: nowrap;
          }
          .home-text160 {
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
            white-space: nowrap;
          }
          .home-text161 {
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
            white-space: nowrap;
          }
          .home-text162 {
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
            white-space: nowrap;
          }
          .home-row2 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-text163 {
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
            white-space: nowrap;
          }
          .home-text164 {
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
            white-space: nowrap;
          }
          .home-text165 {
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
            white-space: nowrap;
          }
          .home-text166 {
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
            white-space: nowrap;
          }
          .home-text167 {
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
            white-space: nowrap;
          }
          .home-row3 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .home-text168 {
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
            white-space: nowrap;
          }
          .home-text169 {
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
            white-space: nowrap;
          }
          .home-text170 {
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
            white-space: nowrap;
          }
          .home-text171 {
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
            white-space: nowrap;
          }
          .home-text172 {
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
            white-space: nowrap;
          }
          .home-book4 {
            gap: var(--dl-layout-space-fiveunits);
            width: 100%;
            display: flex;
            max-width: 1440px;
            align-items: center;
            padding-top: 120px;
            border-color: #b4b9c6;
            padding-left: var(--dl-layout-space-fiveunits);
            padding-right: var(--dl-layout-space-fiveunits);
            flex-direction: column;
            padding-bottom: 120px;
            justify-content: center;
            border-bottom-width: 1px;
          }
          .home-heading27 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-text173 {
            font-size: 56px;
            max-width: 600px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .home-text174 {
            font-size: 18px;
            max-width: 700px;
            text-align: center;
            line-height: 27px;
          }
          .home-form {
            gap: var(--dl-layout-space-fourunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-types2 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-text175 {
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
            white-space: nowrap;
          }
          .home-text176 {
            font-style: normal;
            font-family: Inter;
            font-weight: 600;
            white-space: nowrap;
          }
          .home-inputs {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            max-width: 600px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-date1 {
            width: 100%;
            display: flex;
            align-items: flex-end;
            flex-direction: row;
            justify-content: center;
          }
          .home-image25 {
            width: 20px;
            object-fit: cover;
            border-color: #b4b9c6;
            padding-bottom: var(--dl-layout-space-unit);
            border-bottom-width: 1px;
          }
          .home-lower {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text177 {
            font-size: 10px;
            max-width: 700px;
            text-align: left;
            line-height: 15px;
          }
          .home-button {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-book5 {
            width: 100%;
          }
          .home-text179 {
            font-size: 10px;
            max-width: 700px;
            text-align: left;
            line-height: 15px;
          }
          .home-text181 {
            color: #2461ff;
            font-style: normal;
            font-weight: 600;
          }
          .home-text183 {
            color: #2461ff;
            font-style: normal;
            font-weight: 600;
          }
          .home-meet {
            gap: var(--dl-layout-space-fiveunits);
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: 120px;
            padding-left: var(--dl-layout-space-fiveunits);
            padding-right: var(--dl-layout-space-fiveunits);
            flex-direction: column;
            padding-bottom: 120px;
            background-color: #d0f4fd;
          }
          .home-heading28 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-text185 {
            font-size: 56px;
            max-width: 600px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .home-text186 {
            font-size: 18px;
            max-width: 700px;
            text-align: center;
            line-height: 27px;
          }
          .home-list2 {
            gap: var(--dl-layout-space-fourunits);
            width: 100%;
            display: flex;
            max-width: 1440px;
            align-items: center;
            flex-direction: row;
          }
          .home-controls {
            gap: var(--dl-layout-space-halfunit);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-forward {
            transform: rotate(180deg);
          }
          .home-doctors1 {
            gap: var(--dl-layout-space-threeunits);
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-search2 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            max-width: 570px;
            align-items: flex-end;
            flex-direction: row;
            justify-content: center;
          }
          .home-textinput6 {
            flex: 1;
            height: 100%;
          }
          .home-news {
            gap: var(--dl-layout-space-fiveunits);
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: 120px;
            padding-left: var(--dl-layout-space-fiveunits);
            padding-right: var(--dl-layout-space-fiveunits);
            flex-direction: column;
            padding-bottom: 200px;
          }
          .home-heading29 {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .home-text188 {
            font-size: 56px;
            max-width: 600px;
            font-style: normal;
            text-align: center;
            font-weight: 600;
          }
          .home-text189 {
            font-size: 18px;
            max-width: 700px;
            text-align: center;
            line-height: 27px;
          }
          .home-list3 {
            gap: var(--dl-layout-space-threeunits);
            flex: 1;
            width: 100%;
            display: flex;
            max-width: 1440px;
            align-items: center;
            flex-direction: row;
          }
          .home-item1 {
            width: 100%;
            height: 640px;
            display: flex;
            align-items: center;
            flex-direction: column;
            background-color: #2461ff;
          }
          .home-image26 {
            width: 100%;
            height: 275px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-image27 {
            height: 50px;
            object-fit: cover;
          }
          .home-content19 {
            flex: 1;
            width: 100%;
            display: flex;
            padding: var(--dl-layout-space-threeunits);
            align-items: flex-start;
            flex-direction: column;
            justify-content: space-between;
          }
          .home-details1 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-date2 {
            color: rgb(255, 255, 255);
            line-height: 24px;
          }
          .home-quick-description1 {
            color: rgb(255, 255, 255);
            font-size: 24px;
            font-style: normal;
            font-weight: 500;
          }
          .home-text190 {
            color: rgb(255, 255, 255);
            font-style: normal;
            font-weight: 600;
            line-height: 24px;
          }
          .home-image28 {
            width: 12px;
            object-fit: cover;
          }
          .home-item2 {
            width: 100%;
            height: 640px;
            display: flex;
            align-items: center;
            flex-direction: column;
            background-color: #f5f5f7;
          }
          .home-image29 {
            width: 100%;
            height: 274px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-image30 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .home-content20 {
            flex: 1;
            width: 100%;
            display: flex;
            padding: var(--dl-layout-space-threeunits);
            align-items: flex-start;
            flex-direction: column;
            justify-content: space-between;
          }
          .home-details2 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-date3 {
            color: #000000;
            line-height: 24px;
          }
          .home-quick-description2 {
            color: rgb(0, 0, 0);
            font-size: 24px;
            font-style: normal;
            font-weight: 500;
          }
          .home-text191 {
            color: #000000;
            font-style: normal;
            font-weight: 600;
            line-height: 24px;
          }
          .home-image31 {
            width: 12px;
            object-fit: cover;
          }
          .home-item3 {
            width: 100%;
            height: 640px;
            display: flex;
            align-items: center;
            flex-direction: column;
            background-color: #f5f5f7;
          }
          .home-image32 {
            width: 100%;
            height: 274px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-image33 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .home-content21 {
            flex: 1;
            width: 100%;
            display: flex;
            padding: var(--dl-layout-space-threeunits);
            align-items: flex-start;
            flex-direction: column;
            justify-content: space-between;
          }
          .home-details3 {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-date4 {
            color: #000000;
            line-height: 24px;
          }
          .home-quick-description3 {
            color: rgb(0, 0, 0);
            font-size: 24px;
            font-style: normal;
            font-weight: 500;
          }
          .home-text192 {
            color: #000000;
            font-style: normal;
            font-weight: 600;
            line-height: 24px;
          }
          .home-image34 {
            width: 12px;
            object-fit: cover;
          }
          .home-download {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-main2 {
            width: 100%;
            display: flex;
            align-items: flex-end;
            flex-direction: row;
            justify-content: center;
            background-color: #d0f4fd;
          }
          .home-image35 {
            height: 565px;
            margin-top: -80px;
            object-fit: cover;
          }
          .home-content22 {
            gap: var(--dl-layout-space-threeunits);
            height: 100%;
            display: flex;
            align-items: flex-start;
            padding-top: 120px;
            padding-left: 130px;
            flex-direction: column;
            padding-bottom: 120px;
            justify-content: center;
          }
          .home-text193 {
            font-size: 40px;
            max-width: 600px;
            font-style: normal;
            font-weight: 600;
            line-height: 48px;
          }
          .home-buttons {
            gap: var(--dl-layout-space-unit);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .home-ios {
            gap: var(--dl-layout-space-halfunit);
          }
          .home-image36 {
            width: 16px;
            object-fit: cover;
          }
          .home-image37 {
            width: 16px;
            object-fit: cover;
          }
          .home-text196 {
            display: inline-block;
          }
          .home-text197 {
            display: inline-block;
          }
          .home-text198 {
            display: inline-block;
          }
          .home-text199 {
            display: inline-block;
          }
          .home-text200 {
            display: inline-block;
          }
          .home-text201 {
            display: inline-block;
          }
          .home-text202 {
            display: inline-block;
          }
          .home-text203 {
            display: inline-block;
          }
          .home-text204 {
            display: inline-block;
          }
          .home-text205 {
            display: inline-block;
          }
          .home-text206 {
            display: inline-block;
          }
          .home-text207 {
            display: inline-block;
          }
          .home-text208 {
            display: inline-block;
          }
          .home-text209 {
            display: inline-block;
          }
          .home-text210 {
            display: inline-block;
          }
          .home-text211 {
            display: inline-block;
          }
          .home-text212 {
            display: inline-block;
          }
          .home-text213 {
            display: inline-block;
          }
          .home-text214 {
            display: inline-block;
          }
          .home-text215 {
            display: inline-block;
          }
          .home-text216 {
            display: inline-block;
          }
          .home-text217 {
            display: inline-block;
          }
          .home-container3 {
            display: contents;
          }
          .home-container5 {
            display: contents;
          }
          .home-container7 {
            display: contents;
          }
          @media (max-width: 991px) {
            .home-hero {
              flex: 1;
              height: 0px;
            }
            .home-main1 {
              flex-direction: column;
            }
            .home-content10 {
              padding-top: 0px;
              padding-bottom: 0px;
            }
            .home-header17 {
              max-width: 75%;
            }
            .home-caption7 {
              max-width: 75%;
            }
            .home-image17 {
              flex: 0 0 auto;
              align-items: flex-end;
              padding-right: var(--dl-layout-space-twounits);
              justify-content: flex-end;
            }
            .home-features1 {
              padding-top: var(--dl-layout-space-fourunits);
              flex-direction: row;
              padding-bottom: var(--dl-layout-space-fourunits);
            }
            .home-content11 {
              flex-direction: column;
            }
            .home-background {
              left: 0px;
              width: 100%;
              bottom: 0px;
              height: 55%;
              position: absolute;
              justify-content: flex-end;
            }
            .home-practices2 {
              flex-direction: column;
            }
            .home-why {
              gap: var(--dl-layout-space-threeunits);
            }
            .home-features2 {
              gap: var(--dl-layout-space-threeunits);
            }
            .home-section7 {
              gap: var(--dl-layout-space-twounits);
              align-items: flex-start;
              flex-direction: column;
              justify-content: flex-start;
            }
            .home-image21 {
              width: 100%;
            }
            .home-section8 {
              gap: var(--dl-layout-space-twounits);
              align-items: flex-start;
              flex-direction: column;
              justify-content: flex-start;
            }
            .home-image23 {
              width: 100%;
            }
            .home-section9 {
              gap: var(--dl-layout-space-twounits);
              align-items: flex-start;
              flex-direction: column;
              justify-content: flex-start;
            }
            .home-image24 {
              width: 100%;
            }
            .home-schedule {
              padding-left: 0px;
              padding-right: 0px;
            }
            .home-types1 {
              width: 100%;
              flex-direction: column;
            }
            .home-book-person1 {
              width: 50%;
            }
            .home-book-person2 {
              width: 50%;
            }
            .home-search1 {
              width: 100%;
              flex-direction: column;
            }
            .home-heading24 {
              align-items: center;
            }
            .home-text127 {
              max-width: 100%;
              text-align: center;
            }
            .home-text128 {
              text-align: center;
            }
            .home-content18 {
              gap: var(--dl-layout-space-threeunits);
            }
            .home-type-one {
              gap: var(--dl-layout-space-twounits);
              width: 100%;
              align-items: center;
              padding-bottom: var(--dl-layout-space-threeunits);
              justify-content: center;
            }
            .home-alphabet {
              gap: var(--dl-layout-space-halfunit);
              width: 100%;
              display: flex;
              flex-wrap: wrap;
              padding-left: var(--dl-layout-space-fiveunits);
              padding-right: var(--dl-layout-space-fiveunits);
            }
            .home-text155 {
              text-align: center;
            }
            .home-type-two {
              gap: var(--dl-layout-space-twounits);
            }
            .home-heading26 {
              align-items: center;
            }
            .home-text156 {
              text-align: center;
            }
            .home-text157 {
              text-align: center;
            }
            .home-symptoms1 {
              padding-left: var(--dl-layout-space-fiveunits);
              padding-right: var(--dl-layout-space-fiveunits);
            }
            .home-row1 {
              flex-wrap: wrap;
              flex-direction: row;
              justify-content: center;
            }
            .home-row2 {
              flex-wrap: wrap;
              justify-content: center;
            }
            .home-row3 {
              flex-wrap: wrap;
              justify-content: center;
            }
            .home-meet {
              padding-right: 0px;
            }
            .home-heading28 {
              padding-right: var(--dl-layout-space-fiveunits);
            }
            .home-list2 {
              position: relative;
              flex-direction: column-reverse;
            }
            .home-controls {
              gap: var(--dl-layout-space-unit);
              padding-right: var(--dl-layout-space-fiveunits);
              flex-direction: row;
            }
            .home-doctors1 {
              overflow: hidden;
            }
            .home-search2 {
              gap: var(--dl-layout-space-twounits);
              padding-right: var(--dl-layout-space-fiveunits);
              flex-direction: column;
            }
            .home-book6 {
              width: 100%;
            }
            .home-list3 {
              gap: var(--dl-layout-space-twounits);
              flex-direction: column;
            }
            .home-item1 {
              height: auto;
            }
            .home-image26 {
              height: 280px;
            }
            .home-content19 {
              gap: var(--dl-layout-space-twounits);
              padding-top: var(--dl-layout-space-twounits);
              padding-left: var(--dl-layout-space-twounits);
              padding-right: var(--dl-layout-space-twounits);
              padding-bottom: var(--dl-layout-space-twounits);
              justify-content: flex-start;
            }
            .home-quick-description1 {
              font-size: 18px;
            }
            .home-item2 {
              height: auto;
            }
            .home-image29 {
              height: 280px;
            }
            .home-content20 {
              gap: var(--dl-layout-space-twounits);
              padding: var(--dl-layout-space-twounits);
              justify-content: flex-start;
            }
            .home-quick-description2 {
              font-size: 18px;
            }
            .home-item3 {
              height: auto;
            }
            .home-image32 {
              height: 280px;
            }
            .home-content21 {
              gap: var(--dl-layout-space-twounits);
              padding: var(--dl-layout-space-twounits);
              justify-content: flex-start;
            }
            .home-quick-description3 {
              font-size: 18px;
            }
            .home-content22 {
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
            }
          }
          @media (max-width: 767px) {
            .home-main1 {
              gap: var(--dl-layout-space-threeunits);
              align-items: flex-end;
              padding-left: var(--dl-layout-space-oneandhalfunits);
              justify-content: center;
            }
            .home-header17 {
              font-size: 32px;
              max-width: 70%;
              line-height: 38px;
            }
            .home-caption7 {
              font-size: 16px;
              max-width: 70%;
              line-height: 24px;
            }
            .home-content11 {
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
            }
            .home-practices2 {
              padding-top: var(--dl-layout-space-fourunits);
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
              padding-bottom: var(--dl-layout-space-fourunits);
            }
            .home-heading18 {
              gap: var(--dl-layout-space-unit);
            }
            .home-text118 {
              font-size: 30px;
              line-height: 36px;
            }
            .home-text119 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-content12 {
              gap: var(--dl-layout-space-threeunits);
              width: 100%;
            }
            .home-grid2 {
              gap: var(--dl-layout-space-twounits);
              width: 100%;
              grid-template-columns: repeat(1, 1fr);
            }
            .home-why {
              padding-top: var(--dl-layout-space-fourunits);
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
              padding-bottom: var(--dl-layout-space-fourunits);
            }
            .home-header18 {
              font-size: 30px;
              line-height: 36px;
            }
            .home-header19 {
              font-size: 14px;
              max-width: 60%;
              line-height: 21px;
            }
            .home-content13 {
              gap: var(--dl-layout-space-twounits);
            }
            .home-header20 {
              font-size: 22px;
              line-height: 33px;
            }
            .home-header21 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-features2 {
              padding-top: var(--dl-layout-space-fourunits);
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
              padding-bottom: var(--dl-layout-space-fourunits);
            }
            .home-content14 {
              gap: var(--dl-layout-space-unit);
            }
            .home-heading20 {
              font-size: 30px;
              line-height: 36px;
            }
            .home-capton1 {
              font-size: 14px;
              max-width: 80%;
              line-height: 21px;
            }
            .home-heading21 {
              font-size: 30px;
              line-height: 36px;
            }
            .home-capton2 {
              font-size: 14px;
              max-width: 80%;
              line-height: 21px;
            }
            .home-heading22 {
              font-size: 30px;
              line-height: 36px;
            }
            .home-capton3 {
              font-size: 14px;
              max-width: 80%;
              line-height: 21px;
            }
            .home-book2 {
              display: none;
            }
            .home-book3 {
              width: 100%;
              display: flex;
            }
            .home-schedule {
              padding-bottom: var(--dl-layout-space-fourunits);
            }
            .home-content17 {
              gap: var(--dl-layout-space-twounits);
              padding-top: var(--dl-layout-space-fourunits);
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
              padding-bottom: var(--dl-layout-space-fourunits);
            }
            .home-heading23 {
              font-size: 30px;
              line-height: 36px;
            }
            .home-caption9 {
              font-size: 14px;
              line-height: 21px;
            }
            .home-types1 {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .home-book-person1 {
              width: 80%;
            }
            .home-book-person2 {
              width: 80%;
            }
            .home-search1 {
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
              padding-bottom: var(--dl-layout-space-fourunits);
            }
            .home-heading24 {
              gap: var(--dl-layout-space-unit);
            }
            .home-text127 {
              font-size: 30px;
              line-height: 36px;
            }
            .home-text128 {
              font-size: 14px;
              max-width: 80%;
              line-height: 21px;
            }
            .home-alphabet {
              padding-left: 0px;
              padding-right: 0px;
            }
            .home-symptoms1 {
              padding-left: var(--dl-layout-space-threeunits);
              padding-right: var(--dl-layout-space-threeunits);
            }
            .home-book4 {
              gap: var(--dl-layout-space-twounits);
              padding-top: var(--dl-layout-space-fourunits);
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
              padding-bottom: var(--dl-layout-space-fourunits);
            }
            .home-heading27 {
              gap: var(--dl-layout-space-unit);
            }
            .home-text173 {
              font-size: 24px;
            }
            .home-text174 {
              font-size: 14px;
              max-width: 80%;
              line-height: 21px;
            }
            .home-form {
              gap: var(--dl-layout-space-threeunits);
            }
            .home-types2 {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .home-inputs {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .home-meet {
              gap: var(--dl-layout-space-threeunits);
              padding-top: var(--dl-layout-space-fourunits);
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
              padding-bottom: var(--dl-layout-space-fourunits);
            }
            .home-heading28 {
              gap: var(--dl-layout-space-unit);
              padding-right: 0px;
            }
            .home-text185 {
              font-size: 24px;
            }
            .home-text186 {
              font-size: 14px;
              max-width: 80%;
            }
            .home-list2 {
              gap: var(--dl-layout-space-twounits);
            }
            .home-controls {
              padding-right: 0px;
            }
            .home-doctors1 {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
            .home-search2 {
              padding-right: 0px;
            }
            .home-news {
              padding-top: var(--dl-layout-space-fourunits);
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
              padding-bottom: var(--dl-layout-space-fourunits);
            }
            .home-heading29 {
              gap: var(--dl-layout-space-unit);
            }
            .home-text188 {
              font-size: 30px;
              line-height: 36px;
            }
            .home-text189 {
              font-size: 14px;
              max-width: 80%;
              line-height: 21px;
            }
            .home-date2 {
              font-size: 10px;
              line-height: 15px;
            }
            .home-date3 {
              font-size: 10px;
              line-height: 15px;
            }
            .home-date4 {
              font-size: 10px;
              line-height: 15px;
            }
            .home-main2 {
              align-items: center;
              flex-direction: column-reverse;
            }
            .home-image35 {
              height: 620px;
              margin-top: 0px;
            }
            .home-content22 {
              gap: var(--dl-layout-space-twounits);
              padding-top: var(--dl-layout-space-fourunits);
              padding-left: var(--dl-layout-space-oneandhalfunits);
              padding-right: var(--dl-layout-space-oneandhalfunits);
              padding-bottom: var(--dl-layout-space-threeunits);
            }
            .home-text193 {
              max-width: 500px;
            }
            .home-buttons {
              width: 100%;
              flex-direction: column;
            }
            .home-ios {
              width: 80%;
            }
            .home-android {
              width: 80%;
            }
          }
          @media (max-width: 479px) {
            .home-content10 {
              padding-right: var(--dl-layout-space-oneandhalfunits);
            }
            .home-header17 {
              max-width: 80%;
            }
            .home-caption7 {
              max-width: 100%;
            }
            .home-book1 {
              width: 100%;
            }
            .home-image18 {
              max-height: 500px;
            }
            .home-types2 {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
