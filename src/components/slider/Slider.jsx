import "./slider.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "./slider.css";

const Slider = () => {
    return (
        <div className="carousel-container">
            <div className="carousel-title">
                <h2>My Projects</h2>
            </div> 
                <Carousel  infiniteLoop={true}>

                <div className="slide-container">
                    <img src="https://cdn.pixabay.com/photo/2016/12/19/08/39/mobile-phone-1917737_960_720.jpg" alt="Project"/>
                    <p className="legend">Legend 1</p>
                </div>
                <div className="slide-container">
                    <img src="https://cdn.pixabay.com/photo/2017/10/31/19/05/web-design-2906159_960_720.jpg" alt="Project"/>
                    <p className="legend">Legend 2</p>
                </div>
                <div className="slide-container">
                    <img src="https://cdn.pixabay.com/photo/2015/02/05/08/06/macbook-624707_960_720.jpg" alt="Project"/>
                    <p className="legend">Legend 3</p>
                </div>


                </Carousel>

        </div>

        
    )
}

export default Slider
