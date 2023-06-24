import React from "react";
import { flushSync } from "react-dom";
// import Meme from "./meme";
import memesdata from "./memesdata";

export default function GetMemeImage(){
    const[meme,setMeme] = React.useState(
        {
            toptext: "",
            bottomtext : "",
            randomImage : "https://www.google.com/imgres?imgurl=http%3A%2F%2Fm.gettywallpapers.com%2Fwp-content%2Fuploads%2F2020%2F01%2FWallpaper-Naruto-2.jpg&tbnid=0m7yyNTqQDi1dM&vet=12ahUKEwjTsLHTyOr9AhXQD7cAHdC9DU4QMygKegUIARD0AQ..i&imgrefurl=http%3A%2F%2Fm.gettywallpapers.com%2Fnaruto-wallpaper%2F&docid=JgGwDm3Ajf13MM&w=960&h=1707&q=naruto&ved=2ahUKEwjTsLHTyOr9AhXQD7cAHdC9DU4QMygKegUIARD0AQ"
        }
    )
    const[allmemesimages,setallmemesimages] = React.useState(memesdata)

    function NewImage(){
        const imageArray = allmemesimages.data.memes
        const randomNumber = Math.floor(Math.random() * imageArray.length)
        const url = imageArray[randomNumber].url
        setMeme(
            previmage => ({
                ...previmage,
                randomImage: url
            })
        )
    }
    function GetMemeImage(){
        const imageArray = allmemesimages.data.memes
        const randomNumber = Math.floor(Math.random() * imageArray.length)
        const url = imageArray[randomNumber].url
        setMeme(
            previmage => ({
                ...previmage,
                randomImage: url
            })
        )
    }
    return (
        <div className="image">
            <div className="image-box">
                <button onClick={NewImage} className="image-button"> click here</button>
                <img src={meme.randomImage} className="image-box-1" width={400} height = {400}></img>
                <img src={meme.randomImage} className="image-box-1" width={400} height = {400}/>
                
            </div>
            
            <button onClick={GetMemeImage}  className="image-button">Click me</button>
        </div>
    )
}

    

    
