import React from 'react'

export default function Contact() {
    return (
        <div className='booking'>
            <h1>Booking & Contact</h1>
            <form name="booking-form" className='booking-form'>
                <input type="text" placeholder="Your Name"/>
                <br/>
                <br/>
                <input type="email" placeholder="Email Address"/>
                <br/>
                <br/>
                <textarea 
                    name="description" 
                    id="" 
                    cols="30" 
                    rows="10" 
                    placeholder="Please detail the work you'd like done
                                or any questions you may have...">
                </textarea>
                <p>URL for reference photo:</p>
                <input type="url" placeholder="www.example.com"/>
                
            </form>
            <button className="btn">Submit</button>
        </div>
    )
}
