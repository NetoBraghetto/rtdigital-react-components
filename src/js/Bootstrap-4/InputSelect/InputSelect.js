import Types from 'prop-types';
import React, { Component } from 'react';

export class InputSelect extends Component {
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
        let input = (
            <React.Fragment>
                <select className={ inputClas } value={ this.props.link.value } onChange={ this.props.link.onChange }>
                    <option value="" />
                    { this.props.options.map((item) => {
                        return (
                            <option key={ item[this.props.selectkey] } value={ item[this.props.selectkey] }>
                                { item[this.props.selectLabel] }
                            </option>
                        );
                    }) }
                </select>
                { error }
            </React.Fragment>
        );

        if (this.props.prepend) {
            input = (
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text">{ this.props.prepend }</span>
                    </div>
                    { error }
                    { input }
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

InputSelect.displayName = 'InputSelect';
InputSelect.defaultProps = {
    options: [],
    selectLabel: 'name',
    selectkey: 'id',
    help: '',
};
InputSelect.propTypes = {
    help: Types.string,
    options: Types.arrayOf(Types.object)
};

export default InputSelect;
