import React, { Fragment } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import { useTranslations } from 'next-intl'

import Navbar from '../components/navbar'
import Footer1 from '../components/footer1'

const News = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="news-container10">
        <Head>
          <title>news - Indere</title>
          <meta property="og:title" content="news - Indere" />
        </Head>
        <Navbar
          link1={
            <Fragment>
              <span className="news-text10">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ES0vgl'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link2={
            <Fragment>
              <span className="news-text11">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_yLx39y'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link3={
            <Fragment>
              <span className="news-text12">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_a-Lsnb'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link4={
            <Fragment>
              <span className="news-text13">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_hSbbuT'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          link5={
            <Fragment>
              <span className="news-text14">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_fHz_Tg'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="news-text15">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_-k94Sr'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="news-text16">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_jiGqxr'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text4={
            <Fragment>
              <span className="news-text17">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_RWYXDG'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text5={
            <Fragment>
              <span className="news-text18">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_siFI3K'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="navbarroot-class-name5"
        ></Navbar>
        <section className="projects-intro">
          <h1 className="news-text19 research-title">
            <span
              dangerouslySetInnerHTML={{
                __html: translate.raw('text_J_h8j-'),
              }}
            ></span>
          </h1>
        </section>
        <section className="news-section">
          <div className="news-container">
            <DataProvider
              fetchData={(params) =>
                fetch('/api/get-entities-with-pagination', {
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  method: 'POST',
                  body: JSON.stringify(params),
                })
                  .then((res) => res.json())
                  .then((data) => data)
              }
              renderSuccess={(params) => (
                <Fragment>
                  <div className="news-grid">
                    <Repeater
                      items={params}
                      renderItem={(context_9jhes5d3) => (
                        <Fragment>
                          <article className="news-card">
                            <div className="news-image">
                              <img
                                alt="School Catering Regulations"
                                src={context_9jhes5d3?.heroImage?.url}
                              />
                              <span className="news-tag">Text</span>
                            </div>
                            <div className="news-content">
                              <h3 className="news-title">
                                {[0]?.title}
                                {context_9jhes5d3?.title}
                              </h3>
                              <p className="news-excerpt">Text</p>
                              <div className="news-meta">
                                <span className="news-date">
                                  {[0]?.createdAt}
                                  {context_9jhes5d3?.createdAt}
                                </span>
                                <Link href={`/news/${context_9jhes5d3?.slug}`}>
                                  <a>
                                    <span className="news-text24 news-link">
                                      <span
                                        dangerouslySetInnerHTML={{
                                          __html: translate.raw('text_TOP4XM'),
                                        }}
                                      ></span>
                                    </span>
                                  </a>
                                </Link>
                              </div>
                            </div>
                          </article>
                        </Fragment>
                      )}
                    />
                  </div>
                </Fragment>
              )}
              params={{
                projectId: '1f01710c-9be4-418c-bc66-6fd9fc8b8d20',
                query:
                  'query MyQuery($first: Int, $after: String, $locale: String){allNews(locale: $locale,first: $first, after: $after){pageInfo{endCursor,hasNextPage,hasPreviousPage}edges{node{_meta{createdAt updatedAt id}title body{json connections{__typename  }}imageTitle heroImage{__typename _meta{createdAt updatedAt id}description height id src title width}slug tags }}}}',
                locale: props?.locale ?? '',
                page: 1,
                perPage: 100,
              }}
            />
            <div className="news-pagination">
              <button
                disabled
                className="pagination-btn pagination-prev button"
              >
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_y2xJpp'),
                  }}
                ></span>
              </button>
              <div className="pagination-numbers">
                <button className="active pagination-number button">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_4bmSMr'),
                    }}
                  ></span>
                </button>
                <button className="pagination-number button">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_2XPTuL'),
                    }}
                  ></span>
                </button>
                <button className="pagination-number button">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: translate.raw('text_xKZGQJ'),
                    }}
                  ></span>
                </button>
              </div>
              <button className="pagination-btn pagination-next button">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_5L6dWO'),
                  }}
                ></span>
              </button>
            </div>
          </div>
        </section>
        <Footer1
          text={
            <Fragment>
              <span className="news-text25">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Lgl-VJ'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text1={
            <Fragment>
              <span className="news-text26">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_ZXsMKv'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text2={
            <Fragment>
              <span className="news-text27">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text__nQD6t'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text3={
            <Fragment>
              <span className="news-text28">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Z-Yo2k'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text7={
            <Fragment>
              <span className="news-text29">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_uZZTNi'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text8={
            <Fragment>
              <span className="news-text30">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_CwpNzm'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text9={
            <Fragment>
              <span className="news-text31">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_b7q4xp'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text13={
            <Fragment>
              <span className="news-text32">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_6C4CJm'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text14={
            <Fragment>
              <span className="news-text33">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_vPcL9p'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text91={
            <Fragment>
              <span className="news-text34">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_0eC9Hl'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading={
            <Fragment>
              <span className="news-text35">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_5EfbUR'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text131={
            <Fragment>
              <span className="news-text36">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_xw0YFi'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text132={
            <Fragment>
              <span className="news-text37">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_WDHktE'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          text133={
            <Fragment>
              <span className="news-text38">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_Y3-9ld'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="news-text39">
                <span
                  dangerouslySetInnerHTML={{
                    __html: translate.raw('text_16c2NF'),
                  }}
                ></span>
              </span>
            </Fragment>
          }
          rootClassName="footer1root-class-name5"
        ></Footer1>
      </div>
      <style jsx>
        {`
          .news-container10 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .news-text10 {
            display: inline-block;
          }
          .news-text11 {
            display: inline-block;
          }
          .news-text12 {
            display: inline-block;
          }
          .news-text13 {
            display: inline-block;
          }
          .news-text14 {
            display: inline-block;
          }
          .news-text15 {
            display: inline-block;
          }
          .news-text16 {
            display: inline-block;
          }
          .news-text17 {
            display: inline-block;
          }
          .news-text18 {
            display: inline-block;
          }
          .news-text19 {
            margin: 0;
          }
          .news-text24 {
            text-decoration: none;
          }
          .news-text25 {
            display: inline-block;
          }
          .news-text26 {
            display: inline-block;
          }
          .news-text27 {
            display: inline-block;
          }
          .news-text28 {
            display: inline-block;
          }
          .news-text29 {
            display: inline-block;
          }
          .news-text30 {
            display: inline-block;
          }
          .news-text31 {
            display: inline-block;
          }
          .news-text32 {
            display: inline-block;
          }
          .news-text33 {
            display: inline-block;
          }
          .news-text34 {
            display: inline-block;
          }
          .news-text35 {
            display: inline-block;
          }
          .news-text36 {
            display: inline-block;
          }
          .news-text37 {
            display: inline-block;
          }
          .news-text38 {
            display: inline-block;
          }
          .news-text39 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

export default News

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
