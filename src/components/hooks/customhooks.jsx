import axios from "axios";
import { useEffect, useState } from "react";

const useAxios = (url = 'https://dummyjson.com/products') => { 
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const dataFetch = async () => {
      try {
        const response = await axios.get(url); 
        if (response.status === 200) {
          setData(response.data);
        }
      } catch (err) {
        setError(err); 
      } finally {
        setLoading(false); 
      }
    };

    dataFetch(); 
  }, [url]); 

  return [data, error, loading];
};

export default useAxios;



export const useCounter=()=>{
    
const [count,setCount]=useState(0)

const incrementHandler=()=>{
    setCount(count+1)
}

const decrementHandler=()=>{
    setCount(count-1)
}

const resetHandler=()=>{
    setCount(0)



}

return [count,incrementHandler,decrementHandler,resetHandler]


}


export const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {

      
      try {
        const item = window.localStorage.getItem(key);
        console.log(key,"key")
        console.log(item,"item")
        return item ? JSON.parse(item) : initialValue;
        
      } catch (error) {
        console.error("Error retrieving localStorage item", error);
        return initialValue;
      }

      
    });
  
    useEffect(() => {
      try {
        window.localStorage.setItem(key, JSON.stringify(storedValue));
        console.log(storedValue,"stored")
      } catch (error) {
        console.error("Error setting localStorage item", error);
      }
    }, [key, storedValue]);
  
    // Function to remove the item from localStorage
    const removeItem = () => {
      try {
        window.localStorage.removeItem(key);
        setStoredValue(initialValue); // Optionally reset the value
      } catch (error) {
        console.error("Error removing localStorage item", error);
      }
    };
  
    return [storedValue, setStoredValue, removeItem];
  };
  



//   export const useLocalstorage=(value,initialvalue)=>{

//     const [storedValue,setStoredValue]=useState(()=>{
        
//         const item =window.localStorage.getItem(value)

//     })


   






  