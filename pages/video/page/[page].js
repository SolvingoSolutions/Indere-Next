import React, { Fragment } from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'
import {
  getEntitiesWithPagination,
  getEntities,
} from '@teleporthq/cms-mappers/caisy'
import { useTranslations } from 'next-intl'

const Video1 = (props) => {
  return (
    <>
      <div className="video1-container1">
        <Head>
          <title>Video - Indere</title>
          <meta property="og:title" content="Video - Indere" />
        </Head>
        <DataProvider
          renderSuccess={(params) => (
            <Fragment>
              <div className="video1-container2">
                <Repeater
                  items={params}
                  renderItem={(VideoEntities) => (
                    <Fragment>
                      <div className="video1-container3">
                        <span>{VideoEntities?.vimeoVideoId}</span>
                        <span>{VideoEntities?.id}</span>
                      </div>
                    </Fragment>
                  )}
                />
              </div>
            </Fragment>
          )}
          initialData={props.videoEntities}
          persistDataDuringLoading={true}
          key={props?.pagination?.page}
        />
      </div>
      <style jsx>
        {`
          .video1-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .video1-container2 {
            display: flex;
            flex-direction: column;
          }
          .video1-container3 {
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

Video1.defaultProps = {
  videoEntities: [],
}

Video1.propTypes = {
  videoEntities: PropTypes.array,
}

export default Video1

export async function getStaticProps(context) {
  try {
    const response = await getEntitiesWithPagination({
      ...context?.params,
      projectId: '1f01710c-9be4-418c-bc66-6fd9fc8b8d20',
      query:
        'query MyQuery($first: Int, $after: String, $locale: String){allVideo(locale: $locale,first: $first, after: $after){pageInfo{endCursor,hasNextPage,hasPreviousPage}edges{node{_meta{createdAt updatedAt id}vimeoVideoId}}}}',
      locale: context?.locale ?? '',
      page: context.params.page,
      perPage: 10,
    })
    if (!response) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        videoEntities: response,
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
      query: '{allVideo{edges{node{id}}}}',
      locale: context?.locale ?? '',
    })
    const totalCount = response?.meta?.pagination?.total
    const pagesCount = Math.ceil(totalCount / 10)
    return {
      paths: Array.from(
        {
          length: pagesCount,
        },
        (_, i) => ({
          params: {
            page: (i + 1).toString(),
          },
        })
      ),
      fallback: 'blocking',
    }
  } catch (error) {
    return {
      paths: [],
      fallback: 'blocking',
    }
  }
}
