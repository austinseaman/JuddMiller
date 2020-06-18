import React from 'react'
import { Link } from 'react-router-dom'
import Main from './assets/judd-main-photo.jpg'
import Insta from './assets/instagram.svg'
import Facebook from './assets/facebook.svg'

export default function Nav() {
    return (
        <div className="nav-container">
            <span className='nav-logo'>
                <Link to='/'>
                    <img src={Main} alt="wolf-logo"/>
                </Link>
            </span>
            <span>
                <h1>Judd Lucius Miller</h1>
                <h5>Artist at Misery & Co. Tattoo Collective</h5>
                <h5> Home | Merch | Contact | Cart</h5>
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
