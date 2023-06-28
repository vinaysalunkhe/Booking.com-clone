import React, { useState } from 'react'
import "./hotel.css"
import Header from "../../components/header/Header"
import Navbar from "../../components/navbar/Navbar"
import MailList from "../../components/mailList/MailList"
import Footer from "../../components/footer/Footer"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import {faCircleXmark} from '@fortawesome/free-solid-svg-icons'
import {faCircleArrowRight} from '@fortawesome/free-solid-svg-icons'
import {faCircleArrowLeft} from '@fortawesome/free-solid-svg-icons'
const Hotel = () => {
const [slideNumber,setSlideNumber]=useState(0);
const [open,setOpen]=useState(false);

const handleOpen=(i)=>
{
   setSlideNumber(i);
   setOpen(true);
}
const handleMove=(direction)=>
{
  let newSlideNumber;
   if(direction==="l")
   {
      newSlideNumber = slideNumber===0?5:slideNumber-1;
   }
   else
   {
    newSlideNumber = slideNumber===5?0:slideNumber + 1;
   }
   setSlideNumber(newSlideNumber);
}
const photos = [{src:"https://cf.bstatic.com/xdata/images/hotel/square600/74065680.webp?k=2269b6b33c4d7c1d2b25d2964dc984eed76dc648fcd2b9d2073db0da10a1dc3b&o="}
                  ,
                  {
                    src:"https://q-xx.bstatic.com/xdata/images/region/170x136/68606.jpg?k=4b43b9128b79beaab4ca2e8c038ddf5709b0b90608afbca222cfbe08fabda7d2&o="
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
       {
        open && <div className="slider">
        <FontAwesomeIcon icon={faCircleXmark} className='close' onClick={()=>setOpen(false)}/>
        <FontAwesomeIcon icon={faCircleArrowLeft} className='arrow' onClick={()=>{ handleMove("l")}}/>
        <div className="sliderWrapper">
          <img src={photos[slideNumber].src} alt="" className="sliderImg" />
        </div>
        <FontAwesomeIcon icon={faCircleArrowRight} className='arrow' onClick={()=>{ handleMove("r")}}/>
          </div>
        }
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
            photos.map((photos,i)=>(
              <div className="hotelImgWrapper">
                <img  onClick={()=>handleOpen(i)} src={photos.src} alt="" className="hotelImg" />
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