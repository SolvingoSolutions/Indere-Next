import React, { Fragment } from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import { useTranslations } from 'next-intl'

const Footer11 = (props) => {
  return (
    <>
      <div className="footer11-container1">
        <Head>
          <title>Footer1 - Indere</title>
          <meta property="og:title" content="Footer1 - Indere" />
        </Head>
        <DataProvider
          renderSuccess={(params) => (
            <Fragment>
              <div className="footer11-container2">
                <Repeater
                  items={params}
                  renderItem={(FooterEntities) => (
                    <Fragment>
                      <div className="footer11-container3">
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
          .footer11-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .footer11-container2 {
            display: flex;
            flex-direction: column;
          }
          .footer11-container3 {
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

export default Footer11
