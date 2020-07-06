import React from 'react'
import InstagramEmbed from 'react-instagram-embed'

export default function Portfolio() {
    return (
        <div className='portfolio-main'>
            <h1>Portfolio</h1>
            <InstagramEmbed
                url='https://www.instagram.com/juddluciusmiller/'
                maxWidth={320}
                hideCaption={false}
                containerTagName='div'
            />
        </div>
    )
}
