// Code ClickityClick Component Here
import React, { Component } from 'react';

class ClickityClick extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            hasBeenClicked: false,
            count: 0,
            toggled: false
         }
    }
    handleClick=()=>{
        this.setState({
            hasBeenClicked: true
        }, () => console.log(this.state.hasBeenClicked))
    }

    handleCount=(e)=>{
        let newCount = this.state.count + 1
        this.setState({
            count: newCount
        },()=> console.log(this.state.count))
        if(newCount === 10){
            this.setState({
                count: 0
            },()=>console.log(this.state.count))
        }
    }

    handelToggle=(e)=>{
        
        this.setState(e => {
            return{
                toggled: !e.toggled
            }
        })
    }



    render() { 
        return ( 
            <div>
                <button onClick={this.handelToggle}>{this.state.toggled ? "ON" : "OFF"}</button>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleCount}>COUNT UP</button>
                <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
                <button onClick={this.handleClick}>Click me!</button>
            </div>
         );
    }
}
 
export default ClickityClick;