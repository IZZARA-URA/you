import React from "react";
import './About.css'
import ME from '../../assests/me.JPG'

import {BiImages} from 'react-icons/bi'
import {FaLanguage} from 'react-icons/fa'
import {BiDevices} from 'react-icons/bi'

const About = () => {
    return (
        <section id="about">
            <div className="get_to_know">
                <h5>Get to Know</h5>
                <h2>About Me</h2>
            </div>
           
            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt=""/>
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <BiImages className='about__icon'/>
                            <h3>Image Processing & Computer Vision</h3>
                            <small>3 Projects Complete</small>
                        </article>

                        <article className="about__card">
                            <FaLanguage className='about__icon'/>
                            <h3>Natural Language Processing & Auto Speech Recognition</h3>
                            <small>2 Projects Complete</small>
                            <br></br>
                            <small>1 Projects In Progress</small>
                        </article>

                        <article className="about__card">
                            <BiDevices className='about__icon'/>
                            <h3>DEV</h3>
                            <small>4 Projects Complete</small>
                        </article>
                    </div>

                    <p>
                        Inspiration in my technology field is programming, it's how to change the world to the future, and everyone can't stop the opotunities the people potential
                        Future doesn't prepared from who but future will made by someone who prepared it, or ready to go!
                    </p>

                    <a href='#' className="btn btn-primary">Let's Talk</a>


                </div>
            </div>
        </section>
    )
}

export default About