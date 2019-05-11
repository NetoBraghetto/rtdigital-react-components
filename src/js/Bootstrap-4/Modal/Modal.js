import Types from 'prop-types';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
if (window.__rtdigitalReactComponentsModalIndex === undefined) {
    window.__rtdigitalReactComponentsModalIndex = 0;
}

export class Modal extends Component {
    constructor(props) {
        super(props);
        window.__rtdigitalReactComponentsModalIndex += 1;
        this.modalID = window.__rtdigitalReactComponentsModalIndex;
        this.wrapper = document.createElement('div');
        this.wrapper.className = 'modal-root-wrapper';
        this.shortcuts = this.shortcuts.bind(this);
        this.renderModal = this.renderModal.bind(this);
    }

    componentDidMount() {
        document.body.appendChild(this.wrapper);
        document.body.addEventListener('keydown', this.shortcuts);
        this.renderModal();
    }

    componentDidUpdate() {
        this.renderModal();
    }

    componentWillUnmount() {
        window.__rtdigitalReactComponentsModalIndex -= 1;
        document.body.removeEventListener('keydown', this.shortcuts);
        ReactDOM.unmountComponentAtNode(this.wrapper);
        document.body.removeChild(this.wrapper);
    }

    shortcuts(e) {
        switch (e.which) {
            case 27:
                e.preventDefault();
                if (typeof this.props.onClose === 'function' && this.modalID === window.__rtdigitalReactComponentsModalIndex) {
                    this.props.onClose();
                }
                break;
            default:
                break;
        }
    }

    renderModal() {
        let close = null,
            modalClass = 'modal-dialog' + (this.props.large === true ? ' modal-lg' : '');
        if (typeof this.props.onClose === 'function') {
            close = (
                <button type="button" className="close" aria-label="Close" onClick={ this.props.onClose }>
                    <span aria-hidden="true">&times;</span>
                </button>
            );
        }
        let header = this.props.title ? (
            <div className="modal-header">
                <h4 className="modal-title">{ this.props.title }</h4>
                { close }
            </div>
        ) : null;

        const styleDialog = {};
        if (this.props.maxWidth) {
            styleDialog.maxWidth = this.props.maxWidth;
        }

        ReactDOM.render(
            <div className="modal-open">
                <div className="modal" tabIndex="-1" role="dialog" style={ { display: 'block' } }>
                    <div className={ modalClass } role="document" style={ styleDialog }>
                        <div className="modal-content">
                            { header }
                            <div className="modal-body">
                                { this.props.children }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal-backdrop fade show" />
            </div>,
            this.wrapper,
        );
    }

    render() {
        return null;
    }
}

Modal.displayName = 'Modal';
Modal.defaultProps = {
    title: '',
};
Modal.propTypes = {
    maxWidth: Types.string,
    large: Types.bool,
    title: Types.string,
    onClose: Types.func,
    children: Types.any,
};
export default Modal;
