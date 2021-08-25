import React, { Component } from 'react';
import DisplayCalculation from './DisplayCalculation';
import DisplayKeyboard from './DisplayKeyboard';

class CalculatorApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            operand: '0',
            expression: '',
        }
        this.updateOperand = this.updateOperand.bind(this);
        this.updateExpression = this.updateExpression.bind(this);
        this.clearCalculation = this.clearCalculation.bind(this);
        this.isOperator = this.isOperator.bind(this);
        this.addOperator = this.addOperator.bind(this);
        this.calculatingExpression = this.calculatingExpression.bind(this);
    }
    updateExpression(value) {
        this.setState((state) => {
            return {
                expression: state.expression + value
            }
        })
    }

    updateOperand(value) {
        if (this.state.operand.includes('.') && value === '.') return;
        if (this.state.operand === '0' && value === 0) return;

        if (this.state.operand === '0' || this.isOperator(this.state.operand)) {
            this.setState({operand: value.toString()});
            this.updateExpression(value);
            return;
        }

        this.setState((state) => {
            return {
                operand: this.state.operand + value
            }
        });
        this.updateExpression(value);
    }

    isOperator(value) {
        const listOperator = ['+', '-', '*', '/'];
        return listOperator.includes(value) ? true : false;
    }

    addOperator(operator) {
        this.setState({operand: operator});

        const length = this.state.expression.length; // Get Length of Expression
        
        if (!this.isOperator(this.state.expression[length - 1])) {
            this.updateExpression(operator);
            return;
        }
        
        if (operator === '-') {
            if (this.isOperator(this.state.expression[length - 1]) && this.isOperator(this.state.expression[length - 2])) return;
            this.updateExpression(operator);
            return;
        }

        this.setState((state) => {
            if (this.isOperator(this.state.expression[length - 1]) && this.isOperator(this.state.expression[length - 2])) {
                return {
                    expression: state.expression.slice(0, length - 2) + operator
                }
            } else {
                return {
                    expression: state.expression.slice(0, length - 1) + operator
                }
            }
        });
    }

    calculatingExpression() {
        let mainExpression = this.state.expression.replace(/--/g, "+");
        this.setState((state) => {
            return {
                expression: eval(mainExpression),
                operand: eval(mainExpression)
            }
        })
    }

    clearCalculation() {
        this.setState({
            expression: '',
            operand: '0'
        });
    }
    render() {
        return (
            <div id="calculator-container">
                <DisplayCalculation 
                    expression={this.state.expression}
                    operand={this.state.operand}
                />
                <DisplayKeyboard
                    updateOperand={this.updateOperand}
                    clearCalculation= {this.clearCalculation}
                    addOperator={this.addOperator}
                    calculatingExpression={this.calculatingExpression}/>
            </div>
        );
    }
}

export default CalculatorApp;
