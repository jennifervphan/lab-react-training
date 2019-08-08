import React, { Component } from 'react';

export default class Carousel extends Component {
    state={
        imgs: this.props,
        imgDisplayed: this.props.imgs[0],
        index:0
    }

    afterPic=()=>{
        let index=this.state.index;
        let allImgs=this.state.imgs;
        index<allImgs.imgs.length-1?index+=1:index=allImgs.imgs.length-1;
        let newImg=allImgs.imgs[index]
        this.setState({imgDisplayed:newImg,index:index})
    }

    beforePic=()=>{
        let index=this.state.index;
        let allImgs=this.state.imgs;
        index>0? index-=1:index=0;
        let newImg=allImgs.imgs[index]
        this.setState({imgDisplayed:newImg,index:index})
    }
    
    render() {
        debugger
        return (
            <div>
                <button onClick={this.beforePic}>Before</button>
                <img src={this.state.imgDisplayed} alt=""></img>
                <button onClick={this.afterPic}>After</button>
            </div>
        )
    }
}
