import "./MovieScreen.css";
import PlayBlack from "./play-icon-black.png";
import PlayWhite from "./play-icon-white.png";
import { useLocation } from "react-router-dom";

const MovieScreen = () => {
    const location = useLocation();
    const { results } = location.state;
    console.log(results);
    return ( 
        <div className="moviescreen-body" style={{backgroundImage: `url(${results.backgroundImg})`}}>
            <div className="moviepage-content">
                <div className="movie-buttons">
                    <button className="button-play"><img className="image-play" src={PlayBlack} alt="Play"/>PLAY</button>
                    <button className="button-trailer"><img className="image-trailer" src={PlayWhite} alt="TRAILER"/>TRAILER</button>
                    <button className="button-plus">+</button>
                </div>
                <div className="movie-subtitle">
                    <p>{results.subTitle}</p>
                </div>
                <div className="movie-description">
                    <p>{results.description}</p>
                </div>
            </div>
        </div>
     );
}
 
export default MovieScreen;