import React from 'react'
import { Helmet } from 'react-helmet';
import Categories from './Common/Categories';

const PresentationTemp = () => {
  return (
    <>
    <Helmet>
      <title>
        E-Learning
      </title>
    </Helmet>
      <Categories category={"E-Learning"} linkCategory={"pptx"} />
    </>
  )
}

export default PresentationTemp
