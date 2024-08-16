// import List from "./components/list"
import Button from "./components/button"
// import List1 from "./components/list"
// import Table from "./components/table"
// import "./components/table.css"
// import Card from "./components/card"
import { CustomImage } from "./components/image";
import { recipeData } from "./components/receipe";
import { Header } from "./components/header";
import { List } from "./components/ingredients";
import { Subhead } from "./components/header";

const App = () => {
  return (
    <>
      {recipeData.map((each) => {
        return (
          <div key={each.id}>
            <Header heading={each.name}></Header>
            <CustomImage source={each.image} width={200} height={200}></CustomImage>
            <Subhead heading={"ingredients required"}></Subhead>
            <List lists={each.ingredients}></List>
            <Subhead heading={"instructions for cooking"}></Subhead>
            <List lists={each.instructions}></List>
            <button>clickme</button>
            
         
          </div>
        );
      })}
    </>
  );
};

// <div>
//   <List></List>
//   <Button></Button>
//   <List1></List1>
//   <Table></Table>
//   <Card></Card>
// </div>

//   )
// }
export default App;

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
