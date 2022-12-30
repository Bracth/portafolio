import "./slider.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "./slider.css";
import yelpcampImg from "../../media/yelpcamp.png";
import moviesImg from "../../media/movies.png";
import todoImg from "../../media/todo.png";
import portafolioImg from "../../media/portafolio.png";
import tipcalculatorImg from "../../media/tipcalculator.png";
import carscardImg from "../../media/carscard.png";
import netfloxImg from "../../media/netflox.png"

const Slider = () => {

const HandleClick = () => {
    console.log("hello");
}

    return (
        <div className="carousel-container">
            <div className="carousel-title">
                <h2>My Projects</h2>
            </div> 
                <Carousel showThumbs={false}  infiniteLoop={true} showStatus={false}>

                <div className="slide-container"> 
                    <img  src={netfloxImg} alt="Project"/>
                    <p  className="legend">
                    <a href="https://netflox-delta.vercel.app/" rel="noreferrer" target="_blank"> To the Project </a>
                    <a href="https://github.com/Bracth/netflox" rel="noreferrer" target="_blank">To GitHub</a>
                    </p>
                </div>

                <div className="slide-container"> 
                    <img  src={yelpcampImg} alt="Project"/>
                    <p  className="legend">
                    <a href="https://y-qk13.onrender.com/" rel="noreferrer" target="_blank"> To the Project </a>
                    <a href="https://github.com/Bracth/yelpcamp" rel="noreferrer" target="_blank">To GitHub</a>
                    </p>
                </div>

                 <div className="slide-container"> 
                    <img  src={moviesImg} alt="Project"/>
                    <p  className="legend">
                    <a href="https://bracth.github.io/movies/" rel="noreferrer" target="_blank">To the Project </a>
                    <a href="https://github.com/Bracth/movies" rel="noreferrer" target="_blank">To GitHub</a>
                    </p>
                </div>

                    <div className="slide-container"> 
                    <img  src={todoImg} alt="Project"/>
                    <p  className="legend">
                    <a href="https://bracth.github.io/todo/" rel="noreferrer" target="_blank">To the Project </a>
                    <a href="https://github.com/Bracth/todo/tree/master" rel="noreferrer" target="_blank">To GitHub</a>
                    </p>
                </div>

                    <div className="slide-container"> 
                    <img  src={portafolioImg} alt="Project"/>
                    <p  className="legend">
                    <a href="https://bracth.github.io/portafolioproject/" rel="noreferrer" target="_blank">To the Project </a>
                    <a href="https://github.com/Bracth/portafolioproject" rel="noreferrer" target="_blank">To GitHub</a>
                    </p>
                </div>

                    <div className="slide-container"> 
                    <img  src={tipcalculatorImg} alt="Project"/>
                    <p  className="legend">
                    <a href="https://bracth.github.io/tipcalculator/" rel="noreferrer" target="_blank">To the Project </a>
                    <a href="https://github.com/Bracth/tipcalculator" rel="noreferrer" target="_blank">To GitHub</a>
                    </p>
                </div>

                    <div className="slide-container"> 
                    <img  src={carscardImg} alt="Project"/>
                    <p  className="legend">
                    <a href="https://bracth.github.io/carscards/" rel="noreferrer" target="_blank">To the Project </a>
                    <a href="https://github.com/Bracth/carscards" rel="noreferrer" target="_blank">To GitHub</a>
                    </p>
                </div>

                </Carousel>

        </div>

        
    )
}

export default Slider
