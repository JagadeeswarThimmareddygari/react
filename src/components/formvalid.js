import React,{useState} from 'react'

function Form(){
    const [input,setInput]=useState('')

    function handleChange(event){
        setInput(event.target.value)
    }
    return(
        <div>
            <input type="text" value={input} onChange={handleChange} />
            <h1>{input}</h1>
        </div>
    )
}
export default Form