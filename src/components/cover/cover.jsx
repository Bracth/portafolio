import "./cover.css";
import coverVideo from "../../media/coverVideo.mp4";

const cover = () => {
    return (
        <div className="cover-container">
            <video className="video" src={coverVideo} autoPlay loop muted></video>
            <h1>Bryan Florencio</h1>
            <p>Developer | Front-end</p>
        </div>
    )
}

export default cover
