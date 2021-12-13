import React from 'react';
import { useSpring, animated, useSprings } from "react-spring";
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
import Dead00 from "../images/Characters/Dead__000.png";


const Character = ({ }) => {

    const [horizontal, setHorizontal] = useState(0);
 

    const prevCount = useRef();
    
    function walkHorizontal(event) {

        setHorizontal(

            function handle() {
                prevCount.current = horizontal;
                if (event.key == "d")
                    return horizontal + 0.3;

                else if (event.key == "a")
                    return horizontal - 0.3;
                else return horizontal;
            }
        )
    }

    const [idles, setIdle] = useState([
    
        {
        id: 0,
        img:  <img className="character" src={Idle00} />,
        },
        {
        id: 1,
        img: <img className="character" src={Dead00}/>,
        },
        {
        id: 2,
        img: <img className="character" src={Idle02}/>,
        },
      ]

    )

/*    const idlesFilt = idles.filter(idle => idle.id === count)*/

/*
    const lets = useSpring({
        loop: true,
        from: idles.img,
        to: idles.img,    
    })
  */  
    return (
     
       
        <div className='characterImage' tabindex="0" onKeyPress={walkHorizontal} >
       

        <animated.img className="character" style={{marginLeft: `${horizontal}%`}} src={Idle00}  />  
    {/*    {idlesFilt.map((idle) =>
      <>
        {idle.img}
        </>
    )}*/}
        </div>
        


    
    )
}

export default Character
