import React,{useState} from 'react'

// function countInitial(){
//     console.log('run function')
//     return 4
// }
function Count(){
    const [count,setCount]=useState(()=>{
        console.log('run function')
        return 4
    })
    function increaseCount(){
        setCount(prevCount=>prevCount+1)
    }
    function decreaseCount(){
        setCount(prevCount=> prevCount-1)
    }

    return(
        <div>
            <button onClick={increaseCount}>IncreaseCount</button>
            <span> {count} </span>
            <button onClick={decreaseCount}>DecreaseCount</button>
        </div>
    )
}
export default Count;