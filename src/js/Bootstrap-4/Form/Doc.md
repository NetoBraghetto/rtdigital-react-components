---
name: Form
---
# Form

import './../../../styles/loading.scss';
import './../../../styles/form.scss';
import { Form } from './Form';

<Form loading={ true }>
    <div>
        <div>Nome: </div>
        <input type="text" />
    </div>
    <div>
        <div>E-mail: </div>
        <input type="email" />
    </div>
    <div>
        <button type="button">Save</button>
    </div>
</Form>

## Usage

```jsx
<Form onSubmit={ this.onSubmit } loading={ this.props.loading }>
    <Row>
        <Col sm="12">
            <InputText
                label="Nome"
                link={ this.props.linkState('name') }
                error={ this.props.getError('name') }
                autoFocus
            />
        </Col>
    </Row>
</Form>
```
