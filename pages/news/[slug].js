import React, { Fragment } from 'react'
import Head from 'next/head'

import {
  DataProvider,
  Repeater,
  CaisyDocumentLink,
} from '@teleporthq/react-components'
import { RichTextRenderer } from '@caisy/rich-text-react-renderer'
import PropTypes from 'prop-types'
import {
  getEntityByAttribute,
  getEntities,
} from '@teleporthq/cms-mappers/caisy'
import { useTranslations } from 'next-intl'

import Navbar from '../../components/navbar'
import Footer1 from '../../components/footer1'

const News1 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="news1-container1">
        <Head>
          <title>News - Indere</title>
          <meta property="og:title" content="News - Indere" />
        </Head>
        <DataProvider
          renderSuccess={(NewsEntity) => (
            <Fragment>
              <Navbar
                link1={
                  <Fragment>
                    <span className="news1-text10">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_G9ZC_4'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                }
                link2={
                  <Fragment>
                    <span className="news1-text11">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_5RkFr5'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                }
                link3={
                  <Fragment>
                    <span className="news1-text12">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_UQdAx8'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                }
                link4={
                  <Fragment>
                    <span className="news1-text13">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_ymO1wG'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                }
                link5={
                  <Fragment>
                    <span className="news1-text14">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_vquaLG'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                }
                text2={
                  <Fragment>
                    <span className="news1-text15">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_z0Cvp2'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                }
                text3={
                  <Fragment>
                    <span className="news1-text16">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_kKoO7s'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                }
                text4={
                  <Fragment>
                    <span className="news1-text17">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_tyN-n4'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                }
                text5={
                  <Fragment>
                    <span className="news1-text18">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_sOY0Mm'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                }
                rootClassName="navbarroot-class-name1"
              ></Navbar>
              <article className="blog-article">
                <div className="blog-article-container">
                  <header className="blog-article-header">
                    <h1 className="blog-article-title">{NewsEntity?.title}</h1>
                    <div className="blog-article-meta">
                      <span className="blog-article-date">
                        {NewsEntity?.updatedAt}
                      </span>
                    </div>
                  </header>
                  <div className="blog-article-image">
                    <img
                      alt="Bowls of gluten free flour"
                      src={NewsEntity?.heroImage?.url}
                    />
                    <p className="blog-article-image-caption">
                      {NewsEntity?.imageTitle}
                    </p>
                  </div>
                  <div>
                    <RichTextRenderer
                      node={NewsEntity?.body}
                      overwrites={{
                        documentLink: CaisyDocumentLink,
                      }}
                    ></RichTextRenderer>
                  </div>
                  <nav className="blog-article-navigation">
                    <span className="blog-nav-btn blog-nav-prev">
                      <span className="news1-text23">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_M02qjr'),
                          }}
                        ></span>
                      </span>
                      <span className="news1-text24">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_wuYJo1'),
                          }}
                        ></span>
                      </span>
                    </span>
                    <span className="blog-nav-next blog-nav-btn">
                      <span className="news1-text26">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_hB1MAr'),
                          }}
                        ></span>
                      </span>
                      <span className="news1-text27">
                        <span
                          dangerouslySetInnerHTML={{
                            __html: translate.raw('text_Drpytc'),
                          }}
                        ></span>
                      </span>
                    </span>
                  </nav>
                </div>
              </article>
              <Footer1
                text={
                  <Fragment>
                    <span className="news1-text28">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text__w7kAl'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                }
                text1={
                  <Fragment>
                    <span className="news1-text29">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_7_zEJJ'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                }
                text2={
                  <Fragment>
                    <span className="news1-text30">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_77MrIX'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                }
                text3={
                  <Fragment>
                    <span className="news1-text31">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_uJaI-z'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                }
                text7={
                  <Fragment>
                    <span className="news1-text32">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_9SFoAz'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                }
                text8={
                  <Fragment>
                    <span className="news1-text33">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_2FBG_H'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                }
                text9={
                  <Fragment>
                    <span className="news1-text34">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_B7YZuf'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                }
                text13={
                  <Fragment>
                    <span className="news1-text35">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_X6QMBs'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                }
                text14={
                  <Fragment>
                    <span className="news1-text36">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_cSCeDW'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                }
                text91={
                  <Fragment>
                    <span className="news1-text37">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_ZgPwhz'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                }
                heading={
                  <Fragment>
                    <span className="news1-text38">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_j05bsS'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                }
                text131={
                  <Fragment>
                    <span className="news1-text39">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text__25iag'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                }
                text132={
                  <Fragment>
                    <span className="news1-text40">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_ArasMd'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                }
                text133={
                  <Fragment>
                    <span className="news1-text41">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_IuDR3-'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                }
                heading1={
                  <Fragment>
                    <span className="news1-text42">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_J4-MdD'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                }
                rootClassName="footer1root-class-name1"
              ></Footer1>
            </Fragment>
          )}
          initialData={props.newsEntity}
          persistDataDuringLoading={true}
          key={props?.newsEntity?.slug}
        />
      </div>
      <style jsx>
        {`
          .news1-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .news1-text10 {
            display: inline-block;
          }
          .news1-text11 {
            display: inline-block;
          }
          .news1-text12 {
            display: inline-block;
          }
          .news1-text13 {
            display: inline-block;
          }
          .news1-text14 {
            display: inline-block;
          }
          .news1-text15 {
            display: inline-block;
          }
          .news1-text16 {
            display: inline-block;
          }
          .news1-text17 {
            display: inline-block;
          }
          .news1-text18 {
            display: inline-block;
          }
          .news1-text23 {
            font-size: 1.2rem;
            font-weight: bold;
          }
          .news1-text24 {
            font-size: 0.95rem;
          }
          .news1-text26 {
            font-size: 0.95rem;
          }
          .news1-text27 {
            font-size: 1.2rem;
            font-weight: bold;
          }
          .news1-text28 {
            display: inline-block;
          }
          .news1-text29 {
            display: inline-block;
          }
          .news1-text30 {
            display: inline-block;
          }
          .news1-text31 {
            display: inline-block;
          }
          .news1-text32 {
            display: inline-block;
          }
          .news1-text33 {
            display: inline-block;
          }
          .news1-text34 {
            display: inline-block;
          }
          .news1-text35 {
            display: inline-block;
          }
          .news1-text36 {
            display: inline-block;
          }
          .news1-text37 {
            display: inline-block;
          }
          .news1-text38 {
            display: inline-block;
          }
          .news1-text39 {
            display: inline-block;
          }
          .news1-text40 {
            display: inline-block;
          }
          .news1-text41 {
            display: inline-block;
          }
          .news1-text42 {
            display: inline-block;
          }
          @media (max-width: 479px) {
            .news1-text24 {
              font-size: 0.9rem;
            }
            .news1-text26 {
              font-size: 0.9rem;
            }
          }
        `}
      </style>
    </>
  )
}

News1.defaultProps = {
  newsEntity: [],
}

News1.propTypes = {
  newsEntity: PropTypes.array,
}

export default News1

export async function getStaticProps(context) {
  try {
    const messages = (await import('/locales/' + context.locale + '.json'))
      .default
    const response = await getEntityByAttribute({
      ...context?.params,
      ...(context?.locale && {
        locale: context.locale,
      }),
      projectId: '1f01710c-9be4-418c-bc66-6fd9fc8b8d20',
      query:
        'query MyQuery($value:String,$locale:String){allNews(locale:$locale, where: {slug:{eq: $value}}){edges{node{_meta{createdAt updatedAt id}title body{json connections{__typename  }}imageTitle heroImage{__typename _meta{createdAt updatedAt id}description height id src title width}slug tags }}}}',
      attribute: 'slug',
      locale: context?.locale ?? '',
    })
    if (!response?.data?.[0]) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        messages,
        newsEntity: response?.data?.[0],
        ...response?.meta,
      },
    }
  } catch (error) {
    console.log(error)
    return {
      notFound: true,
    }
  }
}

export async function getStaticPaths() {
  try {
    const response = await getEntities({
      projectId: '1f01710c-9be4-418c-bc66-6fd9fc8b8d20',
      query: '{allNews{edges{node{slug}}}}',
      locale: context?.locale ?? '',
    })
    return {
      paths: (response?.data || []).map((item) => {
        return {
          params: {
            slug: (item?.slug).toString(),
          },
        }
      }),
      fallback: 'blocking',
    }
  } catch (error) {
    return {
      paths: [],
      fallback: 'blocking',
    }
  }
}
