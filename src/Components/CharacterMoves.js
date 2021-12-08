import React from 'react'
import { useState,useEffect } from 'react';


const CharacterMoves = () => {

    useEffect(()=>
    setHorizontal(
    function caralho (){
        if(setHorizontal === "l"){
            alert("nice")
        }
    }
    )
    ,[]);




   
    const [horizontal, setHorizontal] = useState("")


       

    return (
        <div>
           <input type="text" onKeyPressCapture={(e) => setHorizontal(e.target.value)}>{}</input> 
        </div>
    )
}

export default CharacterMoves
