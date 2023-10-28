import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './service.css';
import serviceData from '../../assets/data/serviceData';


const Services = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <>
        <div className='Product-items' id='Services'>
                <h1>Services</h1>
                <Carousel  responsive={responsive} arrows={false} autoPlay={true} infinite={true} showDots={true}>
                    {serviceData.map((currElm) => (
                        <div className='card' key={currElm.id}>
                            <img className='product--image' src={currElm.img} alt='' />
                            <h3>{currElm.Title}</h3>
                            <p>{currElm.Des}</p>
                        </div>
                    ))}
                </Carousel>
        </div>
        </>
    );
};

export default Services;
