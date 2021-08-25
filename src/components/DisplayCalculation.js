import React, { Component } from 'react';

class DisplayCalculation extends Component {
    render() {
        return (
            <div id="monitor-calculator">
                <h5>{this.props.expression}</h5>
                <h2 id="display">{this.props.operand}</h2>
            </div>
        );
    }
}

export default DisplayCalculation;
