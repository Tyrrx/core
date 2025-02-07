---
title: head
description: head
layout: ../../../../layouts/MainLayout.astro
---
Returns the first value of an array.
Throws an Error if the array is empty.

## Type

```ts
type head = <E>(s: Array<E>) => E
```

## Example

```ts
import * as ARRAY from 'fnxt/array';

const array = [2, 3, 4];
const head = ARRAY.head;
head(array) // -> 2
```

## See Also

- [tail](/core/en/array/operator/tail)
- [init](/core/en/array/operator/init)
- [last](/core/en/array/operator/last)

```
|  head  |              tail              |
|---[0]-----[1]-----[2]-----[3]-----[4]---|
|              init              |  last  |
```
