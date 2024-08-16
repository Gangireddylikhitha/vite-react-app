export const List=(prop)=>{
    const {lists}=prop
   return(
    <ol>
        <>
        {
      lists.map((each,index)=>{
        return <li key={index}>{each}</li>
      })
}
</>
    </ol>
   )
}
