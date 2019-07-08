import Types from 'prop-types';
import React, { Component } from 'react';

export class Checkbox extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(e){
        let value = e.target.checked ? this.props.checkedOption : this.props.uncheckedOption;
        if (typeof this.props.hookOnChange === 'function') {
            value = this.props.hookOnChange(value);
        }
        this.props.link.onChange({
            target: {
                value: value
            }
        });
    }

    render() {
        let checked = this.props.link.value === this.props.checkedOption;
        let help = null;
        let inputClas = 'custom-control-input';
        let labelClass = 'custom-control-label';
        if (this.props.help.length > 0) {
            help = <small className="form-text text-muted">{ this.props.help }</small>
        }
        if (checked) {
            labelClass += ' text-primary';
        }
        return (
            <div className="form-group">
                <label className="custom-control custom-checkbox">
                    <input
                        onChange={ this.onChange }
                        name={ this.props.link.name }
                        type="checkbox"
                        className={ inputClas }
                        checked={ checked }
                    />
                    <span className={ labelClass }>{ this.props.label }</span>
                </label>
                { help }
            </div>
        );
    }
}

Checkbox.displayName = 'Checkbox';
Checkbox.defaultProps = {
    checkedOption: 1,
    uncheckedOption: 0,
    help: '',
};
Checkbox.propTypes = {
    link: Types.object.isRequired,
    label: Types.string,
    help: Types.string,
    autoFocus: Types.bool,
};

export default Checkbox;
