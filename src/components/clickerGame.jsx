import React from "react";
import cookieImage from '../assets/cookie.png'

export default function ClickerGame(){
    let [count, setCount] = React.useState(0);
    let [multiplier, SetMultiplier] = React.useState(1);
    let [cost, SetCost] = React.useState(15);

    function increaseCount(){
        setCount((count) => count + multiplier)
    }

    function increaseMultiplier(){
        if(count > cost){
            SetMultiplier((multiplier) => multiplier + 1)
            increaseCost()
        }
    }

    function increaseCost(){
        SetCost((cost => Math.floor(cost * (multiplier * 1.05 * 1.05))))
    }

    return(
        <div className="cookieHolder">
            <button id = "clickerButton" class = "playButton" onClick={increaseCount}>
            <img src = {cookieImage}/>
            </button>
            <p>Total Cookies: {count}</p>
            <button id = "multiplierButton" class = "playButton" onClick={increaseMultiplier}>
            <p>Cost to upgrade: {cost}</p>
            </button>
        </div>
    )
}