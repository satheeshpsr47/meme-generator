import React from "react";

export default function Newimage(){

    const[newimage,setnewimage] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    })
    
    let random = newimage.isFavorite ? 'img/Troll Face.png' : 'img/memeimg.png'
    function clicked(){
        setnewimage(
            prev => ({
                ...prev,
                isFavorite : !newimage.isFavorite
            })
        )
    }
    return (
        <div>
            <button onClick={clicked} className="image-button">theiyutha</button>
            <img src={random} className="image-box-1" width={100} height = {100}></img>
        </div>
    )
}