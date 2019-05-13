import Loading from './../Loading/Loading';
import React, { Component } from 'react';

export class Form extends Component {
    constructor(props) {
        super(props);
        this.renderLoading = this.renderLoading.bind(this);
    }

    renderLoading() {
        if (this.props.loading) {
            return (
                <div className="form-loading">
                    <div className="form-loading-element">
                        <Loading />
                    </div>
                </div>
            );
        }
    }

    render() {
        let props = Object.assign({}, this.props);
        delete props.loading;
        return (
            <form className="position-relative" { ...props }>
                { this.renderLoading() }
                { this.props.children }
            </form>
        );
    }
}

Form.displayName = 'Form';

export default Form;
