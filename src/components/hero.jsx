import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
    return (<section className="hero">
        <div className="overlay">
            <div className="hero-text">
                <h1>Learning Center for Kids</h1>
                <p>Another free template by Colorlib. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                </p>
                <div></div><button>Explore Now</button>
            </div>

            <div className="play-btn">
                <button><FontAwesomeIcon icon={faPlay} /></button>
            </div>
            
        </div>
    </section>


    )
};

export default Hero