import React from 'react'

export default function Contact() {
    return (
        <div className='booking'>
            <h1>Booking & Contact</h1>
            <form name="booking-form" className='booking-form'>
                <input type="text" placeholder="Your Name" />
                <br />
                <input type="email" placeholder="Email Address" />
                <br />
                <input type="text" placeholder="Size of Tattoo (inches)" />
                <input type="text" placeholder="Location on body" />
                <br />
                <input type="radio" value="black-n-grey"/>Black and Grey
                <input type="radio" value="color"/>Color
                {/* <select name="color" id="">
                    <option value="none" selected disabled hidden>Select a Color</option>
                    <option value="">Black and Grey</option>
                    <option value="">Full Color</option>
                </select> */}
                <br />
                <textarea
                    name="description"
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="Please detail the work you'd like done
                                or any questions you may have...">
                </textarea>
                <p>URL for reference photo:</p>
                <input type="url" placeholder="www.example.com" />

            </form>
            <button className="btn">Submit</button>
        </div>
    )
}
