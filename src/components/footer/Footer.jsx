import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-info">
                <h1>Bryan Florencio</h1>
                <p>Based in your city</p>
            </div>
            <div className="footer-contact">
                <h3>Contact me</h3>
                <p>And let´s get down work</p>
            </div>
            <div className="footer-sns">
                <div className="desing-by">
                    Desing By <span>Bryan Florencio</span> 
                </div>
                <div className="sns-links">
                    <a href="https://www.linkedin.com/in/bryan-florencio-68141a186/" rel="noreferrer" target="_blank">
                        <i className="fab fa-linkedin linkedin"></i>
                    </a>
                    <a href="https://github.com/Bracth" rel="noreferrer" target="_blank">
                        <i className="fab fa-github-square github"></i>
                    </a>
                    <a href="https://wa.me/34671187488" rel="noreferrer" target="_blank">
                        <i className="fab fa-whatsapp whatsapp"></i>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
