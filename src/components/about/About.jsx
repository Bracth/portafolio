import "./about.css";
import foto from "../../media/code.jpg";

const About = () => {
    return (
        <div className="about-container">
            <div className="about-desc">
                <h3>Let me tell you something about me!</h3>
                <p>I am a very passionate person, I love to challenge myself to improve in every aspect of my life.
                 I learned how to code by myself and I really love it. Now, I look for a way to show the world my passion and help others.</p>
            </div>
            <div className="about-img">
                <img src={foto} alt="about" />
            </div>
        </div>
    )
}

export default About
