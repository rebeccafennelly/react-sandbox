import React, { Component } from 'react';
import styles from "./Button.module.scss";



class Button extends Component {

  render() { 
    const {scoreChange, text} = this.props;
    return (
      <>
      <button onClick={scoreChange}>{text}</button>
      </>
    )
  }
}
 
export default Button;