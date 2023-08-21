import React, {useState} from 'react'

export default function TextArea(props) {
  const[Text,setText]=useState("");
  const handleOnChange=(event)=>{
    setText(event.target.value);
  }

  const lowerCase=()=>{
    let newText=Text.toLowerCase();
    setText(newText);
   props.showAlert("converted to lower case","success");
    
  }
  const upperCase=()=>{
    let newText=Text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upper case","success");
  }
   
  return (
    <div>
      <div className="container">
        <h1>Welcome to text analyzer</h1>
        <div className="textarea">
            <textarea name="" id="" value={Text} cols="50" rows="10" onChange={handleOnChange}></textarea>
        </div>
        <div className="buttons">
            <button onClick={lowerCase}>{props.low}</button>
            <button onClick={upperCase}>{props.up}</button>
        </div>
        <div className="results">
            <p>The no of characters are {Text.length} and the no of words are {Text.split(" ").length-1}</p>
        </div>
      </div>
    </div>
  )
}
