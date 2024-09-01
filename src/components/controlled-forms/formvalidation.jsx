import { useState } from "react"

const FormValidations=()=>{

const[Name,setName]=useState("")
const[Error,setError]=useState("")
const[Password,setPassword]=useState("")

const NameHandler=(event)=>{
 const UserNameValue=event.target.value;
 setName(UserNameValue)
 const error=validatorError(UserNameValue)
 console.log(UserNameValue)


if(error){
  setError(error)
}
else{
  setError("")
}




}

const PasswordHandler=(event)=>{
const PasswordValue=event.target.value
setPassword(Password)
// validatorError()
console.log(PasswordValue)

}
const validatorError=(value)=>{
  let error=""

  const regex=/A-Z/i

  if(!value){
   error="plz enter the user name"
    
  }
  else if(!regex.test(value)){
    error="enter valid name"

  }
  return error
}




    return(
        <>

<div className="d-flex justify-content-center align-items-center " style={{position:"absolute",left:"50%",top:"30%",transform:"translate(-50%,-50%)"}}>

    <form className="p-4 border rounded bg-light">
  <div className="form-group">

    <label htmlFor="UserName">UserName:</label>
    <input type="text" className="form-control" id="text gap-3" value={Name} onChange={NameHandler}
     />
  </div>
  <div className="form-group">
    <label htmlFor="pwd">Password:</label>
    <span style={{color:"red"}}>{Error}</span>
    <input type="password" className="form-control" id="pwd" value={Password} onChange={PasswordHandler}/>
  </div>
  <button type="submit" className="btn btn-default">
    Submit
  </button>
</form>

</div>


        </>
    )
}


export default FormValidations