import React from 'react'
import profile from '../asset/person.jpg'
const Chats = () => {
    return (
        <div className='chats'>
            <div className="userChat">
                <img src={profile} alt="profile" />
                <div className="userChatInfo">
                    <span>Neima Nesru</span>
                    <p>Hello Nemu</p>
                </div>
            </div>

            <div className="userChat">
                <img src={profile} alt="profile" />
                <div className="userChatInfo">
                    <span>Neima Nesru</span>
                    <p>Hello Nemu</p>
                </div>
            </div>

            <div className="userChat">
                <img src={profile} alt="profile" />
                <div className="userChatInfo">
                    <span>Neima Nesru</span>
                    <p>Hello Nemu</p>
                </div>
            </div>

            <div className="userChat">
                <img src={profile} alt="profile" />
                <div className="userChatInfo">
                    <span>Neima Nesru</span>
                    <p>Hello Nemu</p>
                </div>
            </div>
        </div>
    )
}

export default Chats
