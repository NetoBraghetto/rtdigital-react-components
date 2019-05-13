---
name: Modal
---
# Modal

import Example from './Example';

<Example />

## Usage

```jsx
<Modal title="Titulo" onClose={ this.closeModal }>
    Content
</Modal>
```

## Props

|Prop|Description|Values|Default|
|---|---|---|---|
|title|Title modal|any|''|
|large|bootstrap large modal|boolean|false|
|maxWidth|Modal max width ex: '80%', '900px'|boolean|false|
|onClose|Function to close the Modal|function|-|

## Examples

```jsx
import { Modal, Button } from 'rtdigital-react-components';

import React, { Component } from 'react';

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
```
