import Types from 'prop-types';
import React, { Component } from 'react';

export class Button extends Component {
    render() {
        let commonProps = {
            className: 'btn btn-',
        };
        if (this.props.outline === true) {
            commonProps.className += 'outline-';
        }
        commonProps.className += this.props.classType + ' ' + this.props.className;

        if (this.props.href !== null) {
            commonProps.target = this.props.target;
            return (
                <a href={ this.props.href } { ...commonProps }>{ this.props.children }</a>
            );
        }
        return (
            <button type={ this.props.type } onClick={ this.props.onClick } { ...commonProps }>{ this.props.children }</button>
        );
    }
}

Button.displayName = 'Button';
Button.defaultProps = {
    target: null,
    type: 'button',
    classType: 'secondary',
    className: '',
    href: null,
    target: null,
};
Button.propTypes = {
    onClick: Types.func,
    target: Types.oneOf(['_blank', '_self', '_parent', '_top']),
    href: Types.string,
    className: Types.string,
    classType: Types.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']),
    outline: Types.bool,
    children: Types.any,
};


export default Button;
