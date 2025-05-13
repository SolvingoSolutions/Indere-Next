import React, { Fragment } from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'
import {
  getEntityByAttribute,
  getEntities,
} from '@teleporthq/cms-mappers/caisy'
import { useTranslations } from 'next-intl'

const Video11 = (props) => {
  return (
    <>
      <div className="video11-container1">
        <Head>
          <title>Video1 - Indere</title>
          <meta property="og:title" content="Video1 - Indere" />
        </Head>
        <DataProvider
          renderSuccess={(VideoEntity) => (
            <Fragment>
              <div className="video11-container2">
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
          .video11-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .video11-container2 {
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

Video11.defaultProps = {
  videoEntity: [],
}

Video11.propTypes = {
  videoEntity: PropTypes.array,
}

export default Video11

export async function getStaticProps(context) {
  try {
    const response = await getEntityByAttribute({
      ...context?.params,
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
