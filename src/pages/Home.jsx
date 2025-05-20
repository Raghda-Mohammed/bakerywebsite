import React from 'react'
import Banner from '../components/Banner'
import Products from '../components/Products'
import Banner2 from '../components/Banner2'
import Explore from '../components/Explore'
import Banner3 from '../components/Banner3'
import Featured from '../components/Featured'

const Home = () => {
  return (
    <div>
      <Banner />
      <Products />
      <Banner2 />
      <Explore />
      <Banner3 />
      <Featured />
    </div>
  )
}

export default Home