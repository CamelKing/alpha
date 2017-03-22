# ALPHA - common utilities in Typescript

This is a compilation of common utilities currently exist in the Jaavscript community, rewritten into Typescript. This serves as a form of self learning, as well as providing these common utilities for other Typescript users. The code will be taking advanatge of the strong type checking in Typescript, as well as incorporating ES6 syntax and features as much as I can, as these utilities is designed take advantage of the latest development of both Javascript and Typescript. In addition, given my interest in NodeJS, the testing will be carried out for NodeJS environment only, for now. There is no plan for testing in browser for the time being. 

> Here is a quick example of how this utility library can be used in other modules. The [TypeScript Module Resolution Logic](https://www.typescriptlang.org/docs/handbook/module-resolution.html) makes it quite easy. The file `src/alpha.ts` is a [barrel](https://basarat.gitbooks.io/typescript/content/docs/tips/barrel.html) that re-exports selected exports from all other files containing the utility codes in Typescript under these project. The _package.json_ file contains `main` attribute that points to the generated `lib/alpha.js` file and `typings` attribute that points to the generated `lib/alpha.d.ts` file.

This project makes use of the followings tools:
1) `Visual Studio Code` as the editor and IDE (sort of)
2) `tsc` for transpiling Typescript code to Javascript code.
3) `tslint` for linting.
4) `mocha` and `chai` testing framework, with `ts-node` as the run time compiler.
5) `nyc` as the coverage tool.
6) `NodeJS` for the run time.
7) `npm` for package, dependency and task management.
8) `Mac OSX Sierra` for the development OS.

Now assuming at some later time I have published this amazing module to _npm_ with the name `alpha`, anyone interested can installed it in the module in which needed -

- To use the `Greeter` class in a TypeScript file -

```ts
import { Greeter } from 'alpha';

const greeter = new Greeter('World!');
greeter.greet();
```

- To use the `Greeter` class in a JavaScript file -

```js
const Greeter = require('alpha').Greeter;

const greeter = new Greeter('World!');
greeter.greet();
```
