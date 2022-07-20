import React from "react";
import Die from "./components/Die";

export default function App() {
    const [dice, setDice] = React.useState(allNewDice())

    function allNewDice() {
        const newDice = []
        for (let i = 0; i < 10; i++) {
            newDice.push({value: Math.floor(Math.random() * 6) + 1, isHeld: false})
        }
        return newDice
    }

    function handleClick() {
        setDice(allNewDice());
    }

    const diceElements = dice.map((die, index) => <Die key={index} value={die.value}/>)

    return(
        <main>
            <div className="dice-container">
                {diceElements}
            </div>
            <button className={"roll-dice"} onClick={handleClick}>Roll </button>
        </main>
    )
}