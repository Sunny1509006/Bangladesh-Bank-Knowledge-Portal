import React from 'react'
import Categories from './Common/Categories'
import { Helmet } from 'react-helmet';

const Projects = () => {

  return (
    <>
    <Helmet>
      <title>
        Projects
      </title>
    </Helmet>
      <Categories category={"Projects"} linkCategory={"projects"} />
    </>
  )
}

export default Projects
