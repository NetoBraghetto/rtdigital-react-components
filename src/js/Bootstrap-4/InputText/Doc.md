---
name: InputText
---
# InputText

## Usage

```jsx
<InputText
    label="Nome"
    link={ this.props.linkState('name') }
    error={ this.props.getError('name') }
/>
```

```jsx
<InputText
    label="Nome"
    link={ this.props.linkState('name') }
    error={ this.props.getError('name') }
    autoFocus
/>
```

### Masked input
```jsx
<InputText
    label="Nome"
    link={ this.props.linkState('name') }
    error={ this.props.getError('name') }
    mask={ NumericMask }
/>
```
### With help text
```jsx
<InputText
    label="Nome"
    link={ this.props.linkState('name') }
    error={ this.props.getError('name') }
    help="Help_text"
/>
```
