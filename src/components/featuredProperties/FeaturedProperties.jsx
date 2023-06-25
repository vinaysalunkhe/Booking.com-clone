import React from 'react'
import "./featuredProperties.css"
const FeaturedProperties = () => {
  return (
    <div className="fp">
        <div className="fpItem">
                <img src="https://cf.bstatic.com/xdata/images/hotel/square600/216475546.webp?k=b3803ba3bc1f5c3b481ac390a752a7a3787c58a2b5c5e2081ecdc1c81fc11cd0&o=" alt="" className="fpImg" />
            <span className="fpName">La Routoulette</span>
            <span className="fpCity">Belgium, ciney</span>
            <span className="fpPrice">$1000</span>
            <div className="fpRating">
            <button>8.4</button>
            <span>Excellent</span>
            </div>
        </div>

        <div className="fpItem">
                <img src="https://cf.bstatic.com/xdata/images/hotel/square600/280947638.webp?k=9e8f72c1ff91b261cdda3dbe4e1a70bef455dd72c00119ff379c671a65ad565d&o=" alt="" className="fpImg" />
            <span className="fpName">Domiski shelters</span>
            <span className="fpCity">Poland, Zakopane</span>
            <span className="fpPrice">$400</span>
            <div className="fpRating">
            <button>8.9</button>
            <span>Excellent</span>
            </div>
        </div>

        <div className="fpItem">
                <img src="https://cf.bstatic.com/xdata/images/hotel/square600/131500906.webp?k=b6f638eadb7c9632498a9e9a15440987a22489684b8825b0cb235bd3c79f07de&o=" alt="" className="fpImg" />
            <span className="fpName">Racnzo Dolini</span>
            <span className="fpCity">Poland, Zikiwiok</span>
            <span className="fpPrice">$500</span>
            <div className="fpRating">
            <button>7.8</button>
            <span>Good</span>
            </div>
        </div>

        <div className="fpItem">
                <img src="https://cf.bstatic.com/xdata/images/hotel/square600/187853972.webp?k=dd753431cf4b638642614dc060512d832d24f3249eef30b9a5f18601d2ac5635&o=" alt="" className="fpImg" />
            <span className="fpName">Tiny House gigikoliuous</span>
            <span className="fpCity">Germany, Trire</span>
            <span className="fpPrice">$700</span>
            <div className="fpRating">
            <button>8.8</button>
            <span>Excellent</span>
            </div>
        </div>
    </div>
  )
}

export default FeaturedProperties;
