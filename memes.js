import React from 'react'
import memesdata from './memesdata'
import Header from './header'

export default function Memes(){
    const meme = {
        topText: " ",
        bottomText: " ",
        randomImage: "https://i.imgflip.com/1g8my4.jpg"
    }
    const[memeImage,setMemeImage] = React.useState(meme);

    function handleChange(event){
        event.preventDefault();
        const{name,value} = event.target
        setMemeImage((prev) => ({
            ...prev,
            [name] : value
        }))
    }
    
    const[allMemeImages, setAllMemeImages] = React.useState([])
    function getrandomimage(){
            // const array = allMemeImages.data.memes;
            const getArrayLength = allMemeImages.length;
            let randomNumber = Math.floor(Math.random()*getArrayLength);
            let randomUrl = allMemeImages[randomNumber].url;
            setMemeImage((prev) => ({
                ...prev,
                randomImage : randomUrl    
            }))
    }
    // const[allMemes,setallMemes] = React.useState([])
    React.useEffect(() => {
        
        fetch("https://api.imgflip.com/get_memes")
        .then((js) => js.json())
        .then(data => setAllMemeImages(data.data.memes))
        // window.addEventListener('resize',function(){console.log('resized')})
    },[])
    // console.log(allMemes)
    return(
        
        <main>
            <Header />
            <div className="meme-header">
                <div className='meme-form'>
                    <input className='form-input' placeholder='top-text' type='text' name='topText' onChange={handleChange}/>
                    <input className='form-input' placeholder='bottom-text' type='text' name='bottomText' onChange={handleChange}/>
                    <button className='form-button' onClick={getrandomimage}>get new image</button>
                </div>
                <div className='image-container'>
                    <img src={memeImage.randomImage} alt="" className='meme-image'/>
                    <h2 className='meme--text top'>{memeImage.topText}</h2>
                    <h2 className='meme--text bottom'>{memeImage.bottomText}</ h2 >
                </div>
            </div>
        </main>
    )
}