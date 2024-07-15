import React,{useState} from 'react'

function TextForm(props) {
  const convertToUppercase = ()=>{
    let newText = text.toUpperCase();
    setText(newText)
  }
  const convertToLowercase = ()=>{
      let newText = text.toLowerCase();
      setText(newText)
    }
  const copyText = ()=>{
    var text =document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value)
  }
  const HandLeExtraSpace = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }
  const clearText = ()=>{
    let newText = ' '
    setText(newText)
  }

  const hanleOnChange = (event)=>{
        setText(event.target.value)
  }
  const [text,setText] = useState('')
  return (
    <>
    <div>
    <h1>{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control" value={text} onChange={hanleOnChange} id="myBox" rows="8"></textarea>
    </div>
    <button className='btn btn-primary mx-2' onClick={convertToUppercase}>Convert to Uppercase</button>
    <button className='btn btn-primary mx-2' onClick={convertToLowercase}>Convert to Lowercase</button>
    <button className='btn btn-primary mx-2' onClick={copyText}>Copy Text</button>
    <button className='btn btn-primary mx-2' onClick={HandLeExtraSpace}>Remove Extra Space</button>
    <button className='btn btn-primary mx-2' onClick={clearText}>Clear Text</button>
    </div>

    <div className='container my-3'>
      <h2 >Text Summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length}Minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}

export default TextForm
