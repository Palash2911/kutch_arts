import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import kerafly1 from '../../assets/images/kerafly1.jpeg'
import emocare1 from '../../assets/images/emocare1.jpeg'
import minocare1 from '../../assets/images/minocare1.jpeg'
import rediban1 from '../../assets/images/rediban1.jpeg'
import renewme from '../../assets/images/renewme.png'
import ktablet1 from '../../assets/images/kt1.jpeg'
import vclink from '../../assets/images/VC_link.png'
import './about.css';

const About = () => {
    return (
        <section id='About us'>
            <div className='row about-sec container-fluid'>
                <div className="col-lg-6 col-md-12">
                    <div className="about-details">
                        <h1>About us</h1>
                        <p>Welcome to Kutch Arts, where creativity meets innovation. We're a team of problem-solvers, dream builders, and excellence enthusiasts. Our mission is clear: to craft your vision into reality. With a passion for what we do, we bring your ideas to life, project by project. At Kutch Arts, we're not just partners; we're your trusted collaborators on the path to success.</p>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12">
                    <Carousel showArrows={true} showThumbs={false} showStatus={false} infiniteLoop={true} autoPlay={true} interval={3000}>
                        <div className="aboutImg">
                            <img src={kerafly1} alt="Slide 1" />
                        </div>
                        <div className="aboutImg">
                            <img src={emocare1} alt="Slide 2" />
                        </div>
                        <div className="aboutImg">
                            <img src={minocare1} alt="Slide 3" />
                        </div>
                        <div className="aboutImg">
                            <img src={rediban1} alt="Slide 4" />
                        </div>
                        <div className="aboutImg">
                            <img src={renewme} alt="Slide 5" />
                        </div>
                        <div className="aboutImg">
                            <img src={ktablet1} alt="Slide 6" />
                        </div>
                        <div className="aboutImg">
                            <img src={vclink} alt="Slide 7" />
                        </div>
                    </Carousel>

                </div>
            </div>
        </section>
    );
}

export default About;
