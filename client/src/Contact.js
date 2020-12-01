import React from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';

export default function Contact() {
    return (
        <div className='main-book'>
            <h1>Booking & Contact</h1>
            <div className='booking'>
            <form name="booking-form" className='booking-form'>
                <input type="text" placeholder="Your Name" />
                
                <input type="email" placeholder="Email Address" />
                <br />
                <input type="text" placeholder="Size of Tattoo (inches)" />
                <input type="text" placeholder="Location on body" />
                <br />
                <input type="checkbox" name="bng" value="black-n-grey"/><b>Black and Grey</b>
                <input type="checkbox" name="color" value="color"/><b>Color</b>
                <br />
                <textarea
                    name="description"
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="Please detail the work you'd like done
                                or any questions you may have...">
                </textarea>
                <br/>
                <b>URL for reference photo:</b>
                <br/>
                <input type="url" placeholder="www.example.com" />

            </form>
            <Calendar />
            
        </div>
        <button className="btn">Submit</button>
        </div>
        
    )
}
