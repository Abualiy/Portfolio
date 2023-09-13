import React from 'react'
import Search from '../components/Search'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Chat from '../components/Chat'
import Chats from '../components/Chats'
import Message from '../components/Message'
import Input from '../components/Input'

const Home = () => {
    return (
        <div className='home'>
            <div className="container">

                <Sidebar />
                <Chat />

            </div>
        </div>
    )
}

export default Home
