import { useState } from "react"



const Counter=()=>{
   const [age,setAge]=useState(10)

   const IncreHandler=()=>{
    setInterval(() => {
        setAge(age=>age+1)
    }, 1000);

   }

   const DecreHandler=()=>{
    setAge(age-1)
   }
   const ResetHandler=()=>{
    setAge(0)
   }

    return(
        <>
        <h3>counter</h3>
        <h3>{age}</h3>
<button onClick={IncreHandler}>Increment</button>
<button onClick={DecreHandler}>Decrement</button>
<button onClick={ResetHandler}>reset</button>
        </>
    )
}
export default Counter