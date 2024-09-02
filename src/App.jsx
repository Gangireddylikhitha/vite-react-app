// import React, { useState } from 'react';
import  React from "react"
// import Counter from "./components/hooks/usestate";
// import Cards from "./components/bootstrap/cards";
// import { FakeStore } from './components/dummy';
// import { Button } from 'react-bootstrap';
// import YoutubeButton from "./components/class/youtubeButton";
// import UncontrolledForm from "../src/components/class/formvalid"
// import DisplayCard from "./components/class/DisplayCard";
import { RecipeData } from "./components/class/receipedata";
// import FormValidations from "./components/controlled-forms/formvalidation";

const App = () => {
  return (

<>
  {/* <FakeStore/> */}
  <RecipeData/>
  
  </>
  // const [cards, setCards] = useState([]);

  // const addCard = () => {
  //   setCards([...cards, {}]);
  // };

  // const removeCard = (index) => {
  //   setCards(cards.filter((_, i) => i !== index));
  //   console.log(index)
  // };

  // return (
  //   <div className="d-flex justify-content flex-wrap gap-5">
  //     <button onClick={addCard}>Add</button>

  //     {cards.length>0?
  //     cards.map((_, index) => (
  //       <Cards key={index} index={index} removeCard={removeCard} />
  //     )):
  //     <h3>no data </h3>}


      // {/* <DisplayCard/> */}
  //     {/* <UncontrolledForm/> */}
  //     {/* <RecipeData/> */}
  //     {/* <FormValidations/> */}
  //     {/* <YoutubeButton/> */}
  //   </div>
  );
}

export default App;
