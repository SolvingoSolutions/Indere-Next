import React, { Fragment } from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'
import {
  getEntityByAttribute,
  getEntities,
} from '@teleporthq/cms-mappers/caisy'
import { useTranslations } from 'next-intl'

const Page = (props) => {
  return (
    <>
      <div className="page-container1">
        <Head>
          <title>Page - Indere</title>
          <meta property="og:title" content="Page - Indere" />
        </Head>
        <DataProvider
          renderSuccess={(PageEntity) => (
            <Fragment>
              <div className="page-container2">
                <span>{PageEntity?.internalTitle}</span>
                <span>{PageEntity?.slug}</span>
                <span>{PageEntity?.metaTitle}</span>
              </div>
            </Fragment>
          )}
          initialData={props.pageEntity}
          persistDataDuringLoading={true}
          key={props?.pageEntity?.id}
        />
      </div>
      <style jsx>
        {`
          .page-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .page-container2 {
            gap: 12px;
            width: 100%;
            display: flex;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

Page.defaultProps = {
  pageEntity: [],
}

Page.propTypes = {
  pageEntity: PropTypes.array,
}

export default Page

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
        'query Page($value:ID!,$locale:String){Page(id:$value,locale:$locale){_meta{createdAt updatedAt id}slug metaTitle components{__typename...on CompImageWithText{_meta{createdAt updatedAt id}text{json connections{__typename  }}asset{__typename ...on Asset{ _meta{createdAt updatedAt id}description height id src title width}}strap buttons{__typename...on CompButtonExternalLinks{_meta{createdAt updatedAt id}url title description}...on CompButton{_meta{createdAt updatedAt id}title }}headline imageRightInsteadOfLeft}...on CompFaq{_meta{createdAt updatedAt id}title faqItems{__typename...on CompFaqItem{_meta{createdAt updatedAt id}title description{json connections{__typename  }}}}}...on CompSectionHeader{_meta{createdAt updatedAt id}image{__typename ...on Asset{ _meta{createdAt updatedAt id}description height id src title width}}title }...on CompHeroSlider{_meta{createdAt updatedAt id}title slides{__typename...on CompHeroSliderSlide{_meta{createdAt updatedAt id}text{json connections{__typename  }}headline backgroundImage{__typename ...on Asset{ _meta{createdAt updatedAt id}description height id src title width}}}}}...on CompTextBlock{_meta{createdAt updatedAt id}text{json connections{__typename  }}title buttons{__typename...on CompButtonExternalLinks{_meta{createdAt updatedAt id}url title description}...on CompButton{_meta{createdAt updatedAt id}title }}}...on CompPageHeader{_meta{createdAt updatedAt id}headline backgroundImage{__typename ...on Asset{ _meta{createdAt updatedAt id}description height id src title width}}backgroundVideo{__typename...on Video{_meta{createdAt updatedAt id}vimeoVideoId}}}...on CompGrid{_meta{createdAt updatedAt id}items{__typename...on CompGridBrandCard{_meta{createdAt updatedAt id}logo{__typename _meta{createdAt updatedAt id}description height id src title width}name linksTo category{__typename...on CompBrandCategory{_meta{createdAt updatedAt id}title }}description}...on CompGridTeamMemberCard{_meta{createdAt updatedAt id}name image{__typename _meta{createdAt updatedAt id}description height id src title width}jobTitle linkToLinkedInProfile}}title headline }...on CompFacts{_meta{createdAt updatedAt id}facts{__typename...on CompFactsFact{_meta{createdAt updatedAt id}label value }}title }}metaAuthor metaKeywords featuredImage{__typename ...on Asset{ _meta{createdAt updatedAt id}description height id src title width}}internalTitle metaDescription}}',
      attribute: 'id',
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
        pageEntity: response?.data?.[0],
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
      query: '{allPage{edges{node{id}}}}',
      locale: context?.locale ?? '',
    })
    return {
      paths: (response?.data || []).map((item) => {
        return {
          params: {
            id: (item?.id).toString(),
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
