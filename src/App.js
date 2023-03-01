import React, { useState } from 'react';
import './App.css';

const App = () => {
const [result, setResult] = useState("");

const handalClick = (e) => {
    setResult(result.concat(e.target.name));
}

const clear = () => {
    setResult("");
}

const backspace = () => {
    setResult(result.slice(0, -1));
}

const calculator = () => {
    try{
        setResult(eval(result).toString());
    }
    catch(err){
      setResult("Error");
    }
    
}

    return (
        <div>
            <div className='container'>
                <form>
                    <input type="text" value = {result} />
                 </form>

                 <div className='keypad'>
                    <button className='highlight' onClick={clear} id = "clear">Clear</button>
                    <button className='highlight' onClick={backspace} id = "backspace">C</button>
                    <button className='highlight' name ="/" onClick={handalClick}>&divide;</button>
                    <button name ="7" onClick={handalClick}>7</button>
                    <button name ="8" onClick={handalClick}>8</button>
                    <button name ="9" onClick={handalClick}>9</button>
                    <button className='highlight' name ="*" onClick={handalClick}>&times;</button>
                    <button name ="4" onClick={handalClick}>4</button>
                    <button name ="5" onClick={handalClick}>5</button>
                    <button name ="6" onClick={handalClick}>6</button>
                    <button className='highlight' name ="-" onClick={handalClick}>&ndash;</button>
                    <button name ="1" onClick={handalClick}>1</button>
                    <button name ="2" onClick={handalClick}>2</button>
                    <button name ="3" onClick={handalClick}>3</button>
                    <button className='highlight' name ="+" onClick={handalClick}>+</button>
                    <button name ="0"  onClick={handalClick}>0</button>
                    <button name ="." onClick={handalClick}>.</button>
                    <button className='highlight' onClick={calculator} id = "result">=</button>
                 
                 </div>
            </div>
        </div>
    )
}
export default App;