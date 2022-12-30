import "./about.css";
import foto from "../../media/code.jpg";

const About = () => {
    return (
        <div className="about-container">
            <div className="about-desc">
                <h3>Let me tell you something about me!</h3>
                <p>+2 years of experience in the IT sector. Able to contribute in all stages of development such as front-end, back-end, cloud deployment, database and more. Respecting the opinions of others but giving suggestions if I see room for improvement. 
                    Passionate about delivering quality work because I love my profession.</p>
            </div>
            <div className="about-img">
                <img src={foto} alt="about" />
            </div>
        </div>
    )
}

export default About
