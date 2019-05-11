---
name: Tabs
---
# Tabs

import { Tabs } from './Tabs';

<Tabs querystring={ {} } titles={ ['Tab 1', 'Tab 2'] }>
    <div>Content tab 1</div>
    <div>Content tab 2</div>
</Tabs>

## Usage

```jsx
<Tabs querystring={ this.props.querystring } titles={ ['Tab 1', 'Tab 2'] }>
    <div>Content tab 1</div>
    <div>Content tab 2</div>
</Tabs>
```

## Props

|Prop|Description|Values|Default|
|---|---|---|---|
|querystring*|The url querystring as object ex: ?a=aa&b=bb must be passed as {"a": "aa", "b": "bb"}|object|'-'|
|title|Array of title for the tabs|array|'-'|
|tabKey|The querystring key for the tabs|string|'$tab'|

## Examples

```jsx
import { Tabs } from 'rtdigital-react-components';

<Tabs querystring={ this.props.querystring } titles={ ['Tab 1', 'Tab 2'] }>
    <div>Content tab 1</div>
    <div>Content tab 2</div>
</Tabs>

```
