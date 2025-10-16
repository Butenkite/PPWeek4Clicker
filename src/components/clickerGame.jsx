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
            setCount((count => count - cost))
        }
    }

    function increaseCost(){
        SetCost((cost => Math.floor(cost * (multiplier * 1.05))))
    }

    return(
        <div className="cookieHolder">
            <div id = "cookie">
                <button id = "clickerButton" className = "playButton" onClick={increaseCount}>
                <img src = {cookieImage}/>
                </button>
            </div>
            <p>Total Cookies: {count}</p>
            <button id = "multiplierButton" className = "playButton" onClick={increaseMultiplier}>
            <p>Cost to upgrade: {cost}</p>
            </button>
        </div>
    )
}