import React from 'react';
import Spring from "react-spring";
import { useState, useRef, useEffect } from 'react';
import Idle00 from "../images/Characters/Idle__000.png";
import Idle01 from "../images/Characters/Idle__001.png";
import Idle02 from "../images/Characters/Idle__002.png";
import Idle03 from "../images/Characters/Idle__003.png";
import Idle04 from "../images/Characters/Idle__004.png";
import Idle05 from "../images/Characters/Idle__005.png";
import Idle06 from "../images/Characters/Idle__006.png";
import Idle07 from "../images/Characters/Idle__007.png";
import Idle08 from "../images/Characters/Idle__008.png";
import Idle09 from "../images/Characters/Idle__009.png";



const Character = ({}) => {



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

    const [idle, setIdle] = useState("");
    

        useEffect(() => {
        
        setIdle(
        <Spring 
        from={{Idle00}}
        to={{ Idle01}}
        to={{ Idle02}}
        to={{ Idle03}}
        to={{ Idle04}}
        to={{ Idle05}}
        to={{ Idle06}}
        to={{ Idle07}}
        to={{ Idle08}}
        to={{ Idle09}}
        >  
        </Spring>
        )}
        , [])

  
    return ( 
        <div tabindex="0" onKeyPress={go} >
      
      
             <img className="character" style={{marginLeft:`${horizontal}%`}} src={idle} />
        
        
  
        
        </div>
    )
}

export default Character
