import React from 'react'
import Feed from "react-instagram-authless-feed"

export default function Portfolio() {
    
    return (
        <div className='portfolio-main'>
            <h1>Portfolio</h1>
            <Feed username="juddluciusmiller" classname="Feed" classnameLoading="Loading"/>
        </div>
    )
}
