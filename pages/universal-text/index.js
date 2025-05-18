import React, { Fragment } from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'
import { getSingleEntityType } from '@teleporthq/cms-mappers/caisy'
import { useTranslations } from 'next-intl'

const UniversalText = (props) => {
  return (
    <>
      <div className="universal-text-container1">
        <Head>
          <title>UniversalText - Indere</title>
          <meta property="og:title" content="UniversalText - Indere" />
        </Head>
        <DataProvider
          renderSuccess={(params) => (
            <Fragment>
              <div className="universal-text-container2">
                <Repeater
                  items={params}
                  renderItem={(UniversalTextEntities) => (
                    <Fragment>
                      <div className="universal-text-container3">
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
          .universal-text-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .universal-text-container2 {
            display: flex;
            flex-direction: column;
          }
          .universal-text-container3 {
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

UniversalText.defaultProps = {
  universalTextEntities: [],
}

UniversalText.propTypes = {
  universalTextEntities: PropTypes.array,
}

export default UniversalText

export async function getStaticProps(context) {
  try {
    const messages = (await import('/locales/' + context.locale + '.json'))
      .default
    const response = await getSingleEntityType({
      ...context?.params,
      ...(context?.locale && {
        locale: context.locale,
      }),
      projectId: '1f01710c-9be4-418c-bc66-6fd9fc8b8d20',
      query:
        'query MyQuery($locale:String){UniversalText(locale:$locale){_meta{createdAt updatedAt id}title copyright customHtml filter_all primaryColor customHtmlBody filter_current secondaryColor filter_divested pageNotFoundDescription{json connections{__typename  }}pageNotFoundBackgroundImage{__typename _meta{createdAt updatedAt id}description height id src title width}}}',
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
        universalTextEntities: response,
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
