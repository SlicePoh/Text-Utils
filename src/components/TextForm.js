
import React, {useState} from 'react'


export default function TextForm(props) {
    const [text, setText] = useState('');
    // setText("New Text");
    const handleUpClick =()=>{
        // console.log("Uppercase Clicked for " + text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase.","success");
    }
    const handleDownClick =()=>{
        // console.log("Lowercase Clicked for " + text);
        let newText2=text.toLowerCase();
        setText(newText2);
        props.showAlert("Converted to Lowercase.","success");
    }
    const handleClearClick =()=>{
        let newText3='';
        setText(newText3);
        props.showAlert("Text Cleared.","success");
    }
    const speak = () => {
        let newText4 = new SpeechSynthesisUtterance();
        newText4.text = text;
        window.speechSynthesis.speak(newText4);
      }
    const handleOnChange =(event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }
    
    const handleCopy = () => {
        let newText6=document.getElementById("myBox");
        newText6.select();
        navigator.clipboard.writeText(newText6.value);
        props.showAlert("Text Copied.","success");
    }
    
    const handleExtraSpaces = () => {
        let newText5 = text.split(/[ ]+/);
        setText(newText5.join(" "));
        props.showAlert("Extra Spaces Removed.","success");
    }
    //to find the the no. of occurrences of a given word or letter in the text 
    const[word,setword]=useState(" ")
    const[wordcount,setwordcount]=useState("0")
    //defining the functions

    const handlewordchange=(event)=>{
        console.log(event.target.value)
        setword(event.target.value)
        setwordcount('')
    }
    const handlewordcountclick=()=>{
   
        setwordcount((text.split(word)).length - 1)
    }


    return (
    <>   
    <div className="container"> 
        <h2 className={`text-${props.mode ==='light'?'dark':'light'}`}>{props.heading}</h2> 
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="6"></textarea>
        </div>
        <button className="btn btn-dark mx-1" id='butt' onClick={handleClearClick} >Clears Text</button>
        <button className="btn btn-dark mx-1" id='butt' onClick={handleUpClick} >Convert to Uppercase</button>
        <button className="btn btn-dark mx-1" id='butt' onClick={handleDownClick} >Convert to Lowercase</button>
        <button className="btn btn-dark mx-1" id='butt' onClick={handleCopy} >Copy Text</button>
        <button className="btn btn-dark mx-1" id='butt' onClick={handleExtraSpaces} >Remove Extra Spaces</button>
        <button className="btn btn-dark mx-1" id='butt' onClick={speak} >Speak</button>
    </div>
    <div>
    <div className={`"container" text-${props.mode ==='light'?'dark':'light'}`}>
        <h1>Text Summary</h1>
        <p><b> {text.split(" ").length-1} words and {text.length} characters</b> </p>
        <p>{0.008 * text.split(" ").length} minutes to read. </p>
        <h1>Preview</h1>
        <p>{text.length>0?text:"Enter something in the text-box above to see here"}</p>
        <input type="text" value={word} onChange={handlewordchange} />
        <button className="btn btn-dark mx-1" id='butt' onClick={handlewordcountclick}>Count occurances</button>
        <input type="number" value={wordcount} />
    </div>
    </div>
    </>
  )
}
