import Types from 'prop-types';
import React, { Component } from 'react';

export class InputPassword extends Component {
    render() {
        let help = null;
        let error = null;
        let inputClas = 'form-control';
        if (this.props.help.length > 0) {
            help = <small className="form-text text-muted">{ this.props.help }</small>
        }
        if (this.props.error) {
            inputClas += ' is-invalid';
            error = <div className="invalid-feedback">{ this.props.error }</div>
        }

        return (
            <div className="form-group">
                <label>{ this.props.label }</label>
                <input
                    name={ this.props.link.name }
                    autoFocus={ this.props.autoFocus }
                    className={ inputClas }
                    value={ this.props.link.value }
                    onChange={ this.props.link.onChange }
                    type="password"
                    autoComplete="off"
                />
                { error }
                { help }
            </div>
        );
    }
}

InputPassword.displayName = 'InputPassword';
InputPassword.defaultProps = {
    help: '',
};
InputPassword.propTypes = {
    link: Types.object.isRequired,
    label: Types.string,
    help: Types.string,
    autoFocus: Types.bool,
};

export default InputPassword;
