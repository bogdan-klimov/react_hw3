import React from 'react';

class Сounter extends React.Component {
    constructor(props) {
      super(props)
  
      this.state = {
        value: 0,
        isShare: true
      }
  
      this.counterAdd = this.counterAdd.bind(this);
      this.checkIsShare = this.checkIsShare.bind(this);
      this.handleClick = this.handleClick.bind(this)
    
    }
  
    counterAdd(k) {
      this.setState({
        value: this.state.value + k
      })
    }
  
    checkIsShare(num) {
  
      // if (num % 3 === 0 || num % 5 === 0 || num % 7 === 0) {
      //   this.setState({
      //     isShare: true
      //   }) 
      // } else {
      //   this.setState({
      //     isShare: false
      //   }) 
      // }
  
      const isShare = num % 3 === 0 || num % 5 === 0 || num % 7 === 0;
      this.setState({
        isShare
      });
  
    }
  
    handleClick(k) {
      const randNum = Math.round(Math.random() * 10) * k;
      this.counterAdd(randNum); 
      this.checkIsShare(this.state.value + randNum);
    }
  
    render() {
  
      return (
        <div className="wrapper">
          <h1 className="value-text">
            Value: {this.state.value}
          </h1>
  
          <button className="btn" onClick={ () => this.handleClick(1) }>+ rand(1 - 10)</button>
          <button className="btn" onClick={ () => this.handleClick(-1) }>- rand(1 - 10)</button>
  
          <span className="share-span">
            {this.state.isShare 
            ? "Делится или на 3 или на 5 или на 7!" 
            : "Не делится на 3 на 5 и на 7!"}
            </span>
        </div>
      );
    }
  }


  export default Сounter;