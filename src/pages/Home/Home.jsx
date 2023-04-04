import React from 'react'
import Featured from '../../components/Featured/Featured'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import "./Home.css"
export const Home = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
        <div className="homeContainer">
          <Featured/>
          
        </div>
    </div>
  )
}
export default Home