import React from "react"
import boxes from "./boxes"
import Square from "./square"
import Window from "./window"

export default function Box(){
    const[square,setSquare] = React.useState(boxes)
    function toggle(id){
        setSquare((prev) => {
            return prev.map((sq) => {
                return sq.id === id ? {...sq,on : !sq.on} : sq
            })
        })
    }
    // const[windowWidth,setWindowWidth] = React.useState(window.innerWidth)
    const[data,setData] = React.useState(true)

    // React.useEffect(() => {
    //     window.addEventListener('resize',function(){
    //         setWindowWidth(window.innerWidth)
    //     })
    // },[])

    const sample = square.map((box) => (
        <Square key={box.id}  on = {box.on} toggle = {toggle} id = {box.id}/>
    ))
    function clicked(){
        setData((prev) => !prev)
    }
    return (
        <div>
            {sample}
            <button onClick={clicked}>click here to Change</button>
            {data && <Window />}
        </div>      
    )
}