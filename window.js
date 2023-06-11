import React from "react";

export default function Window(){
    const[width,setWidth] = React.useState(window.innerWidth)
    
    React.useEffect(() => {       
        function windowWidth(){
            console.log("settting upload...")
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize',windowWidth)   

        return function(){
            console.log('completed rendering')
            window.removeEventListener('resize',windowWidth)
            
        }
        
            
        
    }, [])
    return (
        <div>window width is: {width}</div>
    )
}