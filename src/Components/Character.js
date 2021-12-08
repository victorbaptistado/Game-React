import React from 'react';
import characterImage from "../images/Characters/Dead__000.png";
import CharacterMoves from './CharacterMoves';
import { useState, useRef, usePrevious } from 'react';
import { useEffect } from 'react/cjs/react.development';

const Character = () => {



    const [horizontal, setHorizontal] = useState(0);

   
    const prevCount = useRef()
   
    function go(event){
      
       
        setHorizontal(
        
        function handle(){
        prevCount.current = horizontal;
        if(event.key == "d")
        return horizontal + 0.3;

        else if(event.key == "a")
        return horizontal - 0.3;
        else return horizontal;
        }
       
    
    
        )  }

  
    return ( 
        <div tabindex="0" onKeyPress={go} >
            <img className="character" style={{marginLeft:`${horizontal}%`}} src={characterImage} />
        </div>
    )
}

export default Character
