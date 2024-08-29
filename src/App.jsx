// import Counter from "./components/hooks/usestate";
import Cards from "./components/bootstrap/cards";



const App=()=>{
  return(
    <div>
      {/* <CustomButton text={"hello likhitha"}/> */}
      <div className="d-flex justify-content-around flex-wrap gap-5">
      <Cards/>
      <Cards/>
      <Cards/>
      </div>
    {/* <Counter/> */}
    </div>
  )
}
export default App