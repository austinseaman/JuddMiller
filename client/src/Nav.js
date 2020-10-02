import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Insta from './assets/instagram.svg'
import Facebook from './assets/facebook.svg'
import { UserContext } from './context/userProvider'

const Nav = (props) => {
    const { token, logout } = useContext(UserContext)


    return (
        <div className="nav-container">
            {/* <span className='nav-logo'>
                <img src={Main} alt="wolf-logo"/>
            </span> */}
            <span>
                <h1>JUDD LUCIUS MILLER</h1>
                <h5>Tattoo Artist ◦ Salt Lake City, UT</h5>
                <h2>
                    <Link to ='/merch'>MERCH</Link>  
                    <br/>
                    <Link to ='/portfolio'>PORTFOLIO</Link> 
                    <br />
                    <Link to ='/bio'>BIO</Link>
                    <br />
                    <Link to ='/contact'>CONTACT</Link> 
                    <br/>
                    <Link to ='/cart'>CART</Link>
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
                {token ? <Link onClick={logout}>Logout</Link> : <Link to ='/admin'>Admin</Link>}
                <p>©Judd Lucius Miller 2020 <br/> ©Austin Seaman 2020</p>
            </span>
        </div>
    )
}

export default Nav