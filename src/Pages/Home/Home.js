import React from 'react'
import Layout from '../../Components/Layouts/Layout'
import Home1 from './Home1'
import "../../Styles/HomeStyle.css"
import Home2 from './Home2'
import Home3 from './Home3'
import SocialMedia from '../../Components/Layouts/SocialMedia'


const Home = () => {
  return (
    <>
      <Layout>
             <Home1></Home1>
             {/* <SocialMedia/> */}
             <Home2/>
             <Home3/>
             
      </Layout>
    </>
  )
}

export default Home
