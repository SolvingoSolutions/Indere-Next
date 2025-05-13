import React, { Fragment } from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'
import { getSingleEntityType } from '@teleporthq/cms-mappers/caisy'
import { useTranslations } from 'next-intl'

const MainNavigation = (props) => {
  return (
    <>
      <div className="main-navigation-container1">
        <Head>
          <title>MainNavigation - Indere</title>
          <meta property="og:title" content="MainNavigation - Indere" />
        </Head>
        <DataProvider
          renderSuccess={(params) => (
            <Fragment>
              <div className="main-navigation-container2">
                <Repeater
                  items={params}
                  renderItem={(MainNavigationEntities) => (
                    <Fragment>
                      <div className="main-navigation-container3">
                        <h1>{MainNavigationEntities?.title}</h1>
                        <span>{MainNavigationEntities?.title}</span>
                        <span>{MainNavigationEntities?.id}</span>
                      </div>
                    </Fragment>
                  )}
                />
              </div>
            </Fragment>
          )}
          initialData={props.mainNavigationEntities}
          persistDataDuringLoading={true}
          key={props?.pagination?.page}
        />
      </div>
      <style jsx>
        {`
          .main-navigation-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .main-navigation-container2 {
            display: flex;
            flex-direction: column;
          }
          .main-navigation-container3 {
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

MainNavigation.defaultProps = {
  mainNavigationEntities: [],
}

MainNavigation.propTypes = {
  mainNavigationEntities: PropTypes.array,
}

export default MainNavigation

export async function getStaticProps(context) {
  try {
    const response = await getSingleEntityType({
      ...context?.params,
      projectId: '1f01710c-9be4-418c-bc66-6fd9fc8b8d20',
      query:
        'query MyQuery($locale:String){MainNavigation(locale:$locale){_meta{createdAt updatedAt id}logo{__typename _meta{createdAt updatedAt id}description height id src title width}title logoDarkVersion{__typename _meta{createdAt updatedAt id}description height id src title width}}}',
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
        mainNavigationEntities: response,
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
