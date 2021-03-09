import React, {useState} from 'react';
import Button from '../components/button'
import {create, all} from 'mathjs'

const Math = create(all);

export default function Calculator () {
    const [displayNum, setDisplayNum] = useState("");
    const [storedNum, setStoredNum] = useState(null);
    const [calculation, setCalculation] = useState(null);

    function clearDisplay() {
        return setDisplayNum("")
    }

    function evaluate(input) {
        let expression = input
        return setDisplayNum(Math.evaluate(expression).toString());
    }

    function handleClick(e) {
        if (e.target.value === '=') {
            return evaluate(displayNum)
        } 
        if (e.target.value === "clear") {
            return clearDisplay()
        }
        else {
            return setDisplayNum(displayNum.concat(e.target.value))
        }
    }


    const buttons = ['clear', 'delete', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '=']
    const buttonDisplay = []

    buttons.forEach(el => {
        if (el === '0') {
            buttonDisplay.push(<Button id='zero' key={el} value={el} callBack={handleClick} />)
        } else if (el === '=') {
            buttonDisplay.push(<Button id='equal' key={el} value={el} callBack={handleClick} />)
        } else {
            buttonDisplay.push(<Button id={el} key={el} value={el} callBack={handleClick} />)
        }
    })

    return (
        <div className="calculator">
            <div className="display">
                <h1>{displayNum}</h1>
            </div>
            <div className="buttons">
                {buttonDisplay}
            </div>
        </div>
    )
}