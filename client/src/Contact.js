import React from 'react'
import Header from './assets/juddContactHeader.jpg'

export default function Contact() {
    
    return (
        <div className='main-book'>
            {/* <h1>Booking & Contact</h1> */}
            <div className='booking'>
                <form name="booking-form" className='booking-form'>
                    <input type="text" placeholder="Your Name" />
                    <input type="email" placeholder="Email Address"  />
                    <br />
                    <input type="text" placeholder="Size of Tattoo (inches)"  />
                    <input type="text" placeholder="Location on body"  />
                    <br />
                    <input type="date"/>
                    <input type="time"/>
                    <br/>
                    <input type="checkbox" name="bng" value="black-n-grey"/><b>Black and Grey</b>
                    <input type="checkbox" name="color" value="color"/><b>Color</b>
                    <br />
                    <textarea
                        name="description"
                        id=""
                        cols="30"
                        rows="5"
                        placeholder="Please detail the work you'd like done
                                    or any questions you may have..."
                        >
                    </textarea>
                    <br/>
                    <br/>
                    <b>Reference Photos:</b>
                    <br/>
                    <input type="file"/>
                    <br/>
                    <input type="file"/>
                    <br/>
                    <input type="file"/>
                </form>
                <img src={Header} width="400px" height="320px"alt=""/>
            </div>
            <button className="btn">Submit</button>
        </div>
        
    )
}
