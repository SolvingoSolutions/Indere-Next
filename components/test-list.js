import React, { useState } from 'react'

import { useTranslations } from 'next-intl'

const TestList = (props) => {
  const [filterValue, setFilterValue] = useState('newState')
  const [isVisible, setIsVisible] = useState(false)
  return (
    <>
      <div className="test-list-container"></div>
      <style jsx>
        {`
          .test-list-container {
            width: 100%;
            height: 400px;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default TestList
