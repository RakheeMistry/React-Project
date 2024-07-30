import React from 'react';
import './contact.css';

function Contact() {
    return (
        <div className="contactBox">
            <h2>CONTACT US</h2>
            <p>LET'S CONNECT; WE'RE HERE TO HELP, AND WE'D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT, YOU CAN REACH OUT TO US THROUGH THE CONTACT FROM THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA.</p>
            <div className='contactDetail'>
                {/* <div>
            <input type="button" value="via support chat"/>
            <input type="button" value="via call"/>
            <input type="button" value="via email form"/>
            </div> */}
                <form>
                    <div className="contactForm">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" />
                    </div>
                    <div className="contactForm">
                        <label htmlFor="email">E-Mail</label>
                        <input type="email" name="email" />
                    </div>
                    <div className="contactForm">
                        <label htmlFor="text">Text</label>
                        <textarea name="text"></textarea>
                    </div>
                    <input type="button" value="SUBMIT" />
                </form>
            </div>
        </div>
    )
}

export default Contact;
