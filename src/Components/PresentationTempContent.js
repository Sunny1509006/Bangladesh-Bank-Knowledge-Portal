import React from 'react'
import CategoryContentView from './Common/CategoryContentView'
import { Helmet } from 'react-helmet'

const PresentationTempContent = () => {
  return (
    <>
    <Helmet>
      <title>
        E-Learning Details
      </title>
    </Helmet>
    <CategoryContentView category={"pptx"} categoryName={"E-Learning"} />
    </>
  )
}

export default PresentationTempContent
