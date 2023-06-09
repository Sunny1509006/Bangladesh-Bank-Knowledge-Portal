import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import CategoryContentView from './Common/CategoryContentView'
import axios from './Axios/axios'
import { Helmet } from 'react-helmet'

const ProjectContent = () => {

  return (
    <>
    <Helmet>
      <title>
        Project Details
      </title>
    </Helmet>
    <CategoryContentView category={"projects"} categoryName={"Project"}/>
    </>
  )
}

export default ProjectContent
