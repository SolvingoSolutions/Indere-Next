import React, { Fragment } from 'react'
import Head from 'next/head'

import {
  DataProvider,
  Repeater,
  CaisyDocumentLink,
} from '@teleporthq/react-components'
import { RichTextRenderer } from '@caisy/rich-text-react-renderer'
import PropTypes from 'prop-types'
import {
  getEntityByAttribute,
  getEntities,
} from '@teleporthq/cms-mappers/caisy'
import { useTranslations } from 'next-intl'

const UniversalText11 = (props) => {
  return (
    <>
      <div className="universal-text11-container1">
        <Head>
          <title>UniversalText1 - Indere</title>
          <meta property="og:title" content="UniversalText1 - Indere" />
        </Head>
        <DataProvider
          renderSuccess={(UniversalTextEntity) => (
            <Fragment>
              <div className="universal-text11-container2">
                <h1>{UniversalTextEntity?.title}</h1>
                <span>{UniversalTextEntity?.customHtml}</span>
                <span>{UniversalTextEntity?.customHtmlBody}</span>
                <div className="universal-text11-container3">
                  <RichTextRenderer
                    node={UniversalTextEntity?.pageNotFoundDescription}
                    overwrites={{
                      documentLink: CaisyDocumentLink,
                    }}
                  ></RichTextRenderer>
                </div>
              </div>
            </Fragment>
          )}
          initialData={props.universalTextEntity}
          persistDataDuringLoading={true}
          key={props?.universalTextEntity?.id}
        />
      </div>
      <style jsx>
        {`
          .universal-text11-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .universal-text11-container2 {
            gap: 12px;
            width: 100%;
            display: flex;
            flex-direction: column;
          }
          .universal-text11-container3 {
            width: 100%;
            align-self: stretch;
          }
        `}
      </style>
    </>
  )
}

UniversalText11.defaultProps = {
  universalTextEntity: [],
}

UniversalText11.propTypes = {
  universalTextEntity: PropTypes.array,
}

export default UniversalText11

export async function getStaticProps(context) {
  try {
    const response = await getEntityByAttribute({
      ...context?.params,
      projectId: '1f01710c-9be4-418c-bc66-6fd9fc8b8d20',
      query:
        'query MyQuery($locale:String){UniversalText(locale:$locale){_meta{createdAt updatedAt id}title copyright customHtml filter_all primaryColor customHtmlBody filter_current secondaryColor filter_divested pageNotFoundDescription{json connections{__typename  }}pageNotFoundBackgroundImage{__typename _meta{createdAt updatedAt id}description height id src title width}}}',
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
        universalTextEntity: response?.data?.[0],
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
      query: '{UniversalText{id}}',
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
