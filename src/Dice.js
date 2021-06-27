import React, { Component } from 'react'
import './Dice.css';
class Dice extends Component{

render(){

let t="Diceedit fas fa-dice-";
t=t+this.props.face;

return(
<i className={t}></i>
);

}


}

export default Dice;