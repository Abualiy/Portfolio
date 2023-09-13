import React from 'react'
import profile from '../asset/person.jpg'
const Search = () => {
    return (
        <div className='search'>
            <div className="searchForm">
                <input type="search" placeholder='Find a user' />

            </div>
            <div className="userChat">
                <img src={profile} alt="profile" />
                <div className="userChatInfo">
                    <span>Neima Nesru</span>

                </div>
            </div>

        </div>
    )
}

export default Search
