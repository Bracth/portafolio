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
                    Desing By Bryan Florencio
                </div>
                <div className="sns-links">
                    <a href="https://www.linkedin.com/" rel="noreferrer" target="_blank">
                        <i className="fab fa-linkedin linkedin"></i>
                    </a>
                    <a href="https://twitter.com/" rel="noreferrer" target="_blank">
                        <i className="fab fa-twitter twitter"></i>
                    </a>
                    <a href="https://www.facebook.com/" rel="noreferrer" target="_blank">
                        <i className="fab fa-facebook facebook"></i>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
