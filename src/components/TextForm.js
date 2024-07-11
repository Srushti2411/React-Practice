import React,{useState} from 'react'

function TextForm(props) {
  const convertToUppercase = ()=>{
    let newText = text.toUpperCase();
    setText(newText)
  }
  const hanleOnChange = (event)=>{
        setText(event.target.value)
  }
  const [text,setText] = useState('')
  return (
    <div>
    <h1>{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control" value={text} onChange={hanleOnChange} id="myBox" rows="8"></textarea>
    </div>
    <button className='btn btn-primary' onClick={convertToUppercase}>Convert to Uppercase</button>
    </div>
  )
}

export default TextForm
