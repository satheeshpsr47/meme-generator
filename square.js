import React from "react"

export default function Square(props){
    const ans = {
        backgroundColor : props.on ? "black" : 'transparent'
    }
    return(
        <div className="box" onClick={() => props.toggle(props.id)} style={ans}>
            
        </div>
    )
}