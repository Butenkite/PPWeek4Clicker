import CookieImage from "../assets/cookie.png";

export default function CookieButton({ onClick }){
    return(
        <div id="cookie">
            <button id="clickerButton" className="playButton" onClick={onClick}>
                <img src={CookieImage} alt="cookie" />
            </button>
        </div>
    )
}