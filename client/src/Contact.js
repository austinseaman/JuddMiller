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
                {/* Figure out how the hell to make sure one radio button unchecks when
                    new radio button is checked, as well as how to uncheck one. */}
                <input type="checkbox" name="bng" value="black-n-grey"/><b>Black and Grey</b>
                <input type="checkbox" name="color" value="color"/><b>Color</b>
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
                <br/>
                <b>URL for reference photo:</b>
                <br/>
                <input type="url" placeholder="www.example.com" />

            </form>
            <button className="btn">Submit</button>
        </div>
    )
}
