import React from 'react'
import { useState,useEffect } from 'react';


const CharacterMoves = () => {

 


   
    const [horizontal, setHorizontal] = useState("")


       

    return (
        <div>
           <input type="text" onKeyPressCapture={(e) => setHorizontal(e.target.value)}>{}</input> 
        </div>
    )
}

export default CharacterMoves
