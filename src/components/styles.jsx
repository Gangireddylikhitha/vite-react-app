const CustomButton=(props)=>{
const {text}=props

const styles={backgroundColor:"red",
    color:"white",
backgroundImage: "linear-gradient(to right, red, orange)"}



    return(
        <>
       
        <button style={styles}>hi {text}</button>
        </>
    )
}

export default CustomButton