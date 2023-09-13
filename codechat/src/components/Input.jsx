import React from 'react'
import attach from '../assets/attach.png'
import gallery from '../assets/gallery.png'
const Input = () => {
    return (
        <div className='input'>
            <input type="text" placeholder='Type something...' />
            <div className="send">
                <img src={attach} alt="attach file" />
                <input id='file' type="file" style={{ display: 'none' }} />
                <label htmlFor="file">
                    <img src={gallery} alt="gallery" />
                </label>
                <button>Send</button>
            </div>
        </div>
    )
}

export default Input
