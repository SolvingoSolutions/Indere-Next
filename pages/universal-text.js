import React, { Fragment } from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import { useTranslations } from 'next-intl'

const UniversalText1 = (props) => {
  return (
    <>
      <div className="universal-text1-container1">
        <Head>
          <title>UniversalText - Indere</title>
          <meta property="og:title" content="UniversalText - Indere" />
        </Head>
        <DataProvider
          renderSuccess={(params) => (
            <Fragment>
              <div className="universal-text1-container2">
                <Repeater
                  items={params}
                  renderItem={(UniversalTextEntities) => (
                    <Fragment>
                      <div className="universal-text1-container3">
                        <h1>{UniversalTextEntities?.title}</h1>
                        <span>{UniversalTextEntities?.title}</span>
                        <span>{UniversalTextEntities?.customHtml}</span>
                      </div>
                    </Fragment>
                  )}
                />
              </div>
            </Fragment>
          )}
          initialData={props.universalTextEntities}
          persistDataDuringLoading={true}
          key={props?.pagination?.page}
        />
      </div>
      <style jsx>
        {`
          .universal-text1-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .universal-text1-container2 {
            display: flex;
            flex-direction: column;
          }
          .universal-text1-container3 {
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

export default UniversalText1
