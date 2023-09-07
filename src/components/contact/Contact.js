import React from "react";
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {AiOutlinePhone} from 'react-icons/ai'

const Contact = () => {
    return (
        <section id="contact">
            <div className="contact_me">
                <h5>Get In Touch</h5>
                <h2>Contact Me</h2>
            </div>
            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className="contact__option-icon"/>
                        <h4> Email <h4/>
                        <h5>ptolemaios.ong@gmail.com</h5>
                        <a href="mailto:ptolemaios.ong@gmail.com" target="_blank">Send a message</a>
                        </h4>
                    </article>
                    <article className="contact__option">
                        <RiMessengerLine className="contact__option-icon"/>
                        <h4> Massenger <h4/>
                        <h5>Raintree Down</h5>
                        <a href="https://m.me/profile.php?id=100009564345209" target="_blank">Raintree Down</a>
                        </h4>
                    </article>
                    <article className="contact__option" target="_blank">
                        <AiOutlinePhone className="contact__option-icon"/>
                        <h4> Phone <h4/>
                        <h5>+66-650-8096757</h5>
                        <a href="tel:+666508096757">Tel </a>
                        </h4>
                    </article>
                </div>
                {/* END OF CONTACT OPTIONS */}
                <form action="">
                    <input type="text" name='name' placeholder="Your Full Name" required />
                    <input type="email" name='email' placeholder="Your Email" required />
                    <textarea type="message" row='7' placeholder="Your Message" required ></textarea>
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form>

            </div>
        </section>
    )
}

export default Contact