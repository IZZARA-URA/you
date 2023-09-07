import React from "react";
import './Header.css'
import ME from '../../assests/me.JPG'
import HeaderSocials from "./HeaderSocials";


import CTA from './CTA'

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <div className="hello_i_am">
                    <h5>Hello I'm</h5>
                    <h1 className="my_name"> Pongchanok</h1>
                    <h5 className="text-light"> Machine Learning Engineer</h5>
                </div>
                <CTA />
                <HeaderSocials />
                <div className="me">
                    <img src={ME} alt="me"/>
                </div>
                <a href="#contanct" className="scroll_down"></a>
            </div>

        </header>
    )
}

export default Header