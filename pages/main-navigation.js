import React, { Fragment } from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import { useTranslations } from 'next-intl'

const MainNavigation1 = (props) => {
  return (
    <>
      <div className="main-navigation1-container1">
        <Head>
          <title>MainNavigation - Indere</title>
          <meta property="og:title" content="MainNavigation - Indere" />
        </Head>
        <DataProvider
          renderSuccess={(params) => (
            <Fragment>
              <div className="main-navigation1-container2">
                <Repeater
                  items={params}
                  renderItem={(MainNavigationEntities) => (
                    <Fragment>
                      <div className="main-navigation1-container3">
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
          .main-navigation1-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .main-navigation1-container2 {
            display: flex;
            flex-direction: column;
          }
          .main-navigation1-container3 {
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

export default MainNavigation1

export async function getStaticProps(context) {
  const messages = (await import('/locales/' + context.locale + '.json'))
    .default
  return {
    props: {
      messages,
      ...context,
    },
  }
}
