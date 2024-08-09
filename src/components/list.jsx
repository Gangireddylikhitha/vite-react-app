const List=()=>{
    return(
        <ol>
           <ListItem></ListItem>
        </ol>
    )
}
export default List

/////////////////////////IN RETURN WE CAN USE JS CODE ALSO/////////////////

export const ListItem=()=>{
    const ListItem=["apple","mango","banana","orange"]
    return(
        <>
        <li>{ListItem[0]}</li>
        <li>{ListItem[1]}</li>
        <li>{ListItem[2]}</li>
        <li>{ListItem[3]}</li>
        </>
    )
}

///////////////////////////////////////////////////////////////////

export function List1() {
  let fruits = ["apple", "mango"];
  return (
    <>
        {
        fruits.map((fruit,index) => {
          return <li key={index}>{fruit}</li>
        })
        }
    
    </>
  );
}


