import React from 'react'
import Categories from './Common/Categories';
import { Helmet } from 'react-helmet';

const News = () => {

  return (
    <>
    <Helmet>
      <title>
        News
      </title>
    </Helmet>
      <Categories category={"News"} linkCategory={"news"} />
    </>
  )
}

export default News
