import { useState,useEffect } from "react";

function Usestatebutton() {
    let [count, setCount] = useState(0); // State for count
    let [value, setValue] = useState("");
    let[pic,setpic]=useState("")
    
    useEffect(()=>{
        console.log("value updated");
        //RETURN STATEMENT OPTIONAL
        return(()=>{
            console.log("code cleanup")
        }
        )       
    },[count]) 
    
    useEffect(()=>{
        console.log(value);
    },[value])

    function handleChange(e) {
        setValue(e.target.value); 
    }
    function handlepicture()
    {
        setpic(
            'https://cdn.pixabay.com/photo/2015/04/23/22/00/new-year-background-736885_1280.jpg'
        )
    }

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>++</button>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count - 1)}>--</button>
            <br/>
            <br/>
            <input type={value} onChange={handleChange} />
    
            User Input: {value}
            <br/>
            <br/>
            <button onClick={()=>setpic(handlepicture)}>picture</button>
            <br/>
            <br/>
            <img src={pic}/>
        </div>
    );
}

export default Usestatebutton;

