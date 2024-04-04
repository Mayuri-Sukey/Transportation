import React from 'react'
import Layout from '../../Components/Layouts/Layout'
import Home1 from './Home1'
import "../../Styles/HomeStyle.css"
import Home2 from './Home2'
import Home3 from './Home3'
import Home4 from './Home4'
import Home5 from './Home5'





const Home = () => {
  console.log("home component")
  return (
    <>
      <Layout>
        {/* <Carosel/> */}
             <Home1></Home1>
             {/* <SocialMedia/> */}
             <Home2/>
             <Home4/>
             <Home3/>
             <Home5/>
          
       
      
           
             
      </Layout>
    </>
  )
}

export default Home
