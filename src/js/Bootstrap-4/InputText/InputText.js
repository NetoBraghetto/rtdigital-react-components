import Types from 'prop-types';
import React, { Component } from 'react';

export class InputText extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(e){
        if (typeof this.props.mask === 'function') {
            e.target.value = this.props.mask(e.target.value);
        }
        this.props.link.onChange(e);
    }

    render() {
        let help = null;
        let error = null;
        let prepend = null;
        let append = null;
        let inputClas = 'form-control';
        if (this.props.help.length > 0) {
            help = <small className="form-text text-muted">{ this.props.help }</small>
        }
        if (this.props.error) {
            inputClas += ' is-invalid';
            error = <div className="invalid-feedback">{ this.props.error }</div>
        }
        let input = (
            <React.Fragment>
                <input
                    maxLength={ this.props.maxLength }
                    name={ this.props.link.name }
                    onFocus={ this.props.onFocus }
                    autoFocus={ this.props.autoFocus }
                    className={ inputClas }
                    value={ this.props.link.value }
                    onChange={ this.onChange }
                    type="text"
                />
                { error }
            </React.Fragment>
        );

        if (this.props.prepend) {
            prepend = (
                <div className="input-group-prepend">
                    <span className="input-group-text">{ this.props.prepend }</span>
                </div>
            );
        }

        if (this.props.append) {
            append = (
                <div className="input-group-append">
                    <span className="input-group-text">{ this.props.append }</span>
                </div>
            );
        }

        if (prepend || append) {
            input = (
                <div className="input-group">
                    { prepend }
                    { input }
                    { append }
                </div>
            );
        }

        return (
            <div className="form-group">
                <label>{ this.props.label }</label>
                { input }
                { help }
            </div>
        );
    }
}

InputText.displayName = 'InputText';
InputText.defaultProps = {
    maxLength: null,
    pre: null,
    onFocus: null,
    help: '',
};
InputText.propTypes = {
    link: Types.object.isRequired,
    label: Types.string,
    help: Types.string,
    autoFocus: Types.bool,
};

export default InputText;
