import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSchool } from "@fortawesome/free-solid-svg-icons/faSchool";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faMortarPestle } from "@fortawesome/free-solid-svg-icons/faMortarPestle";

const Features = () => {
    return(
    
    <div className="features">
        <div className="f1">
            <span className="feature-icon"><FontAwesomeIcon icon={faSchool} color="white"/></span>
        <h1>Learn</h1>
        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        </div>

        <div className="f2">
       <span className="feature-icon"> <FontAwesomeIcon icon={faPlay} color="white"/></span>
        <h1>Play</h1>
        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        </div>

        <div className="f3">
        <span className="feature-icon"> <FontAwesomeIcon icon={faMortarPestle}color="white" /></span>
        <h1>Meal</h1>
        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        </div>



    </div>)
};

export default Features;