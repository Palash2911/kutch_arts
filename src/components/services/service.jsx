import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './service.css';
import serviceData from '../../assets/data/serviceData';
import { AiFillCloseCircle } from "react-icons/ai";


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

    const [detail, setDetail] = useState([]);
    const [close, setClose] = useState(false);
    const [isBlurred, setIsBlurred] = useState(false);
    const detailPage = (Products) => {
        setDetail([{ ...Products }])
        setClose(true)
        setIsBlurred(true);
    }

    const handleClose = () => {
        setClose(false);
        setIsBlurred(false); 
      };

    return (
        <>
        {close ? (
                <div className='detail_Container'>
                    <div className='detail_Content'>
                        <button className='close' onClick={handleClose}>
                            <AiFillCloseCircle />
                        </button>
                        {detail.map((x) => (
                            <div className='row detail_info' key={x.id}> 
                                <div className='col-lg-12 col-md-12 col-sm-12 img_box '>
                                    <img className='product--image-desc' src={x.img} alt={x.Title} />
                                </div>
                                <div className='col-lg-12 col-md-12 col-sm-12 des-box'>
                                    <h2>{x.Title}</h2>
                                    {x.detail_info}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : null}
        <div className='Product-items' id='Services'>
                <h1>Services</h1>
                <div className={`background ${isBlurred ? 'blur' : ''}`}></div>
                <Carousel  responsive={responsive} arrows={false} autoPlay={true} infinite={true} showDots={true}>
                    {serviceData.map((currElm) => (
                        <div className='card' key={currElm.id}>
                            <img className='product--image' src={currElm.img} alt='' />
                            <h3>{currElm.Title}</h3>
                            <p>{currElm.Des}</p>
                            <button onClick={() => detailPage(currElm)}>View Our Work</button>  
                        </div>
                    ))}
                </Carousel>
        </div>
        </>
    );
};

export default Services;
