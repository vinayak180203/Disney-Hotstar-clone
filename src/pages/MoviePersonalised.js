import Navbar from '../Navbar';
import MovieScreen from '../MovieScreen';
import { useLocation } from "react-router-dom";

const MoviePersonalised = () => {
    const location = useLocation();
    const { results } = location.state;
    console.log(results);
    return ( 
        <div className="App">
            <div className="App">
            <Navbar />
            <div className="content">
            <MovieScreen />
            </div>
            </div>
        </div>
     );
}
 
export default MoviePersonalised;    