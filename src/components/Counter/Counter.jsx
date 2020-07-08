import React, { Component } from 'react';
import Button from "../Button"
import styles from "./Counter.module.scss";

class Counter extends Component {
  state = { 
    score : 0
  }

  incrementScore = () => {
    this.setState({
      score : this.state.score + 1
    })
  }

  decrementScore = () => {
    this.setState({
      score : this.state.score - 1
    })
  }


  render() { 
    return ( 
      <>
      <p>score: {this.state.score}</p>
      <Button scoreChange ={this.incrementScore} text={"+"}/>
      <Button scoreChange ={this.decrementScore} text={"-"}/>
      </>
     );
  }
}
 
export default Counter;