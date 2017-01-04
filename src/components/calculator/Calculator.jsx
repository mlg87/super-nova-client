import React from 'react';
import NumberPad from './NumberPad'
import OperatorPad from './OperatorPad'
import Screen from './Screen'

const Calculator = React.createClass({
  getInitialState: function() {
    return {
      userInput: '',
      storedNumber: null,
      operator: null,
      clearOnNextClick: false
    }
  },

  onScreenChange: function(event) {

    let userInput = event.target.value
    if (userInput.match(/[^\d\.]/g)) {
      return
    }
    this.setState({userInput: userInput})
  },

  onNumberClick: function(event) {
    let userInput = event.target.value
    let clear = this.state.clearOnNextClick
    if (clear) {
      userInput = event.target.value
    } else {
      userInput = this.state.userInput + event.target.value
    }
    this.setState({userInput: userInput, clearOnNextClick: false})
  },

  calculate: function(operator){
    console.log('in the clac', operator);
    let result = null;
    let storedNumber = this.state.storedNumber
    let inputNumber = this.state.userInput
    let storedOperator = this.state.operator
    let operatorToSave = operator === 'equals' ? null : operator
    if (storedNumber && storedOperator) {
       switch(storedOperator) {
        case 'plus':
          result = +storedNumber + +inputNumber
          break;
        case 'minus':
          result = +storedNumber - +inputNumber
          break;
        default:
          break;
      }
      console.log('result', result);
      this.setState({userInput: result, storedNumber: result, operator: operatorToSave, clearOnNextClick: true})
    } else if (storedNumber) {
      this.setState({operator: operatorToSave, clearOnNextClick: true})
    } else {
      this.setState({storedNumber: inputNumber, operator: operatorToSave, clearOnNextClick: true})
    }
  },

  onOperatorClick: function(event) {
    let operator = event.target.value
    console.log(operator);
    if (operator === 'clear') {
      this.setState({
        userInput: '',
        storedNumber: null,
        operator: null,
        clearOnNextClick: false
      })
    } else {
      this.calculate(operator)
    }
  },

  render: function () {
    let style = {
      marginTop: '11rem',
    }
    return (
      <div style={style} className="row calculator valign-wrapper">
        <div className="col s2 center-block">
          <Screen
            onScreenChange={this.onScreenChange}
            userInput={this.state.userInput}
          />
          <div className="valign-wrapper">
            <div className="col center-block">
              <OperatorPad className="row" onOperatorClick={this.onOperatorClick}/>
              <NumberPad className="row" onNumberClick={this.onNumberClick}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
});


export default Calculator;
