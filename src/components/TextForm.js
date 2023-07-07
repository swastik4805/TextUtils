import React, { useState } from "react"

function TextForm(props) {
    const [text, setText] = useState('I am the default one');
    // const [text1, setText1] = useState();
    const [num, setNum] = useState(0);

    const handleOnChange=(event)=>{ // this helps to listen to the change on textArea
        console.log("handeling onChange") // remember this....
        setText(event.target.value)
    }
    const handleUpClick=()=>{
        console.log("handeling onChange")
        let newText=text.toUpperCase()
        setText(newText)
    }
    const resetText=()=>{
        console.log("reset button was clicked")
        setText("")
    }
  return (
    <>
    <div className="container" style={{color:props.mode==='light'?'black':'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" 
                    id="myBox" rows="8" 
                    value={text} 
                    onChange={handleOnChange}
                    //first {} is for writing javaScript. Second {} is for creating an object
                    style={{backgroundColor:props.mode==='light'?'white':'grey',
                            color:props.mode==='light'?'black':'white'}} ></textarea>
        </div>
        <button className="btn btn-primary mx-1" 
                onClick={handleUpClick}>Convert to upper case</button> 
        <button className="btn btn-primary mx-1" onClick={resetText}>Reset</button>
    </div>
    <div className="container mb-3" style={{color:props.mode==='light'?'black':'white'}}>
        <h2>Here is the summary of your para!</h2>
        <p>no. of words are {text.length} . no. of letters are {text.split(" ").length} </p>
    </div>
    </>
  )
}

export default TextForm
