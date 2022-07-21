import React from "react";
import "./Timer.css"

export default function Timer(props) {

    const formattedTime = `${Math.floor(props.time / 1000)}.${(props.time % 1000).toString().padStart(3, "0")}`


    return(
        <div className="timer">{formattedTime}</div>
    )
}