/* import React, { createContext, useState } from 'react';
import Hen from './Hen';

export let nameContext = createContext();
R
function Drill() {
    const [colour, setColour] = useState(true); // For toggling the color
     

    const handleChange = () => {
        setColour(prev => !prev); // Toggle between true and false
    };
    const a="Water";

    return (
        <>
            <nameContext.Provider value={{ a, colour }}>
                <Hen />
            </nameContext.Provider>
            <button onClick={handleChange}>Click to Change Color</button>
        </>
    );
}

export default Drill; */
import {useState} from 'react'
let Hook4 = () =>{
    let [Number,setNumber] = useState(0);
    let [dark,setDark] = useState("false");
    let ChangeTheme = () =>{
        return{
            backgroundColor: dark ? "black" : "white",
            color: dark ? "white" : "black"
        }
    }
    let slow = slowfunction(Number);
    return (
        <>
            <div>
                <input type="text" value={Number} onChange={(e)=>setNumber(e.target.value)}/>
                <button onClick={ChangeTheme}>Change Theme</button>
                <h1>{slow}</h1>
            </div>
        </>
    )
}
export default Hook4;
let slowfunction = (number) =>{
    for(let i=0;i<100000000000;i++){}
    return number*2;
}


