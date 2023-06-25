import React from 'react'
import "./featured.css"

const Featured = () => {
  return (
    <div className="featured">
        <div className="featuredItem">
            <img src="https://cf.bstatic.com/xdata/images/city/600x600/684765.jpg?k=3f7d20034c13ac7686520ac1ccf1621337a1e59860abfd9cbd96f8d66b4fc138&o=" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Delhi</h1>
                <h1>134 Properties</h1>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://cf.bstatic.com/xdata/images/city/600x600/684716.jpg?k=4c3f55236cffa6597afa0ef11a9f012636f535bf9cc6c0e2ed8142e01fa14766&o=" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Manali</h1>
                <h1>134 Properties</h1>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://cf.bstatic.com/xdata/images/city/600x600/971346.jpg?k=40eeb583a755f2835f4dcb6900cdeba2a46dc9d50e64f2aa04206f5f6fce5671&o=" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Mumbai</h1>
                <h1>134 Properties</h1>
            </div>
        </div>
    </div>
  )
}

export default Featured