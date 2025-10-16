import React from "react";
import cookieImage from '../assets/cookie.png'

export default function ClickerGame(){
    let [count, setCount] = React.useState(0);
    let [multiplier, SetMultiplier] = React.useState(1);
    return(
        <div className="cookieHolder">
            <button onClick={() => setCount((count) => count + 1)}>
            <img src = {cookieImage}/>
            </button>
            <p>Total Cookies: {count}</p>
            <button onClick={() => SetMultiplier((multiplier) => multiplier + 1)}>
            <p>multiplier button: {multiplier}</p>
            </button>
        </div>
    )
}