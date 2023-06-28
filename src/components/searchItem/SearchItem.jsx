import React from 'react'
import "./searchitem.css"
const SearchItem = () => {
  return (
    <div className="searchItem">
        <img src="https://cf.bstatic.com/xdata/images/hotel/square600/227222651.webp?k=8bfb6658c0dc4e0e1de2065d3982296f8ff3483b351672d059a5a9dc9e4b5a38&o=" alt="" className="siImg" />
        <div className="siDesc">
            <h1 className="siTitle">Tower street apartment </h1>
            <span className="siDistance">500m from center</span>
            <span className="siTaxiOp">Free taxi from airport</span>
            <span className="siSubtitle">studio apartment with air conditioning</span>
            <span className="siFeatures">entire studio 1 * 1 bathroom 21m2 room full bed</span>
            <span className="siCancelOp">Free cancellation</span>
            <span className="siCancelOpSubtitle">you can cancel later!, so you can lock this price today!</span>
        </div>
        <div className="siDetails">
          <div className="siRating">
            <span>Excellent</span>
            <button>8.9</button>
          </div>
          <div className="siDetailTexts">
            <span className="siPrice">$123</span>
            <span className="siTaxOp">Includes taxes and Fees</span>
            <button className='siCheckButton'>see Availability</button>
          </div>
        </div>
    </div>
  )
}

export default SearchItem