# ALPHA - common utilities in Typescript

[![Coverage Status](https://coveralls.io/repos/github/CamelKing/alpha/badge.svg?branch=master)](https://coveralls.io/github/CamelKing/alpha?branch=master)

This is a compilation of common utilities currently exist within the Jaavscript community, ported/rewritten/refactored into Typescript. This project started as a form of self learning (for both Javascript and Typescript, on various techniques and patterns available on Guthub), and subsequently making these common utilities available for other Typescript users (and Javascript community as well, but they most likely already have access to them in other forms). 

The code will be taking advanatge of the strong type checking in Typescript (hence less type checks like those in Javascript), as well as incorporating ES6/ES-Next syntax and features which is supported by NodeJS as much as I can, as that would be the targeted environemnt that I am working towards. All testing will be carried out in NodeJS environment ONLY, at least for now. There is no plan for testing in browser for the time being. 

> Here is a quick example of how this utility library can be used in other modules. The [TypeScript Module Resolution Logic](https://www.typescriptlang.org/docs/handbook/module-resolution.html) makes it quite easy. The file `src/alpha.ts` is a [barrel](https://basarat.gitbooks.io/typescript/content/docs/tips/barrel.html) that re-exports all the exports from every modules/files containing the utility codes in Typescript under these project. The _package.json_ file contains `main` attribute that points to the generated `lib/alpha.js` file and `typings` attribute that points to the generated `lib/alpha.d.ts` file.

This project makes use of the followings tools:
1) `tsc` for transpiling Typescript code to Javascript code.
2) `tslint` for linting.
3) `mocha` and `chai` testing framework, with `ts-node` as the run time compiler.
4) `nyc` as the coverage reporting tool.
5) `NodeJS` for the run time.
6) `npm` for package, dependency and task management.
7) `Github` for the repository.
8) `Coveralls` for the coverage report history. 
9) `Visual Studio Code` as the editor and IDE (sort of)
10) `Mac OSX Sierra` for the development OS.

The design and coding philoshophy behind all modules (as much as possible):
1) functional in nature
  - no change of passed in variables
  - no change of states
  - objective is merely to return the correct computed result
2) Readability comes before Performance 
  - as this is meant to be a 'self learning' exercise for myself, and whoever using these
  - most codes are to be self explanatory, in the event I fell they are not, I will include comments (could be too long for some)
3) Having said that, I will still look into optimising the code (for NodeJS and V8's execution ) as much as possible (without sacrificing readability, or with extra comments explaining).
4) Do not reproduce any code that is implemented in ES6/ES7. Minor performance improvement is not worth the impending changes once need to carry out when support comes in widely in the next 12 months.

To Do:
4) Class/Object Oriented
  - implement all utilities in the form of a class, with the following objectives:
    - easier to code
    - easier to read/understand
    - easier to maintain
    - encapsulation hopefully hide complexity and avoid potential error
  - class would also act as a mean to group utilities together by category

Now assuming at some point in future I would have published this module to _npm_ with the name `alpha`, anyone interested can download/, installed and make good use of it -

- Example: To use the `Greeter` class in a TypeScript module -

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

This date: March 24, 2017
Last revision: April 2, 2017
Author: Camel King
