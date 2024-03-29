import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import "./nav.css"

// import logo from '../../assets/images/logo.jpg';

const Navbar = () => {
    const sections = ['Home', 'About us', 'Services', 'Contact us'];
    const [activeLink, setActiveLink] = useState(sections[0]);
    const [isScrolled, setIsScrolled] = useState(false);

    const handleSetActive = (section) => {
        setActiveLink(section);
        console.log(section);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='outer-div'>
        <nav className={`navbar navbar-expand-lg ${isScrolled ? 'bg-scroll' : 'bg-body-tertiary'}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/"><strong>Kutch<span>Arts</span></strong></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon dark"><i className="fa-solid fa-list-ul" style={{ color: 'white' }}></i></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        {sections.map((section) => (
                            <ScrollLink
                                className='nav-link'
                                to={section}
                                id={activeLink === section ? 'active' : ''}
                                smooth={true}
                                duration={400}
                                onSetActive={() => handleSetActive(section)}
                            >
                            {section}
                            </ScrollLink>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
        </div>
    );
}

export default Navbar;
