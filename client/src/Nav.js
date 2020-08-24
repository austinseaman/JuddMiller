import React from 'react'
import { Link } from 'react-router-dom'
import Insta from './assets/instagram.svg'
import Facebook from './assets/facebook.svg'

const Nav = (props) => {
    return (
        <div className="nav-container">
            {/* <span className='nav-logo'>
                <img src={Main} alt="wolf-logo"/>
            </span> */}
            <span>
                <h1>Judd Lucius Miller</h1>
                <h5>Artist at Misery & Co. Tattoo Collective</h5>
                <h2>
                    <Link to ='/merch'>| Merch</Link>  
                    <br/>
                    <Link to ='/portfolio'>| Portfolio</Link> 
                    <br />
                    <Link to ='/bio'>| Bio</Link>
                    <br />
                    <Link to ='/contact'>| Contact</Link> 
                    <br/>
                    <Link to ='/cart'>| Cart</Link>
                </h2>
            </span>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <span className="socials">
                <a href="https://www.instagram.com/juddluciusmiller/">
                    <img src={Insta} alt="instagram-logo"/>
                </a>
                <a href="https://www.facebook.com/juddluciusmiller">
                    <img src={Facebook} alt="facebook-logo"/>
                </a>
            </span>
            <br/>
            <br/>
            <span className='footer-text'>
                <Link to ='/admin'>Admin</Link>
                <p>©Judd Lucius Miller 2020 || Austin Seaman 2020</p>
            </span>
        </div>
    )
}

export default Nav