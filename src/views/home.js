import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar4 from '../components/navbar4'
import Hero9 from '../components/hero9'
import Features1 from '../components/features1'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Celebrated Open Oyster</title>
        <meta property="og:title" content="Celebrated Open Oyster" />
      </Helmet>
      <Navbar4></Navbar4>
      <Hero9></Hero9>
      <Features1></Features1>
    </div>
  )
}

export default Home
