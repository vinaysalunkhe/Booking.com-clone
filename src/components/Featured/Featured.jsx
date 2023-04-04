import React from 'react'
import "./featured.css"

const Featured = () => {
  return (
    <div className="featured">
        <div className="featuredItem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/87428762.webp?k=9a065fcd92168145d8c8358701662c76793535597b678efc8f6921c8e3c188e6&o=&s=1" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>dublin</h1>
                <h1>134 Properties</h1>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/87428762.webp?k=9a065fcd92168145d8c8358701662c76793535597b678efc8f6921c8e3c188e6&o=&s=1" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Austria</h1>
                <h1>134 Properties</h1>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/87428762.webp?k=9a065fcd92168145d8c8358701662c76793535597b678efc8f6921c8e3c188e6&o=&s=1" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Shirpur</h1>
                <h1>134 Properties</h1>
            </div>
        </div>
    </div>
  )
}

export default Featured