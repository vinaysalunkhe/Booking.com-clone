import React from 'react'
import "./mailList.css"
const MailList = () => {
  return (
    <div className="mail">
        <h1 className="mailTitle">Save Time, Save Money !</h1>
        <span className="mailDesc">Sign up, and we will give you best deals !</span>
        <div className="inputContainer">
            <input type="text" placeholder='your mail'/>
        <button>Subscribe</button>
        </div>

    </div>
  )
}

export default MailList