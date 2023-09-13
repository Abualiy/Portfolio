import React from 'react'
import camera from '../asset/video.png'
import addFriend from '../asset/addfriend.png'
import more from '../asset/more.png'
import Messages from './Messages'
import Input from './Input'

const Chat = () => {
    return (
        <div className='chat'>
            <div className="chatInfo">
                <span>Neima</span>
                <div className="chatIcons">
                    <img src={camera} alt="" />
                    <img src={addFriend} alt="" />
                    <img src={more} alt="" />
                </div>
            </div>

            <Messages />
            <Input />

        </div>
    )
}

export default Chat
