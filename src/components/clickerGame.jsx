import React from "react";

export default function ClickerGame(){
    let [count, setCount] = React.useState(0);
    return(
        <div className="cookieHolder">
            <button onClick={() => setCount((count) => count + 1)}>
            Total Cookies: {count}
            </button>
        </div>
    )
}