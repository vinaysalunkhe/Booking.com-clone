import React from 'react'
import Featured from '../../components/Featured/Featured'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import "./Home.css"
import PropertyList from '../../components/propertyList/PropertyList'
import FeaturedProperties from '../../components/featuredProperties/FeaturedProperties'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'
export const Home = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
        <div className="homeContainer">
          <Featured/>
          <h1 className="homeTitle">Browse by property type</h1>
          <PropertyList/>
          <h1 className="homeTitle">Guests love Home</h1>
          <FeaturedProperties/>
          <MailList/>
          <Footer/>
        </div>
    </div>
  )
}
export default Home