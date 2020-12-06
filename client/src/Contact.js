import React from 'react'
import Header from './assets/juddContactHeader.jpg'
import emailjs from 'emailjs-com'

export default function Contact() {
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm("gmail", "judd_contact", e.target, "user_lcPxsoaMpJI5OFyliEpYn")
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        alert(`Your request was sent, and I'll get back to you as soon as possible. Thanks!`)
    }
    
    return (
        <div className='main-book'>
            {/* <h1>Booking & Contact</h1> */}
            <div className='booking'>
                <form name="booking-form" enctype="multipart/form-data" method="post" className='booking-form' onSubmit={sendEmail}>
                    <input type="text" name="cust_name" placeholder="Your Name" />
                    <input type="email" name="reply_to" placeholder="Email Address"  />
                    <br />
                    <input type="text" name="tattoo_size" placeholder="Size of Tattoo (inches)"  />
                    <input type="text" name="tattoo_location" placeholder="Location on body"  />
                    <br />
                    <input type="date" name="date_requested" />
                    <input type="time" name="time_requested" />
                    <br/>
                    <input type="checkbox" name="bng" value="yes"/><b>Black and Grey</b>
                    <input type="checkbox" name="color" value="yes"/><b>Color</b>
                    <br />
                    <br/>
                    <textarea
                        name="tattoo_description"
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
                    <input type="file" name="ref"/>
                    <br/>
                    <input type="file" name="ref2"/>
                    <br/>
                    <input type="file" name="ref3"/>
                    <br/>
                    <br/>
                    <input type="submit" value="Submit" className="btn"/>
                </form>
                <img src={Header} width="420px" height="420px" alt="tattoo of face on arm"/>
            </div>
        </div>
        
    )
}
