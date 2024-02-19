import React from 'react';
const ContactMe = () => {
    return(
        <section style={{textAlign: 'center'}}>
            <h2>
                Contact Me
            </h2>
            <div>
                <p><span>Email :</span> latheesh805@gmail.com</p>
                <p><span>Mobile :</span> +91 7013342819</p>
            </div>
            <form className='contactForm'>
                <div  style={{display:'inline-flex'}}>
                <div style={{margin: '10px'}} >
                <label> First Name </label>
                <br></br>
                <input className='white' style={{height: '30px'}} type = 'text' placeholder='First Name'/>
                </div>
                <div style={{margin: '10px'}}>
                <label> Last Name </label>
                <br></br>
                <input className='black' style={{height: '30px'}}type = 'text' placeholder='Last Name'/>
                </div>
                
                </div>
                <br></br>
                <label>Email</label>
                <br></br>
                <input className='bishop'style={{height: '30px'}} type = 'email' placeholder='Your Email'/>
                <br></br>
                <label>Message</label>
                <br></br>
                <textarea className='pawn' placeholder='Your Message'></textarea>
                <br></br>
                <button className='queen' type='submit'>Submit</button>
            </form>
        </section>
    )
};
export default ContactMe ;