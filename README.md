# type-expand

Utilities to expand TypeScript types shown by IntelliSense in Visual Studio Code.

Inspired by https://stackoverflow.com/a/57683652.

## Installation

```shell
npm install --save-dev type-expand
```

## Usage

Commented lines are the results shown in hover info when your cursor hovers over the types.

```typescript
import type { Expand, ExpandDeep } from "type-expand";

type FooError = { foo: Error };
type BarError = { bar: Error };

type FooBarError = FooError & BarError;
// type FooBarError = FooError & BarError;

type ExpandedFooBarError = Expand<FooBarError>;
// type ExpandedFooBarError = {
//   foo: Error;
//   bar: Error;
// };

type DeepExpandedFooBarError = ExpandDeep<FooBarError>;
// type DeepExpandedFooBarError = {
//   foo: {
//     name: string;
//     message: string;
//     stack?: string;
//   };
//   bar: {
//     name: string;
//     message: string;
//     stack?: string;
//   };
// };
```

Unlike other utility types, `Expand` and `ExpandDeep` do not transform type in any way.

## See Also

- [`typesafeconfig`](https://github.com/shian15810/typesafeconfig)
