export const CustomImage=(prop)=>{
    const{source,width,height}=prop;

    return(
        <img src={source} width={width} height={height} alt="place"></img>
        

    )
}

