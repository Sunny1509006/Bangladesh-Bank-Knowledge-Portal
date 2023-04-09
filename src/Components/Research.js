import React from 'react'
import Categories from './Common/Categories';
import { Helmet } from 'react-helmet';

const Research = () => {

  return (
    <>
    <Helmet>
      <title>
        Research
      </title>
    </Helmet>
      <Categories category={"Research"} linkCategory={"research"} />
    </>
  )
}

export default Research
