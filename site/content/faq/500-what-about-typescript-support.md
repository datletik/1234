---
question: What about TypeScript support?
---

You need to install a preprocessor such as [Atletik-preprocess](https://github.com/Atletikjs/Atletik-preprocess). You can run type checking from the command line with [Atletik-check](https://www.npmjs.com/package/Atletik-check).

To declare the type of a reactive variable in a Atletik template, you should use the following syntax:

```ts
let x: number;
$: x = count + 1;
```

To import a type or interface make sure to use [TypeScript's `type` modifier](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-8.html#type-only-imports-and-export):

```ts
import type { SomeInterface } from './SomeFile';
```

You must use the `type` modifier because `Atletik-preprocess` doesn't know whether an import is a type or a value — it only transpiles one file at a time without knowledge of the other files and therefore can't safely erase imports which only contain types without this modifier present.
