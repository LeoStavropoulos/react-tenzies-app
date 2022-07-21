import React from "react";
import Die from "./components/Die";
import Confetti from "react-confetti";

export default function App() {
    const [dice, setDice] = React.useState(allNewDice())
    const [tenzies, setTenzies] = React.useState(false)
    const [count, setCount] = React.useState(0)


    React.useEffect(()=>{
        if (!dice[0].isHeld) return
        for (let i = 1; i < 10; i++) {
            if (!dice[i].isHeld || dice[i].value !== dice[i - 1].value) return
        }
        setTenzies(true)
    }, [dice])

    function allNewDice() {
        const newDice = []
        for (let i = 0; i < 10; i++) {
            newDice.push({value: Math.floor(Math.random() * 6) + 1, isHeld: false, id: i + 1})
        }
        return newDice
    }

    function rollDice() {
        if (tenzies) {
            setDice(allNewDice)
            setTenzies(false)
            setCount(0)
            return
        }
        setDice(oldDice => oldDice.map(die => die.isHeld ? die : {...die, value: Math.floor(Math.random() * 6) + 1}));
        setCount(oldCount => oldCount + 1)
    }

    function holdDice(id) {
        setDice(oldDice => oldDice.map(die => die.id === id ? {...die, isHeld: !die.isHeld} : die))
    }

    const diceElements = dice.map((die, index) => <Die key={index} id={die.id} value={die.value} isHeld={die.isHeld} holdDice={() => holdDice(die.id)}/>)

    return(
        <main>
            {tenzies && <Confetti />}
            <div className="header">
                <h1 className={"title"}>Tenzies</h1>
                <h3 className="count">{count}</h3>
            </div>
            <p className={"instructions"}>Rolls until all dice are the same. Click each die to freeze
            it at its current value between rolls.</p>
            <div className="dice-container">
                {diceElements}
            </div>
            <button className={"roll-dice"} onClick={rollDice}>{tenzies ? "New Game" : "Roll"}</button>
        </main>
    )
}