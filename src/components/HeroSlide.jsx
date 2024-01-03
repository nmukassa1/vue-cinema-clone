import useData from "../Hooks/useData";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'
import {useState, useEffect, useRef} from 'react'

function HeroSlide() {

    const {filmDb} = useData()
    
    useEffect(() => {
        const slides = document.querySelectorAll('.slide-item');
        const slide = document.querySelector('.slide');
        let slideWidth = slide.clientWidth;
        let slideFinish = slideWidth * slides.length;
        let i = 1;

        // console.log(slideWidth)

        //Realign slide items when the window is resized
        // window.addEventListener('resize', () => {
        //     const windowSize =  document.querySelector('.slide').clientWidth; //Grab the new width of window / slide 
        //     slideWidth = windowSize //Update slideWidth with new value
        //     slideFinish = slideWidth * slides.length //Update slideFinish with new end point
        //     slide.style.transform = `translateX(-${slideWidth * i}px)`; //Update slide position
        //     // clearInterval(start)
        //     // setInterval(newSlide, 6000)
        // })
        

        function newSlide(){
            if(slideWidth * i !== slideFinish){
                    slide.style.transform = `translateX(-${slideWidth * i}px)`;
                i++
            } else{
                    slide.style.transform = `translateX(0px)`
                i = 1
            }
        } 

        setInterval(newSlide, 6000)
    }, [])

    

    return ( 
        <div className="hero-slide">
            <div  className="slide">
                <div className="slide-item">
                    <img src={require('../Assets/locations/Westfield/Westfield-Shepherds-Bush-Hero.webp')} alt="" />
                </div>
                {filmDb && 
                    Object.values(filmDb).map((item, key) => (
                        <div className="slide-item slide-item__movie" key={item.title}>
                            <img src={item.img} alt="" />

                            <div className="control-panel">
                                <button className="control-panel__play-trailer">
                                    <FontAwesomeIcon icon={faPlay} /> 
                                </button>

                                <div className="control-panel__title">
                                    <h1>{item.title}</h1>
                                    <div className="age-classification">
                                        <img src={item.age} alt="" />
                                        <span>Now showing at your local Vue</span>
                                    </div>
                                </div>

                                <Link className="book-now">Book Now</Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default HeroSlide;