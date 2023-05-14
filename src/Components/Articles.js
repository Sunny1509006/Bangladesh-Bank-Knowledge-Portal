import React from 'react'
import Categories from './Common/Categories';
import { Helmet } from 'react-helmet';

const Articles = () => {

  return (
    <>
    <Helmet>
      <title>
        Articles
      </title>
    </Helmet>
      <Categories category={"Articles"} linkCategory={"articles"} />
    </>
  )
}

export default Articles
