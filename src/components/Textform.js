import React,{useState} from 'react'
// import PropTypes from 'prop-types'

export default function Textform(props) {
    const handleUpclick = ()=>{
        // console.log("Upper Case Was Clicked");
        let newtext= text.toUpperCase();
        setText(newtext);
        props.showalert("CONVERTED TO UPPERCSE","primary")
    }
    const handlelowclick = ()=>{
        // console.log("Upper Case Was Clicked");
        let newtext=text.toLowerCase();
        setText(newtext);
        props.showalert("CONVERTED TO LOWERCSE","primary")
    }
    const handlechange= (event)=>{
        // console.log("Onchange");
        setText(event.target.value);
    }
    const handlecopy= ()=>{
        var text = document.getElementById("mybox");
        text.select();
        text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
        props.showalert("COPIED","primary")
    }
    const handleextraspaces= ()=>{
       let newtext = text.split(/[ ]+/);
       setText(newtext.join(" "))
    }
    
    const [text,setText] = useState('Enter Text Here');
  return (
    <>
     <div className='container'>
        <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handlechange} id="mybox" rows="3" style={{backgroundColor:props.mode ==='light'?'white':'grey' , color :props.mode ==='light'?'black':'white'   }}></textarea>
</div> 
<button className="btn btn-primary" onClick={handleUpclick}>Convert to UpperCase</button>
<button className="btn btn-primary mx-3" onClick={handlelowclick}>Convert to LowerCase</button>
<button className="btn btn-primary mx-3" onClick={handlecopy}>Copy</button>
<button className="btn btn-primary mx-3" onClick={handleextraspaces}>spaces</button>
    </div>
    <div className="container my-3">
      <h1>Your text Summary</h1>
      <p>{text.split(" ").length} words ,{text.length} characters</p>
      <p>Time to read {text.split(" ").lenght} words = {text.split(" ").length * 0.008}min </p>
      <h2>PREVIEW</h2>
      <p>{text.length > 0 ?text : "Enter text to Preview"}</p>
    </div>
    </>
  )
}
