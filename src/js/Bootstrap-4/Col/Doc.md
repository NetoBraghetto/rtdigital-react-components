---
name: Col
---
# Col

## Usage

```jsx
<Col sm="12">Content</Col>
```

## Props

|Prop|Description|Values|Default|
|---|---|---|---|
|className|Extra classes|string|''|
|xl|Number of col|number: [1-12]|'-'|
|lg|Number of col|number: [1-12]|'-'|
|md|Number of col|number: [1-12]|'-'|
|sm|Number of col|number: [1-12]|'-'|
|xs|Number of col|number: [1-12]|'-'|
|oXl|Number of col to offset|number: [1-12]|'-'|
|oLg|Number of col to offset|number: [1-12]|'-'|
|oMd|Number of col to offset|number: [1-12]|'-'|
|oSm|Number of col to offset|number: [1-12]|'-'|
|oXs|Number of col to offset|number: [1-12]|'-'|

## Examples

```jsx
import { Col } from 'rtdigital-react-components';

<Col sm="12">Content</Col>

<Col oSm="2" sm="10">Content</Col>

<Col xl="6" md="8" sm="12">Content</Col>

```
