import cookieImage from "../assests/cookie.png";

export default function CookieButton({ onClick }){
    return(
        <div id="cookie">
            <button id="clickerButton" className="playButton" onClick={onClick}>
                <img src={cookieImage} alt="cookie" />
            </button>
        </div>
    )
}