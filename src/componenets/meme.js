import React from "react";
import memesdata from "./memesdata";

export default function Meme(){
    function getImage(){
        let memeArray = memesdata.data.memes
        let randomIndex = Math.floor(Math.random() * memeArray.length)
        let url = memeArray[randomIndex].url 
        
    }
    return (
        <main>
            <div className="meme-form">
                <input className="form-input" placeholder="top-text" type={"text"}></input>
                <input className="form-input" placeholder="bottom-text" type={"text"}></input>
                <button className="form-button" onClick={getImage}>Get a new image 👾</button>
            </div>
        </main>
    )
}