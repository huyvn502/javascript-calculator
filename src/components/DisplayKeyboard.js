import React, { Component } from 'react';

class DisplayKeyboard extends Component {
    constructor(props) {
        super(props);
        this.clearButtonHandle = this.clearButtonHandle.bind(this);
        this.zeroButtonHandle = this.zeroButtonHandle.bind(this);
        this.oneButtonHandle = this.oneButtonHandle.bind(this);
        this.twoButtonHandle = this.twoButtonHandle.bind(this);
        this.threeButtonHandle = this.threeButtonHandle.bind(this);
        this.fourButtonHandle = this.fourButtonHandle.bind(this);
        this.fiveButtonHandle = this.fiveButtonHandle.bind(this);
        this.sixButtonHandle = this.sixButtonHandle.bind(this);
        this.sevenButtonHandle = this.sevenButtonHandle.bind(this);
        this.eightButtonHandle = this.eightButtonHandle.bind(this);
        this.nineButtonHandle = this.nineButtonHandle.bind(this);
        this.decimalButtonHandle= this.decimalButtonHandle.bind(this);
        this.multiplyClick = this.multiplyClick.bind(this);
        this.divideClick = this.divideClick.bind(this);
        this.subtractClick = this.subtractClick.bind(this);
        this.addClick = this.addClick.bind(this);
        this.equalsPress = this.equalsPress.bind(this);
    }
    clearButtonHandle() {
        this.props.clearCalculation();
    }
    zeroButtonHandle() {
        this.props.updateOperand(0);
    }
    oneButtonHandle() {
        this.props.updateOperand(1);
    }
    twoButtonHandle() {
        this.props.updateOperand(2);
    }
    threeButtonHandle() {
        this.props.updateOperand(3);
    }
    fourButtonHandle() {
        this.props.updateOperand(4);
    }
    fiveButtonHandle() {
        this.props.updateOperand(5);
    }
    sixButtonHandle() {
        this.props.updateOperand(6);
    }
    sevenButtonHandle() {
        this.props.updateOperand(7);
    }
    eightButtonHandle() {
        this.props.updateOperand(8);
    }
    nineButtonHandle() {
        this.props.updateOperand(9);
    }
    decimalButtonHandle() {
        this.props.updateOperand('.');
    }
    multiplyClick() {
        this.props.addOperator('*');
    }
    divideClick() {
        this.props.addOperator('/');
    }
    subtractClick() {
        this.props.addOperator('-');
    }
    addClick() {
        this.props.addOperator('+');
    }
    equalsPress() {
        this.props.calculatingExpression();
    }
    render() {
        return (
            <div id="keyboard-container">
                <button id="clear" onClick={this.clearButtonHandle}>C</button>
                <button id="divide" className="yellow-key" onClick={this.divideClick}>/</button>
                <button id="multiply" className="yellow-key" onClick={this.multiplyClick}>x</button>
                <button id="seven" className="normal-key" onClick={this.sevenButtonHandle}>7</button>
                <button id="eight" className="normal-key" onClick={this.eightButtonHandle}>8</button>
                <button id="nine" className="normal-key" onClick={this.nineButtonHandle}>9</button>
                <button id="subtract" className="purple-key" onClick={this.subtractClick}>-</button>
                <button id="four" className="normal-key" onClick={this.fourButtonHandle}>4</button>
                <button id="five" className="normal-key" onClick={this.fiveButtonHandle}>5</button>
                <button id="six" className="normal-key" onClick={this.sixButtonHandle}>6</button>
                <button id="add" className="purple-key" onClick={this.addClick}>+</button>
                <button id="one" className="normal-key" onClick={this.oneButtonHandle}>1</button>
                <button id="two" className="normal-key" onClick={this.twoButtonHandle}>2</button>
                <button id="three" className="normal-key" onClick={this.threeButtonHandle}>3</button>
                <button id="equals" className="purple-key" onClick={this.equalsPress}>=</button>
                <button id="zero" className="normal-key" onClick={this.zeroButtonHandle}>0</button>
                <button id="decimal" className="normal-key" onClick={this.decimalButtonHandle}>.</button>
            </div>
        );
    }
}

export default DisplayKeyboard;
