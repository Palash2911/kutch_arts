import React from 'react'
import './footer.css';

const Footer = () => {
    return (
        <div>
            <>
                <div className='footer' id='Contact us'>
                    <h1>Contact us</h1>
                    <p><strong>Mail</strong> : pharmacarelink@gmail.com</p>
                    <p><strong>Contact no : </strong>+91 77670 43001 / +91 75888 46189</p>
                    <div className="social">
                        <span className="spanspace">
                            <a href="www.twitter.com"><i className="social-icon fa-brands fa-twitter fa-2x"></i></a>
                        </span>

                        <span className="spanspace">
                            <a href="www.facebook.com"><i className="social-icon fa-brands fa-facebook-f fa-2x"></i></a>
                        </span>
                        <span className="spanspace">
                            <a href="www.instagram.com"><i className="social-icon fa-brands fa-instagram fa-2x"></i></a>
                        </span>
                        <span className="spanspace">
                            <a href="www.gmail.com"><i className="social-icon fa-solid fa-envelope fa-2x"></i></a>
                        </span>
                    </div>
                    <p>© Copyright CareLink_2023</p>
                </div>
            </>
        </div >
    )
}

export default Footer
