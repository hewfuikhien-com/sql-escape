# SQL Escape

![node](https://img.shields.io/node/v/@hewfuikhien.com/sql-escape)
![download](https://img.shields.io/npm/dm/@hewfuikhien.com/sql-escape)
![size](https://img.shields.io/github/languages/code-size/hewfuikhien-com/sql-escape)

## Installation

```sh
npm install @hewfuikhien.com/sql-escape --save
yarn add @hewfuikhien.com/sql-escape
```

## Example

```ts
import SQLEscape from '@hewfuikhien.com/sql-escape';
const sql = SQLEscape('INSERT INTO %I VALUES(%L)', 'books', "O'Reilly");
console.log(sql);
```

```js
const SQLEscape = require('@hewfuikhien.com/sql-escape');
const sql = SQLEscape('INSERT INTO %I VALUES(%L)', 'books', "O'Reilly");
console.log(sql);
```

## Formats

- `%s` formats the argument value as a simple string. A null value is treated as an empty string.
- `%Q` formats the argument value as a [dollar quoted string](http://www.postgresql.org/docs/8.3/interactive/sql-syntax-lexical.html#SQL-SYNTAX-DOLLAR-QUOTING). A null value is treated as an empty string.
- `%I` treats the argument value as an SQL identifier, double-quoting it if necessary. It is an error for the value to be null.
- `%L` quotes the argument value as an SQL literal. A null value is displayed as the string NULL, without quotes.
- `%%` In addition to the format specifiers described above, the special sequence %% may be used to output a literal % character.
