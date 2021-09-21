# Snake and camel case formatter

## Installation

This is a **Node.js** module available through the [npm registry](https://www.npmjs.com/).

Before installing, [download and install Node.js](https://nodejs.org/en/download/).

Installation is done using the **npm install command**:

```prompt
npm install @badass-team-code/formatted-cases-words
```

Or using the yarn:

```prompt
yarn add @badass-team-code/formatted-cases-words
```

## Quick Start

After installation, import the functions for formats which currently are: **formateCamelCaseKeysForSnakeCase** and **formateSnakeCaseKeysForCamelCase**

```js
import {
  formateCamelCaseKeysForSnakeCase,
  formateSnakeCaseKeysForCamelCase,
} from "@baddas-team/formatted-cases-words";
```

## Examples

By passing the following json to the formatting function:

```js
const json = formateCamelCaseKeysForSnakeCase({
  messageText: "Example",
  dateText: new Date(),
  array: [
    {
      arrayText: "",
    },
  ],
});
```

The result is:

```json
{
  "message_text": "Example",
  "date_text": "2021-09-20T23:40:43.381Z",
  "array": [{ "array_text": "" }]
}
```

Now when using the reverse:

```js
const json = formateSnakeCaseKeysForCamelCase({
  message_text: "Example",
  date_text: new Date(),
  array: [{ array_text: "" }],
});
```

The result is:

```json
{
  "messageText": "Example",
  "dateText": "2021-09-20T23:41:58.766Z",
  "array": [{ "arrayText": "" }]
}
```
