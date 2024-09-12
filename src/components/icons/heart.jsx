import React, { useState } from "react";
import Heart from "react-animated-heart";
// import useAxios from "../hooks/customhooks";

export default function CustomHeart() {
  const [isClick, setClick] = useState(false);


//   const [products,error,loading]=useAxios("https://dummyjson.com/products")
// console.log(products,"this product")
// if(loading){
//   return <h2>plz wait.....</h2>
// }





  return (
    <div className="App">
      <Heart isClick={isClick} onClick={() => setClick(!isClick)} />
    </div>
  );
}