import React, { Fragment } from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'
import {
  getEntityByAttribute,
  getEntities,
} from '@teleporthq/cms-mappers/caisy'
import { useTranslations } from 'next-intl'

const MainNavigation11 = (props) => {
  return (
    <>
      <div className="main-navigation11-container1">
        <Head>
          <title>MainNavigation1 - Indere</title>
          <meta property="og:title" content="MainNavigation1 - Indere" />
        </Head>
        <DataProvider
          renderSuccess={(MainNavigationEntity) => (
            <Fragment>
              <div className="main-navigation11-container2">
                <h1>{MainNavigationEntity?.title}</h1>
                <span>{MainNavigationEntity?.id}</span>
              </div>
            </Fragment>
          )}
          initialData={props.mainNavigationEntity}
          persistDataDuringLoading={true}
          key={props?.mainNavigationEntity?.id}
        />
      </div>
      <style jsx>
        {`
          .main-navigation11-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .main-navigation11-container2 {
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

MainNavigation11.defaultProps = {
  mainNavigationEntity: [],
}

MainNavigation11.propTypes = {
  mainNavigationEntity: PropTypes.array,
}

export default MainNavigation11

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
        'query MyQuery($locale:String){MainNavigation(locale:$locale){_meta{createdAt updatedAt id}logo{__typename _meta{createdAt updatedAt id}description height id src title width}title logoDarkVersion{__typename _meta{createdAt updatedAt id}description height id src title width}}}',
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
        mainNavigationEntity: response?.data?.[0],
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
      query: '{MainNavigation{id}}',
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
