import React from 'react'
import profile from '../assets/person.jpg'
const Message = () => {
    return (
        <div className='message owner'>
            <div className="messageInfo">
                <img src={profile} alt="" />
                <span>just now</span>
            </div>

            <div className="messageContent">
                <p>Hello</p>
                <img src={profile} alt="" />
            </div>
        </div>
    )
}

export default Message
