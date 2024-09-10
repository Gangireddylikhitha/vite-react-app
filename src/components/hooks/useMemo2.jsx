import React, { useMemo, useState } from 'react';
import {Example} from "../hooks/useMemo"; 

function Parent() {
  const [number, setNumber] = useState(1);

  return (
    <div>
      <h1>Parent Component</h1>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <Example number={number} />
    </div>
  );
}

export default Parent;


export const Example2 = () => {
  const [milkQty, setMilkQty] = useState(1);
  const [riceQty, setRiceQty] = useState(1);

  const milkHandler = () => {
    setMilkQty(milkQty + 1);
  };

  const riceHandler = () => {
    setRiceQty(riceQty + 1);
  };

  const milkPrice = useMemo(() => {
    console.log("Calculating milk price");
    const priceOfMilk = 50;
    return milkQty * priceOfMilk;
  }, [milkQty]); 

 
  const ricePrice = useMemo(() => {
    console.log("Calculating rice price");
    const priceOfRice = 50;
    return riceQty * priceOfRice;
  }, [riceQty]); 

  return (
    <>
      <h1>Milk Qty: {milkQty} Milk Price: {milkPrice}</h1>
      <h1>Rice Qty: {riceQty} Rice Price: {ricePrice}</h1>
      <button onClick={milkHandler}>Increase Milk</button>
      <button onClick={riceHandler}>Increase Rice</button>
    </>
  );
};



export const Example3=()=>{     

const [age,setAge]=useState(1)
const [salary,setSalary]=useState(1000)


const incrementHandler=()=>{
    setAge(age+1)
}


const salaryIncrement=()=>{
    setSalary(salary+12)
}

const evenOdd=useMemo(()=>{
    console.log("age....")
    return age%2==0?"Even":"odd"
},[age])



const salaryEvenOdd=useMemo(()=>{
    console.log("salary....")
    return salary%2==0?"Even":"odd"
},[salary])


    return(
<>

<h1>age:{age} is {evenOdd}</h1>
<h2>salary:{salary} is {salaryEvenOdd} </h2>
<button onClick={incrementHandler}>Increment age</button>
<button onClick={salaryIncrement}>Increment salary</button>

</>
    )
}