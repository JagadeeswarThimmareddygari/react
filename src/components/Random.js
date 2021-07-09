import React,{useState} from 'react'

const Random=()=>{
    const [value,setValue]=useState()
    const [block,setBlock]=useState('')

    function handleRandom(){
        setValue(Math.round(Math.random()*10))
    }
    return(
        <div>
            <button onClick={handleRandom}>Random Value</button>
            <h2>{value}</h2>

            <button onClick={()=>setBlock('posts')}>Posts</button>
            <button onClick={()=>setBlock('Comments')}>Comments</button>
            <button onClick={()=>setBlock('Reviews')}>Reviews</button>
            <h3>{block}</h3>
        </div>
    )
}

export default Random