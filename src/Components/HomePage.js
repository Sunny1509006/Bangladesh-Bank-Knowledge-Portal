import React, { useMemo } from 'react'
import { Helmet } from 'react-helmet'
import { FaShareAlt } from 'react-icons/fa'
import HomePageBodyHeader from './Common/HomePageBodyHeader'
import HomePageCategory from './Common/HomePageCategory'
import './HomePage.css'
import LatestNews from './LatestNews'

const HomePage = () => {
  return (
    <div className='HomePageMain'>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <HomePageBodyHeader title={"Latest News"} />
      <LatestNews />
      <HomePageBodyHeader title={"Latest Articles"} />
      <HomePageCategory category={"articles"}/>
      <HomePageBodyHeader title={"Latest Projects"} />
      <HomePageCategory category={"projects"}/>
      <HomePageBodyHeader title={"Latest Research"} />
      <HomePageCategory category={"research"}/>
    </div>
  )
}

export default HomePage
