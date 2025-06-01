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

const News11 = (props) => {
  const translate = useTranslations()
  return (
    <>
      <div className="news11-container1">
        <Head>
          <title>News1 - Indere</title>
          <meta property="og:title" content="News1 - Indere" />
        </Head>
        <DataProvider
          renderSuccess={(NewsEntity) => (
            <Fragment>
              <Navbar
                link1={
                  <Fragment>
                    <span className="news11-text10">
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
                    <span className="news11-text11">
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
                    <span className="news11-text12">
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
                    <span className="news11-text13">
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
                    <span className="news11-text14">
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
                    <span className="news11-text15">
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
                    <span className="news11-text16">
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
                    <span className="news11-text17">
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
                    <span className="news11-text18">
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
              <div className="news11-container2">
                <h1>{NewsEntity?.title}</h1>
                <span>{NewsEntity?.updatedAt}</span>
                <img
                  alt="image"
                  src={NewsEntity?.heroImage?.url}
                  className="news11-image"
                />
                <span>{NewsEntity?.imageTitle}</span>
                <div>
                  <RichTextRenderer
                    node={NewsEntity?.body}
                    overwrites={{
                      documentLink: CaisyDocumentLink,
                    }}
                  ></RichTextRenderer>
                </div>
              </div>
              <Footer1
                text={
                  <Fragment>
                    <span className="news11-text22">
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
                    <span className="news11-text23">
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
                    <span className="news11-text24">
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
                    <span className="news11-text25">
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
                    <span className="news11-text26">
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
                    <span className="news11-text27">
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
                    <span className="news11-text28">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_B7YZuf'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                }
                text11={
                  <Fragment>
                    <span className="news11-text29">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_-E-kRE'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                }
                text12={
                  <Fragment>
                    <span className="news11-text30">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_F3ZwdV'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                }
                text13={
                  <Fragment>
                    <span className="news11-text31">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_kmJC7M'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                }
                text14={
                  <Fragment>
                    <span className="news11-text32">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_1nkKd9'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                }
                text91={
                  <Fragment>
                    <span className="news11-text33">
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
                    <span className="news11-text34">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: translate.raw('text_j05bsS'),
                        }}
                      ></span>
                    </span>
                  </Fragment>
                }
                heading1={
                  <Fragment>
                    <span className="news11-text35">
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
          .news11-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .news11-text10 {
            display: inline-block;
          }
          .news11-text11 {
            display: inline-block;
          }
          .news11-text12 {
            display: inline-block;
          }
          .news11-text13 {
            display: inline-block;
          }
          .news11-text14 {
            display: inline-block;
          }
          .news11-text15 {
            display: inline-block;
          }
          .news11-text16 {
            display: inline-block;
          }
          .news11-text17 {
            display: inline-block;
          }
          .news11-text18 {
            display: inline-block;
          }
          .news11-container2 {
            gap: 12px;
            width: 100%;
            display: flex;
            flex-direction: column;
          }
          .news11-image {
            width: 200px;
            object-fit: cover;
          }
          .news11-text22 {
            display: inline-block;
          }
          .news11-text23 {
            display: inline-block;
          }
          .news11-text24 {
            display: inline-block;
          }
          .news11-text25 {
            display: inline-block;
          }
          .news11-text26 {
            display: inline-block;
          }
          .news11-text27 {
            display: inline-block;
          }
          .news11-text28 {
            display: inline-block;
          }
          .news11-text29 {
            display: inline-block;
          }
          .news11-text30 {
            display: inline-block;
          }
          .news11-text31 {
            display: inline-block;
          }
          .news11-text32 {
            display: inline-block;
          }
          .news11-text33 {
            display: inline-block;
          }
          .news11-text34 {
            display: inline-block;
          }
          .news11-text35 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

News11.defaultProps = {
  newsEntity: [],
}

News11.propTypes = {
  newsEntity: PropTypes.array,
}

export default News11

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
        'query MyQuery($value:String,$locale:String){allNews(locale:$locale, where: {slug:{eq: $value}}){edges{node{_meta{createdAt updatedAt id}body{json connections{__typename  }}slug tags title heroImage{__typename _meta{createdAt updatedAt id}description height id src title width}imageTitle}}}}',
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
      revalidate: 60,
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
