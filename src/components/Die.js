import React from "react";
import './Die.css'

export default function Die(props) {
    let dots = [];
    const val = props.value
    for (let i = 1; i <= val; i++) {
        dots.push(<div key={props.id * 10 + i} className={`dot dot-${val % 2}${i}`}></div>)
    }

    return (
        <div className="die-face" style={props.isHeld ? {backgroundColor:"#59E391"} : {backgroundColor: "#fff"}} onClick={props.holdDice}>
            {dots}
        </div>
    )
}