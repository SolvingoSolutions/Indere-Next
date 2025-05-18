import React, { Fragment } from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'
import {
  getEntityByAttribute,
  getEntities,
} from '@teleporthq/cms-mappers/caisy'
import { useTranslations } from 'next-intl'

const Video = (props) => {
  return (
    <>
      <div className="video-container1">
        <Head>
          <title>Video - Indere</title>
          <meta property="og:title" content="Video - Indere" />
        </Head>
        <DataProvider
          renderSuccess={(VideoEntity) => (
            <Fragment>
              <div className="video-container2">
                <span>{VideoEntity?.vimeoVideoId}</span>
                <span>{VideoEntity?.id}</span>
              </div>
            </Fragment>
          )}
          initialData={props.videoEntity}
          persistDataDuringLoading={true}
          key={props?.videoEntity?.id}
        />
      </div>
      <style jsx>
        {`
          .video-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .video-container2 {
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

Video.defaultProps = {
  videoEntity: [],
}

Video.propTypes = {
  videoEntity: PropTypes.array,
}

export default Video

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
        'query Video($value:ID!,$locale:String){Video(id:$value,locale:$locale){_meta{createdAt updatedAt id}vimeoVideoId}}',
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
        videoEntity: response?.data?.[0],
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
