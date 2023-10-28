import React, { useState } from 'react';
import image from '../../assets/images/title-img.jpg';
import portfolioData from '../../assets/data/portfolioData';
import blankImg from '../../assets/images/blank1.png';
import { AiFillCloseCircle } from "react-icons/ai";

import './portfolio.css';



const Portfolio = () => {
    const [team, setteam] = useState([]);
    const [close, setClose] = useState(false);
    const [isBlurred, setIsBlurred] = useState(false);
    const teamPage = (Teams) => {
        setteam([{ ...Teams }])
        setClose(true)
        setIsBlurred(true);
    }

    const handleClose = () => {
        setClose(false);
        setIsBlurred(false); 
      };


    return (
        <>  
            {
    close ?
        <div className='team_Container'>
            <div className='team_Content'>
                <button className='close'  onClick={handleClose}><AiFillCloseCircle /></button>
                {
                    team.map((x) => (
                        <div className='row team_info' key={x.id}>
                            <div className='col-lg-12 col-md-12 col-sm-12 des-box'>
                                <h2>{x.Title}</h2>
                                {x.team_info}
                            </div>
                        </div>
                    ))}
            </div>
        </div> : null
}

            <section id="Teams">
                <h1 className='feature-head'>Crafting Visions -> Building Dreams -> Delivering Excellence</h1>
                <div className={`background ${isBlurred ? 'blur' : ''}`}>
                <div className="row container-fluid">
                {portfolioData.map((element,index) => (
                    <div className="col-lg-3 col-md-3 col-sm-6 features"key={element.id}>
                        <div className="icon_div">
                            <img onClick={() => teamPage(element)} src={element.img} alt="" />
                        </div>
                        <h3>{element.Title}</h3>
                    </div>
                    ))}

                </div>
                </div>
            </section>
        </>
    )
}

export default Portfolio
