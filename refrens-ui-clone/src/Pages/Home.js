import Announcement from '../components/Announcement/Announcement'
import Companies from '../components/Companies/Companies'
import Freelancer from '../components/Freelancer/Freelancer'
import Header from '../components/Header/Header'
import Navbar from '../components/Navbar/Navbar'
import React from 'react'

const Home = () => {
  return (
    <>
        <Navbar />
        <Header />
        <Announcement />
        <Companies />
        <Freelancer />
    </>
  )
}

export default Home