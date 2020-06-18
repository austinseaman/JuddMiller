import React from 'react'
import { Link } from 'react-router-dom'
import Main from './assets/judd-main-photo.jpg'
import Insta from './assets/instagram.svg'
import Facebook from './assets/facebook.svg'

export default function Nav() {
    return (
        <div className="nav-container">
            <span className='nav-logo'>
                <img src={Main} alt="wolf-logo"/>
            </span>
            <span>
                <h1>Judd Lucius Miller</h1>
                <h5>Artist at Misery & Co. Tattoo Collective</h5>
                <h5> <Link to ='/'>Home</Link> | <Link to ='/merch'>Merch</Link> | <Link to ='/portfolio'>Portfolio</Link> | <Link to ='/contact'>Contact</Link> | <Link to ='/cart'>Cart</Link></h5>
            </span>
            {/* <h1>Judd Lucius Miller </h1> */}
            <span className="socials">
                <a href="https://www.instagram.com/juddluciusmiller/">
                    <img src={Insta} alt="instagram-logo"/>
                </a>
                <a href="https://www.facebook.com/juddluciusmiller">
                    <img src={Facebook} alt="facebook-logo"/>
                </a>
            </span>
        </div>
    )
}
