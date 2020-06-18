import React from 'react'

export default function Contact() {
    return (
        <div>
            <h1>Booking</h1>
            <form name="booking-form">
                <input type="text" placeholder="Your Name"/>
                <input type="email" placeholder="Email Address"/>
                <textarea 
                    name="description" 
                    id="" 
                    cols="30" 
                    rows="10" 
                    placeholder="Please detail the work you'd like done 
                                or any questions you may have...">
                </textarea>
            </form>
            <button>Submit</button>
        </div>
    )
}
