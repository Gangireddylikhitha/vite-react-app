import axios from 'axios';
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';

function TableData() {
  const [data, setData] = useState([]);

  const[query,setQuery]=useState("")

  useEffect(() => {
    fetchData();
  }, [query]);
  // https://dummyjson.com/recipes/search?q=pizza

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://dummyjson.com/recipes/search?q=${query}`);
      console.log(response.data.recipes);
      setData(response.data.recipes); 
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  const searchHandler=(event)=>{
    setQuery(event.target.value)

  }

  return (

    <>

    <input type="text" value={query} onChange={searchHandler}  />
  



    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>NAME</th>
          <th>IMAGE</th>
          <th>INGREDIENTS</th>
          <th>INSTRUCTIONS</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {data.map((each) => (
          <tr key={each.id}>
            <td>{each.id}</td>
            <td>{each.name}</td>
            <td>
              <img src={each.image} alt={each.name} width={100} height={100} />
            </td>
            <td>{each.ingredients}</td>
            <td>{each.instructions}</td>
          </tr>
        ))}
      </tbody>
    </Table>
    </>
  );
}

export default TableData;
