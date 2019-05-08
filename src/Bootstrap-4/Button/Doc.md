---
name: Button
---
# Button

import { Button } from './Button'

<Button>Click</Button>

## Usage

```jsx
<Button classType="primary" outiline tooltip="Tip" onClick={ this.action }>Click me</Button>
```



## Props

|Prop|Description|Values|Default|
|---|---|---|---|
|type|Button prop type|string|'button'|
|onClick|On click event|function|-|
|href|url|string|null|
|outline|If button is outlined|boolean|false|
|className|Extra classes|string|''|
|classType|Button color|One of ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']|secondary|
|target|Anchor target prop|One of ['_blank', '_self', '_parent', '_top']|null|
|tooltip|Add tooltip to button|string|-|

## Examples

```jsx
import { Button } from 'rtdigital-react-components';

<Button onClick={ this.action }>Click me</Button>

<Button href="__LINK__">Click me</Button>

<Button classType="primary" outiline tooltip="Tip" onClick={ this.action }>Click me</Button>

```
