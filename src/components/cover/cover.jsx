import "./cover.css";
import coverVideo from "../../media/video.mp4";

const cover = () => {
    return (
        <div className="cover-container">
            <video className="video" src={coverVideo} autoPlay loop muted></video>
            <h1><span>B</span>ryan <span>F</span>lorencio</h1>
            <p>Full Stack <span>|</span> DevOps</p>
        </div>
    )
}

export default cover
