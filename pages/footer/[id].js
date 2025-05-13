import React, { Fragment } from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'
import PropTypes from 'prop-types'
import {
  getEntityByAttribute,
  getEntities,
} from '@teleporthq/cms-mappers/caisy'
import { useTranslations } from 'next-intl'

const Footer = (props) => {
  return (
    <>
      <div className="footer-container1">
        <Head>
          <title>Footer - Indere</title>
          <meta property="og:title" content="Footer - Indere" />
        </Head>
        <DataProvider
          renderSuccess={(FooterEntity) => (
            <Fragment>
              <div className="footer-container2">
                <h1>{FooterEntity?.title}</h1>
                <span>{FooterEntity?.id}</span>
              </div>
            </Fragment>
          )}
          initialData={props.footerEntity}
          persistDataDuringLoading={true}
          key={props?.footerEntity?.id}
        />
      </div>
      <style jsx>
        {`
          .footer-container1 {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .footer-container2 {
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

Footer.defaultProps = {
  footerEntity: [],
}

Footer.propTypes = {
  footerEntity: PropTypes.array,
}

export default Footer

export async function getStaticProps(context) {
  try {
    const response = await getEntityByAttribute({
      ...context?.params,
      projectId: '1f01710c-9be4-418c-bc66-6fd9fc8b8d20',
      query:
        'query MyQuery($locale:String){Footer(locale:$locale){_meta{createdAt updatedAt id}title sections{__typename...on CompFooterSection{_meta{createdAt updatedAt id}links{__typename...on CompButtonExternalLinks{_meta{createdAt updatedAt id}url title description}...on CompButton{_meta{createdAt updatedAt id}title }}sectionTitle}}legalSection{__typename...on CompButtonExternalLinks{_meta{createdAt updatedAt id}url title description}...on CompButton{_meta{createdAt updatedAt id}title }}}}',
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
        footerEntity: response?.data?.[0],
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
      query: '{Footer{id}}',
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
