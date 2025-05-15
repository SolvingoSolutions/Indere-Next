import React from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const TeamGrid = (props) => {
  return (
    <>
      <section
        className={`team-grid-container team-section ${props.rootClassName} `}
      ></section>
      <style jsx>
        {`
          .team-grid-container {
            position: relative;
          }
        `}
      </style>
    </>
  )
}

TeamGrid.defaultProps = {
  rootClassName: '',
}

TeamGrid.propTypes = {
  rootClassName: PropTypes.string,
}

export default TeamGrid
