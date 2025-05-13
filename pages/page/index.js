import React, { Fragment } from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'
import { getEntitiesWithPagination } from '@teleporthq/cms-mappers/caisy'
import { useTranslations } from 'next-intl'

const Page1 = (props) => {
  return (
    <>
      <div className="page1-container1">
        <Head>
          <title>Page1 - Indere</title>
          <meta property="og:title" content="Page1 - Indere" />
        </Head>
        <DataProvider
          renderSuccess={(params) => (
            <Fragment>
              <div className="page1-container2">
                <Repeater
                  items={params}
                  renderItem={(PageEntities) => (
                    <Fragment>
                      <div className="page1-container3">
                        <span>{PageEntities?.internalTitle}</span>
                        <span>{PageEntities?.slug}</span>
                        <span>{PageEntities?.metaTitle}</span>
                      </div>
                    </Fragment>
                  )}
                />
              </div>
            </Fragment>
          )}
          initialData={props.pageEntities}
          persistDataDuringLoading={true}
          key={props?.pagination?.page}
        />
      </div>
      <style jsx>
        {`
          .page1-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .page1-container2 {
            display: flex;
            flex-direction: column;
          }
          .page1-container3 {
            gap: 12px;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

Page1.defaultProps = {
  pageEntities: [],
}

Page1.propTypes = {
  pageEntities: PropTypes.array,
}

export default Page1

export async function getStaticProps(context) {
  try {
    const response = await getEntitiesWithPagination({
      ...context?.params,
      projectId: '1f01710c-9be4-418c-bc66-6fd9fc8b8d20',
      query:
        'query MyQuery($first: Int, $after: String, $locale: String){allPage(locale: $locale,first: $first, after: $after){pageInfo{endCursor,hasNextPage,hasPreviousPage}edges{node{_meta{createdAt updatedAt id}slug metaTitle components{__typename...on CompImageWithText{_meta{createdAt updatedAt id}text{json connections{__typename  }}asset{__typename ...on Asset{ _meta{createdAt updatedAt id}description height id src title width}}strap buttons{__typename...on CompButtonExternalLinks{_meta{createdAt updatedAt id}url title description}...on CompButton{_meta{createdAt updatedAt id}title }}headline imageRightInsteadOfLeft}...on CompFaq{_meta{createdAt updatedAt id}title faqItems{__typename...on CompFaqItem{_meta{createdAt updatedAt id}title description{json connections{__typename  }}}}}...on CompSectionHeader{_meta{createdAt updatedAt id}image{__typename ...on Asset{ _meta{createdAt updatedAt id}description height id src title width}}title }...on CompHeroSlider{_meta{createdAt updatedAt id}title slides{__typename...on CompHeroSliderSlide{_meta{createdAt updatedAt id}text{json connections{__typename  }}headline backgroundImage{__typename ...on Asset{ _meta{createdAt updatedAt id}description height id src title width}}}}}...on CompTextBlock{_meta{createdAt updatedAt id}text{json connections{__typename  }}title buttons{__typename...on CompButtonExternalLinks{_meta{createdAt updatedAt id}url title description}...on CompButton{_meta{createdAt updatedAt id}title }}}...on CompPageHeader{_meta{createdAt updatedAt id}headline backgroundImage{__typename ...on Asset{ _meta{createdAt updatedAt id}description height id src title width}}backgroundVideo{__typename...on Video{_meta{createdAt updatedAt id}vimeoVideoId}}}...on CompGrid{_meta{createdAt updatedAt id}items{__typename...on CompGridBrandCard{_meta{createdAt updatedAt id}logo{__typename _meta{createdAt updatedAt id}description height id src title width}name linksTo category{__typename...on CompBrandCategory{_meta{createdAt updatedAt id}title }}description}...on CompGridTeamMemberCard{_meta{createdAt updatedAt id}name image{__typename _meta{createdAt updatedAt id}description height id src title width}jobTitle linkToLinkedInProfile}}title headline }...on CompFacts{_meta{createdAt updatedAt id}facts{__typename...on CompFactsFact{_meta{createdAt updatedAt id}label value }}title }}metaAuthor metaKeywords featuredImage{__typename ...on Asset{ _meta{createdAt updatedAt id}description height id src title width}}internalTitle metaDescription}}}}',
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
        pageEntities: response,
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
