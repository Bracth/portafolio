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
                    <img  src={yelpcampImg} alt="Project"/>
                    <p  className="legend">
                    <a href="https://guarded-stream-53223.herokuapp.com/">To the Project </a>
                    <a href="https://github.com/Bracth/yelpcamp">To GitHub</a>
                    </p>
                </div>

                 <div className="slide-container"> 
                    <img  src={moviesImg} alt="Project"/>
                    <p  className="legend">
                    <a href="https://bracth.github.io/movies/">To the Project </a>
                    <a href="https://github.com/Bracth/movies">To GitHub</a>
                    </p>
                </div>

                    <div className="slide-container"> 
                    <img  src={todoImg} alt="Project"/>
                    <p  className="legend">
                    <a href="https://bracth.github.io/todo/">To the Project </a>
                    <a href="https://github.com/Bracth/todo/tree/master">To GitHub</a>
                    </p>
                </div>

                    <div className="slide-container"> 
                    <img  src={portafolioImg} alt="Project"/>
                    <p  className="legend">
                    <a href="https://bracth.github.io/portafolioproject/">To the Project </a>
                    <a href="https://github.com/Bracth/portafolioproject">To GitHub</a>
                    </p>
                </div>

                    <div className="slide-container"> 
                    <img  src={tipcalculatorImg} alt="Project"/>
                    <p  className="legend">
                    <a href="https://bracth.github.io/tipcalculator/">To the Project </a>
                    <a href="https://github.com/Bracth/tipcalculator">To GitHub</a>
                    </p>
                </div>

                    <div className="slide-container"> 
                    <img  src={carscardImg} alt="Project"/>
                    <p  className="legend">
                    <a href="https://bracth.github.io/carscards/">To the Project </a>
                    <a href="https://github.com/Bracth/carscards">To GitHub</a>
                    </p>
                </div>

                </Carousel>

        </div>

        
    )
}

export default Slider
