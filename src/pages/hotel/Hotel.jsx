import React from 'react'
import "./hotel.css"
import Header from "../../components/header/Header"
import Navbar from "../../components/navbar/Navbar"
import MailList from "../../components/mailList/MailList"
import Footer from "../../components/footer/Footer"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
const Hotel = () => {

const photos = [{src:"https://cf.bstatic.com/xdata/images/hotel/square600/74065680.webp?k=2269b6b33c4d7c1d2b25d2964dc984eed76dc648fcd2b9d2073db0da10a1dc3b&o="}
                  ,
                  {
                    src:"https://cf.bstatic.com/xdata/images/hotel/square600/74065680.webp?k=2269b6b33c4d7c1d2b25d2964dc984eed76dc648fcd2b9d2073db0da10a1dc3b&o="
                  },
                  {
                    src:"https://cf.bstatic.com/xdata/images/hotel/square600/74065680.webp?k=2269b6b33c4d7c1d2b25d2964dc984eed76dc648fcd2b9d2073db0da10a1dc3b&o="
                  },
                  {
                    src:"https://cf.bstatic.com/xdata/images/hotel/square600/74065680.webp?k=2269b6b33c4d7c1d2b25d2964dc984eed76dc648fcd2b9d2073db0da10a1dc3b&o="
                  },
                  {
                    src:"https://cf.bstatic.com/xdata/images/hotel/square600/74065680.webp?k=2269b6b33c4d7c1d2b25d2964dc984eed76dc648fcd2b9d2073db0da10a1dc3b&o="
                  },
                  {
                    src:"https://cf.bstatic.com/xdata/images/hotel/square600/74065680.webp?k=2269b6b33c4d7c1d2b25d2964dc984eed76dc648fcd2b9d2073db0da10a1dc3b&o="
                  }]
  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      <div className="hotelContainer">
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now</button>
          <h1 className="hotelTitle">Grand hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot}/>
            <span>Et 125 park evenue</span>
          </div>
         <span className="hotelDistance">
          Excellent Location - 500m from center
         </span>
         <span className="hotelPriceHighlight">
           Book a stay over $124 and get Free airport taxi fare
         </span>
         <div className="hotelImages">
          {
            photos.map(photos=>(
              <div className="hotelImgWrapper">
                <img src={photos.src} alt="" className="hotelImg" />
              </div>
            ))
          }
         </div>
         <div className="hotelDetails">
          <div className="hotelDetailsTexts">
          <h1 className="hotelTitle">stay in heart of lannisters</h1>
          <p className="hotelDesc">
          You're eligible for a Genius discount at Cerca Del Mar! To save at this property,
           all you have to do is sign in.Boasting a garden and views of garden, Cerca Del
            Mar is a recently renovated guest house situated in Calangute, 600 metres from 
            Calangute Beach. This property offers access to a terrace, free private parking 
            and free WiFi. The guest house has family rooms.All units are fitted with air 
            conditioning, a flat-screen TV with satellite channels, a kettle, a walk-in shower,
             free toiletries and a desk. The private bathroom is fitted with a bidet. At the
              guest house, units have bed linen and towels.À la carte and American breakfast
               options with warm dishes and local specialities are available each morning at
                the guest house.Candolim Beach is 1.8 km from Cerca Del Mar, while Baga Beach 
                is 2.2 km from the property. The nearest airport is Dabolim Airport, 41 km 
                from the accommodation.This is our guests' favourite part of Calangute, 
                according to independent reviews.
          </p>
          </div>
          <div className="hotelDetailsPrice">
            <h1>Perfect for 8 nights stay!</h1>
            <span>The nearest airport is Dabolim Airport, 41 km 
                from the accommodation.</span>
                <h2><b>$400</b> ( 9 nights )</h2>
                <button>Reserve or Book now !</button>
          </div>
         </div>
        </div>
       
      </div>
      <MailList/>
        <Footer/>
    </div>
  )
}

export default Hotel