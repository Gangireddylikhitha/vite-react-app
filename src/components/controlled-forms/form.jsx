import { useState } from "react";
import TableComponent from "../bootstrap/tableComponent";

export const Form = () => {
  const [FormData, setFormData] = useState({
    userName: "",
    password: "",
    state:""
  });


  const [submittedData,setSubmittedData]=useState([])


  

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(FormData); 

setSubmittedData([...submittedData,FormData])
setFormData(FormData)

  };

  const clickHandler = (event) => {
    const { name, value } = event.target;
    console.log(name,value)
    setFormData({ ...FormData, [name]: value });
  };

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center gap-5"
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)"
      }}
    >
      <form onSubmit={onSubmit} className="p-4 border rounded bg-light">
        <div className="form-group">
          <label htmlFor="userName">UserName:</label>
          <input
            type="text"
            className="form-control"
            id="userName"
            value={FormData.userName}
            onChange={clickHandler}
            name="userName"
          />
        </div>

        <div className="form-group">
          <label htmlFor="pwd">Password:</label>
          <input
            type="password"
            className="form-control"
            id="pwd"
            value={FormData.password}
            onChange={clickHandler}
            name="password"
          />
        </div>

        <button type="submit" className="btn btn-default">
          Submit
        </button>

      </form>


<div >
      <select value={FormData.state} onChange={clickHandler} name="state">
  <option value={"hyderabad"}>hyd</option>
  <option value={"karnataka"}>karnatak</option>
  <option value={"Andra"}>AP</option>
  

</select>



</div>

<TableComponent rowData={submittedData}/>

    </div>
  );
};
