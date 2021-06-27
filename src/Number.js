import React, { Component } from 'react';
import Dice from './Dice';
import './Number.css';
class Number extends Component{

 static defaultProps={
     digit:["one","two","three","four","five","six"]
 };

 constructor(props){
     super(props);
     this.state={num1:"one",num2:"four",rolling:false}; 
     this.generate=this.generate.bind(this);
 }

//  state={num1:"one",num2:"four"};  
// this.props.state.length 
 generate(){
     const a=this.props.digit[Math.floor(Math.random()*6)];
     const b=this.props.digit[Math.floor(Math.random()*6)];
     this.setState({num1:a,num2:b,rolling:true});

   ///setting the timer for 1 sec after which it make rolling from true-> false
     setTimeout(()=>{
         this.setState({rolling:false});
     },1000);

 };



render(){

    //conditional rendering method 1
    let temp;
    if(this.state.rolling==true){
        temp="Rolling..!!";
    }else{
        temp="Click To Roll..!!";
    }

    //   method 2 of conditional rendering
    // this.state.rolling?"Rolling..!!":"Cilck To Roll"


//    //for disabling the button
//     disabled={this.state.rolling}

return(
    <div className="Number">
        <div className="DieDisplay">
        <Dice face={this.state.num1}/>
        <Dice face={this.state.num2}/>
        </div>
        <button class="btn" onClick={this.generate} disabled={this.state.rolling}>{temp}</button>
    </div>
);

}

}

export default Number;