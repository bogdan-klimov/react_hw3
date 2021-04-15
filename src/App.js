import React from 'react';
import './App.css';

let temperyNum = 0;

class СounterComponent extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      value: 0,
      isShare: true
    }

    this.counterAdd = this.counterAdd.bind(this);
  }

  counterAdd(k) {
    this.setState({
      value: this.state.value + k
    })
  }

  cheackIsShare(num) {
    if (num % 3 == 0 || num % 5 == 0 || num % 7 == 0) {
      this.setState({
        isShare: true
      }) 
    } else {
      this.setState({
        isShare: false
      }) 
    }
  }

  render() {
    return (
      <div className="wrapper">
        <h1 className="value-text">
          Value: {this.state.value}
        </h1>
        <button className="btn" onClick = {() => {
          let randNum = Math.round(Math.random() * 10); 

          this.counterAdd(randNum); 

          temperyNum = temperyNum + randNum; 

          this.cheackIsShare(temperyNum);}

        }>+ rand(1 - 10)</button>
        <button className="btn" onClick = {() => {
          let minusRandNum = -Math.round(Math.random() * 10);

          this.counterAdd(minusRandNum); 

          temperyNum = temperyNum + minusRandNum; 

          this.cheackIsShare(temperyNum);
          
          }}>- rand(1 - 10)</button>
        <span className="share-span">
          {this.state.isShare === true 
          ? "Делиться или на 3 или на 5 или на 7!" 
          : "Не делиться на 3 на 5 и на 7!"}
          </span>
      </div>
    );
  }
}


function App() {
  return (
    <div className="App">
      <СounterComponent />
    </div>
  );
}

export default App;
