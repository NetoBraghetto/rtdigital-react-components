import React, { Component } from 'react';

export class Row extends Component {
    render() {
        return (
            <div className={ `row ${this.props.className}` }>{ this.props.children }</div>
        );
    }
}

Row.displayName = 'Row';
Row.defaultProps = {
    className:'',
};

export default Row;
