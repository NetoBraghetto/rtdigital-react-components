import React, { Component } from 'react';
import Modal from './Modal';
import Button from './../Button/Button';

export class ModalExample extends Component {
    constructor(props) {
        super(props);
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
        this.state = {
            isModalOpen: false
        };
    }

    open() {
        this.setState({
            isModalOpen: true
        });
    }

    close() {
        this.setState({
            isModalOpen: false
        });
    }

    render() {
        let modal = null;
        if (this.state.isModalOpen) {
            modal =  (
                <Modal title="Title" onClose={ this.close }>
                    Content
                </Modal>
            );
        }

        return (
            <div>
                { modal }
                <Button onClick={ this.open } >Open modal</Button>
            </div>
        );
    }
}

ModalExample.displayName = 'ModalExample';
export default ModalExample;
