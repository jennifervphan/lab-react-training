import React, { Component } from 'react';

export default class ClickablePicture extends Component {
    state ={
        display2: "none",
        display1:"block"
    }
    togglePic=()=>{
        debugger
       return(
        this.state.display1==="block" && this.state.display2==="none"? this.setState({display1:"none",display2:"block"}): this.setState({display1:"block",display2:"none"})
       ) 
    }

    render() {
        const {imgClicked,img}=this.props;
        return (
            <div>
                <img style={{display:this.state.display1}} onClick={this.togglePic} src={img} alt=""></img>
                <img style={{display:this.state.display2}} onClick={this.togglePic} src={imgClicked} alt=""></img>
            </div>
        )
    }
}
