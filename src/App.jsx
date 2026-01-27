import React,{useState,useRef,useEffect} from "react";
import Dice from "./Dice.jsx";
import Confetti from "react-confetti"  //normal falling


import {nanoid} from "nanoid"
const App = () => {
  const buttonRef= useRef(null)
 

  const[dice,setDice] = useState(() => generateAllNewDice()); //we put arrow function for run only one time (logical)

  const gameWon =dice.every(dies => dies.isHeld) &&
    dice.every(dies => dies.value === dice[0].value )
    useEffect(()=>{
  if(gameWon){
     buttonRef.current.focus()
  }},[gameWon])
  
  function generateAllNewDice(){
    // const  newDice=[];
    // for(let i=0;i<10;i++){
    //   const rand=Math.ceil(Math.random()*6)
    //   newDice.push(rand)
    // }grows
    // return newDice;
            //or4
    return new Array(10)
    .fill(0)
    .map(()=>({
      value:Math.ceil(Math.random() * 6),
      isHeld:false,
      id:nanoid()  //generate random unique id
    }))      
  }
  function hold(id){
    setDice(oldDice =>  oldDice.map(die =>{
      return die.id === id ? {...die ,  isHeld : !die.isHeld} : die
    }))
  }
  function rollDice(){
    if(!gameWon){
      setDice(odie=>odie.map(die =>
      die.isHeld ? die :{...die,value:Math.ceil(Math.random() * 6)}
  ))
    }
    else{
       setDice(generateAllNewDice())
    }
  }
  const diceElements =  dice.map(dieObj => <Dice
     key={dieObj.id} 
     isHeld={dieObj.isHeld} 
     value={dieObj.value}
     hold={()=>hold(dieObj.id)} // it not want to trigger while render so we use arrow function
     />)
     

  return (
    <main className="app-main">
      {gameWon && <Confetti/>}
      <div aria-live="polite" className="sr-only">
                {gameWon && <p>Congratulations! You won! Press "New Game" to start again.</p>}
     </div>
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className="dice-container"> 
      {diceElements}
      </div>
      <button className="roll-dice" ref={buttonRef} onClick={rollDice}>{gameWon ?"New game" : "Roll"}</button>
    </main>
  );
};

export default App;
