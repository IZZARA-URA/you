import React from "react";
import './Footer.css'
import {FaFacebook} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
// import {IoLogoTwitter} from 'react-icons/io'
import {BsLinkedin} from 'react-icons/bs'
import {AiFillGithub} from 'react-icons/ai'


const Footer = () => {
    return (
        <footer>
            <a href="#" className="footer__logo">YOUSAN_NIM</a>

            <ul className="permalinks">
                <ul><a href="#">Home</a></ul>
                <ul><a href="#about">About</a></ul>
                <ul><a href="#experience">Experience</a></ul>
                <ul><a href="#services">Services</a></ul>
                <ul><a href="#portfolio">Portfolio</a></ul>
                <ul><a href="#contact">Contact</a></ul>
            </ul>

            <div className="footer__socials">
                <a href="https://facebook.com"><FaFacebook /></a>
                <a href="https://instagtam.com"><FiInstagram /></a>
                <a href="https://linkin.com"><BsLinkedin /></a>
                <a href="https://linkin.com"><AiFillGithub /></a>
            </div>

            <div className="footer__copyright">
                <small>&copy; yousan nim. All rights reswerved</small>
            </div>
        </footer>
    )
}

export default Footer