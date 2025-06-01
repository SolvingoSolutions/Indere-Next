import React, { Fragment } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'
import { getEntitiesWithPagination } from '@teleporthq/cms-mappers/caisy'
import { useTranslations } from 'next-intl'

import Navbar from '../../components/navbar'
import Footer1 from '../../components/footer1'

const News = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="news-container1">
        <Head>
          <title>News - Indere</title>
          <meta property="og:title" content="News - Indere" />
        </Head>
        <DataProvider
          renderSuccess={(params) => (
            <Fragment>
              <Navbar
                link1={
                  <Fragment>
                    <span className="news-text10">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_EGjGXo'),
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
                          __html: translate.raw('text_ZRJxbd'),
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
                          __html: translate.raw('text_pgXhzG'),
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
                          __html: translate.raw('text_dfKlmE'),
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
                          __html: translate.raw('text_YG6cq5'),
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
                          __html: translate.raw('text_0rxDUS'),
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
                          __html: translate.raw('text_RVFFC8'),
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
                          __html: translate.raw('text_p8S3g_'),
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
                          __html: translate.raw('text_L3CcTD'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                }
                rootClassName="navbarroot-class-name2"
              ></Navbar>
              <div className="news-container2">
                <Repeater
                  items={params}
                  renderItem={(NewsEntities) => (
                    <Fragment>
                      <Link href={`/news/${NewsEntities?.slug}`}>
                        <a>
                          <div className="news-container3">
                            <h1>{NewsEntities?.title}</h1>
                            <span>{NewsEntities?.title}</span>
                            <span>{NewsEntities?.id}</span>
                          </div>
                        </a>
                      </Link>
                    </Fragment>
                  )}
                />
              </div>
              <Footer1
                text={
                  <Fragment>
                    <span className="news-text22">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_6T2Cmr'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                }
                text1={
                  <Fragment>
                    <span className="news-text23">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_OCkrv9'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                }
                text2={
                  <Fragment>
                    <span className="news-text24">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_BK80A1'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                }
                text3={
                  <Fragment>
                    <span className="news-text25">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_RoB695'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                }
                text7={
                  <Fragment>
                    <span className="news-text26">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_jrSfnf'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                }
                text8={
                  <Fragment>
                    <span className="news-text27">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_8jvU7U'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                }
                text9={
                  <Fragment>
                    <span className="news-text28">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_nJFZca'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                }
                text11={
                  <Fragment>
                    <span className="news-text29">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text__jgJyv'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                }
                text12={
                  <Fragment>
                    <span className="news-text30">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_zsgFNr'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                }
                text13={
                  <Fragment>
                    <span className="news-text31">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_U_N9Mf'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                }
                text14={
                  <Fragment>
                    <span className="news-text32">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_Ambwsx'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                }
                text91={
                  <Fragment>
                    <span className="news-text33">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_RhqAzI'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                }
                heading={
                  <Fragment>
                    <span className="news-text34">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_uLGdLF'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                }
                heading1={
                  <Fragment>
                    <span className="news-text35">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_0JvtKL'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                }
                rootClassName="footer1root-class-name2"
              ></Footer1>
            </Fragment>
          )}
          initialData={props.newsEntities}
          persistDataDuringLoading={true}
          key={props?.pagination?.page}
        />
      </div>
      <style jsx>
        {`
          .news-container1 {
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
          .news-container2 {
            display: flex;
            flex-direction: column;
          }
          .news-container3 {
            gap: 12px;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            text-decoration: none;
          }
          .news-text22 {
            display: inline-block;
          }
          .news-text23 {
            display: inline-block;
          }
          .news-text24 {
            display: inline-block;
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
        `}
      </style>
    </>
  )
}

News.defaultProps = {
  newsEntities: [],
}

News.propTypes = {
  newsEntities: PropTypes.array,
}

export default News

export async function getStaticProps(context) {
  try {
    const messages = (await import('/locales/' + context.locale + '.json'))
      .default
    const response = await getEntitiesWithPagination({
      ...context?.params,
      ...(context?.locale && {
        locale: context.locale,
      }),
      projectId: '1f01710c-9be4-418c-bc66-6fd9fc8b8d20',
      query:
        'query MyQuery($first: Int, $after: String, $locale: String){allNews(locale: $locale,first: $first, after: $after){pageInfo{endCursor,hasNextPage,hasPreviousPage}edges{node{_meta{createdAt updatedAt id}body{json connections{__typename  }}slug tags title heroImage{__typename _meta{createdAt updatedAt id}description height id src title width}imageTitle}}}}',
      locale: context?.locale ?? '',
      page: 1,
      perPage: 10,
    })
    if (!response) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        messages,
        newsEntities: response,
        ...response?.meta,
      },
      revalidate: 60,
    }
  } catch (error) {
    console.log(error)
    return {
      notFound: true,
    }
  }
}
