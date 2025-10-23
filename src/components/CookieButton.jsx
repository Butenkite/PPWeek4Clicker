import CookieImage from "../assets/cookie.png";

export default function CookieButton(){
    return(
        <div id="cookie">
            <button id="clickerButton" className="playButton">
                <img src={CookieImage} alt="cookie" className="cookie-spin"/>
            </button>
        </div>
    )
}