import React from 'react';
import characterImage from "../images/Characters/Dead__000.png";
import CharacterMoves from './CharacterMoves';
import { useState, useEffect } from 'react';

const Character = () => {



    const [horizontal, setHorizontal] = useState("");



    
    function go(event){
 
        setHorizontal(
        function handle(){
            let move = 0;

        if(event.key == "d")
        return move + 10;

        else if(event.key == "a")
        return 0;
        }
        )}
  
    return ( 
        <div tabindex="0" onKeyPress={go} >
            <img className="character" style={{marginLeft:`${horizontal}%`}} src={characterImage} />
        </div>
    )
}

export default Character
