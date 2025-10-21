import React from "react";
import CookieImage from '../assets/cookie.png'
import CookieButton from "./CookieButton";
import CookieCounter from "./CookieCounter";
import UpgradeButton from "./UpgradeButton";

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
            <CookieButton onClick={increaseCount} />
            <CookieCounter count = {increaseMultiplier} />
            <UpgradeButton  onClick = {increaseCost} />
        </div>
    )
}