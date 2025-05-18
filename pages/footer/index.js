import React, { Fragment } from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'
import { getEntitiesWithPagination } from '@teleporthq/cms-mappers/caisy'
import { useTranslations } from 'next-intl'

const Footer1 = (props) => {
  return (
    <>
      <div className="footer1-container1">
        <Head>
          <title>Footer1 - Indere</title>
          <meta property="og:title" content="Footer1 - Indere" />
        </Head>
        <DataProvider
          renderSuccess={(params) => (
            <Fragment>
              <div className="footer1-container2">
                <Repeater
                  items={params}
                  renderItem={(FooterEntities) => (
                    <Fragment>
                      <div className="footer1-container3">
                        <h1>{FooterEntities?.title}</h1>
                        <span>{FooterEntities?.title}</span>
                        <span>{FooterEntities?.id}</span>
                      </div>
                    </Fragment>
                  )}
                />
              </div>
            </Fragment>
          )}
          initialData={props.footerEntities}
          persistDataDuringLoading={true}
          key={props?.pagination?.page}
        />
      </div>
      <style jsx>
        {`
          .footer1-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .footer1-container2 {
            display: flex;
            flex-direction: column;
          }
          .footer1-container3 {
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

Footer1.defaultProps = {
  footerEntities: [],
}

Footer1.propTypes = {
  footerEntities: PropTypes.array,
}

export default Footer1

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
        'query MyQuery($first: Int, $after: String, $locale: String){allFooter(locale: $locale,first: $first, after: $after){pageInfo{endCursor,hasNextPage,hasPreviousPage}edges{node{_meta{createdAt updatedAt id}title sections{__typename...on CompFooterSection{_meta{createdAt updatedAt id}links{__typename...on CompButtonExternalLinks{_meta{createdAt updatedAt id}url title description}...on CompButton{_meta{createdAt updatedAt id}title }}sectionTitle}}legalSection{__typename...on CompButtonExternalLinks{_meta{createdAt updatedAt id}url title description}...on CompButton{_meta{createdAt updatedAt id}title }}}}}}',
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
        footerEntities: response,
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
