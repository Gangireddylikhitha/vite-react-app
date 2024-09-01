import { Component } from "react";


class YoutubeButton extends Component{


    state={
        isSubscribe:false,
        text1:"subscribe",
        text2:"subscribed"
    }

clickHandler=()=>{

    this.setState({
        isSubscribe:!this.state.isSubscribe
        
    })
   
}


render(){
    return(
        <button onClick={this.clickHandler}>{this.state.isSubscribe?this.state.text2:this.state.text1}</button>
    )
}

}

export default YoutubeButton