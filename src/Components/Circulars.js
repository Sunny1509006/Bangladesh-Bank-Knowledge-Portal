import React from 'react'
import Categories from './Common/Categories';
import { Helmet } from 'react-helmet';

const Circulars = () => {

  return (
    <>
      <Helmet>
        <title>
          Circulars
        </title>
      </Helmet>
      <Categories category={"Circulars"} linkCategory={"notices"} />
    </>
  )
}

export default Circulars
