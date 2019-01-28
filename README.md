# WJSC

This is a TypeScript implementation of the WACC spring lab exercise.

## Installing & Building

To install all dependencies,

```
npm install
```

To compile and test source files,

```
npm run all
```

To clean build directories,

```
npm run clean
```

## Contributing

### Code Style

TSLint enforces strict code style regulations. Specific rules include:

```ts
/* Example rules:
 * var is discouraged due to global scoping
 * double quotes should be single quotes
 * semicolons are unnecessary */

var string = "string";  // Wrong
let string = 'string'   // Correct
```

Using specifc types is strongly encouraged. This is so TypeScript can correctly analyse the code and help locate code errors.

```ts
/* Ambiguous typing is bad */
function f(x) {
  return 'hello'
} // This will cause a TypeScript error about ambiguous typing

/* Don't use any */
function g(x: any): any {
  return true
} // This will not cause an error

/* This is preferred */
function h(x: number): string {
  return 'world'
}
```

### Commit Style

Write your commits like

```md
[Issue Reference] <usernames>
* List of changes
* List of changes
```
