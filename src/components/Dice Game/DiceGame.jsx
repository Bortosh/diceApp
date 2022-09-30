import React, { useState } from "react";
import ShowImages from "../showImages/ShowImages";

const DiceGame = () => {

    const [numberOfDice, setNumberOfDice] = useState(0)
    const [roll, setRoll] = useState([])
    const [sumOfDice, setSumOfDice] = useState(0)

    const numbers = [1, 2, 3, 4, 5]

    const diceRoll = (number) => {
        let rolls = []
        let sumOfDice = 0
        for(let i = 0; i < number; i++) {
            console.log('Random',Math.ceil(Math.random() * 6))
            rolls[i] = Math.ceil(Math.random() * 6)
            sumOfDice += rolls[i]
        }
        setRoll(rolls)
        setSumOfDice(sumOfDice)
        setNumberOfDice(number)
    }

    // Funcion God para las condiconales a renderizar

    const returnText = (num) => {
        if(num === 1) {
            return `dado`
        }
        return `dados`
    }

    // Resect Boton

    const resetBoton = () => {
        setRoll([])
        setSumOfDice(0)
        setNumberOfDice(0)
    }

    return (
        <div>
            <h1>Dice Roller</h1>
            <div>
                {
                    numberOfDice !== 0 ? <h1>Haz elegido jugar con {numberOfDice} {returnText(numberOfDice)}</h1> : <h1>Con cuantos dados vas a jugar?</h1>
                }
            </div>
            <div>
                {
                    numbers.map(number => {
                        // let text = number === 1 ? 'die' : 'dice'
                        return (
                            <button key={number} onClick={() => diceRoll(number)}>
                                {number} {returnText(number)}
                            </button>
                        )
                    })
                }
            </div>
            <div>
                {
                    roll.map((roll, index) => {
                        return <ShowImages roll={roll} key={index} />
                    })
                }
            </div>
            <div>
                {
                    sumOfDice !== 0 ? <h1>La suma total de todos los dados es de {sumOfDice}</h1> : <h1>Lets Play</h1>
                }
            </div>

                <div>
                    <button onClick={resetBoton}>{roll.length > 0 ? 'Reset' : 'Just Play' }</button>
                </div>

        </div>
    )
}

export default DiceGame;