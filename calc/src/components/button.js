import React from 'react';

export default function Button (props) {

    return (
        <div id={props.id}>
            <button id={props.id + "button"} className="calculatorButton" value={props.value} onClick={props.callBack}>{props.value}</button>
        </div>
    )
}