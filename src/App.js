import React from "react";
import Die from "./components/Die";

export default function App() {
    const [dice, setDice] = React.useState(allNewDice())

    function allNewDice() {
        const newDice = []
        for (let i = 0; i < 10; i++) {
            newDice.push({value: Math.floor(Math.random() * 6) + 1, isHeld: false, id: i + 1})
        }
        return newDice
    }

    function rollDice() {
        setDice(oldDice => oldDice.map(die => die.isHeld ? die : {...die, value: Math.floor(Math.random() * 6) + 1}));
        console.log(dice)
    }

    function holdDice(id) {
        setDice(oldDice => oldDice.map(die => die.id === id ? {...die, isHeld: !die.isHeld} : die))
    }

    const diceElements = dice.map((die, index) => <Die key={index} value={die.value} isHeld={die.isHeld} holdDice={() => holdDice(die.id)}/>)

    return(
        <main>
            <div className="dice-container">
                {diceElements}
            </div>
            <button className={"roll-dice"} onClick={rollDice}>Roll </button>
        </main>
    )
}