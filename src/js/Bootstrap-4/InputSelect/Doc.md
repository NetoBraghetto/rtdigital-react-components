---
name: InputSelect
---
# InputSelect

## Usage

```jsx
<InputSelect
    label="city_id"
    link={ this.props.linkState('city_id') }
    error={ this.props.getError('city_id') }
    options={ [] }
/>
```

```jsx
<InputSelect
    label="city_id"
    link={ this.props.linkState('city_id') }
    error={ this.props.getError('city_id') }
    options={ [
        {id: 1, uf: 'SP'},
        {id: 2, uf: 'RJ'},
    ] }
    selectLabel="uf"
    selectkey="id"
/>
```
