import React from 'react'
import {Carousel} from '3d-react-carousal';
import paramedicaux from '../../paramedicaux.png'
import medical from '../../medical.png'
import cosmétique from '../../cosmétique.png'
import bébémaman from '../../bébé-maman.png'
import bienetre from '../../bien-etre.png'
import visage from '../../visage.png'

const Caroussel = (props) => {
    let slides = [
        <img  className="Carousel-image" src={paramedicaux} alt="1" />,
        <img  className="Carousel-image" src={medical} alt="2" />  ,
        <img  className="Carousel-image" src={visage} alt="3" />  ,
        <img  className="Carousel-image" src={cosmétique} alt="4" />  ,
        <img  className="Carousel-image" src={bébémaman} alt="5" />  ,
        <img  className="Carousel-image" src={bienetre} alt="6" />   ];
    return ( 
    <div className="Carousel-3d">
        <Carousel slides={slides} autoplay={true} interval={5000}/>
    </div> );
}
 
export default Caroussel;