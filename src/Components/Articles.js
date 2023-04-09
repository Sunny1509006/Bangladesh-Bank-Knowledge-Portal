import React, { useState, useEffect } from 'react'
import Categories from './Common/Categories';
import axios from './Axios/axios';
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
