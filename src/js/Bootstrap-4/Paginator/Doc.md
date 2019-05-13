---
name: Paginator
---
# Paginator

## Usage

```jsx
<Paginator
    onPaginate={ this.props.onPaginate }
    currentPage={ this.props.pagination.page }
    offset={ this.props.pagination.offset }
    total={ this.props.pagination.total }
/>
```

## Props

|Prop|Description|Values|Default|
|---|---|---|---|
|onPaginate*|On paginate event|function|-|
|currentPage*|The current page|numeric|-|
|total*|Total of items|numeric|-|
|offset|Number of items per page|numeric|10|
|showingPages|Max number of pages to show for large lists|numeric|3|
|hasPreviousReticents|Show reticents for large lists|boolean|true|
|hasNextReticents|Show reticents for large lists|boolean|true|

## Examples

```jsx
import { Paginator } from 'rtdigital-react-components';
<Paginator
    onPaginate={ function(page) { console.log(page); } }
    currentPage={ 1 }
    total={ 100 }
/>
```
