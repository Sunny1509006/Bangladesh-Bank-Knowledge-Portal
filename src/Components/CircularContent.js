import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import CategoryContentView from './Common/CategoryContentView'
import axios from './Axios/axios'
import { Helmet } from 'react-helmet'

const CircularContent = () => {

  return (
    <>
    <Helmet>
      <title>
        Circular Details
      </title>
    </Helmet>
    <CategoryContentView category={"notices"} categoryName={"Circular"}/>
    </>
  )
}

export default CircularContent
