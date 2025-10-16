import React from "react";
import cookieImage from '../assets/cookie.png'

export default function ClickerGame(){
    let [count, setCount] = React.useState(0);
    let [multiplier, SetMultiplier] = React.useState(1);

    function increaseCount(){
        setCount((count) => count + multiplier)
    }

    function increaseMultiplier(){
        SetMultiplier((multiplier) => multiplier + 1)
    }
    return(
        <div className="cookieHolder">
            <button id = "clickerButton" class = "playButton" onClick={increaseCount}>
            <img src = {cookieImage}/>
            </button>
            <p>Total Cookies: {count}</p>
            <button id = "multiplierButton" class = "playButton" onClick={increaseMultiplier}>
            <p>multiplier button: {multiplier}</p>
            </button>
        </div>
    )
}