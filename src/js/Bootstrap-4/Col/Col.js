import React, { Component } from 'react';

export class Col extends Component {
    render() {
        const className = this.props.className
            + (this.props.xl ? `col-xl-${this.props.xl}` : '')
            + (this.props.lg ? `col-lg-${this.props.lg}` : '')
            + (this.props.md ? `col-md-${this.props.md}` : '')
            + (this.props.sm ? `col-sm-${this.props.sm}` : '')
            + (this.props.xs ? `col-${this.props.xs}` : '')

            + (this.props.oXl ? `offset-xl-${this.props.oXl}` : '')
            + (this.props.oLg ? `offset-lg-${this.props.oLg}` : '')
            + (this.props.oMd ? `offset-md-${this.props.oMd}` : '')
            + (this.props.oSm ? `offset-sm-${this.props.oSm}` : '')
            + (this.props.oXs ? `offset-${this.props.oXs}` : '');
        return (
            <div className={ className }>{ this.props.children }</div>
        );
    }
}

Col.displayName = 'Col';
Col.defaultProps = {
    className:'',
};

export default Col;
