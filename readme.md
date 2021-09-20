# Snake and camel case formatter

## Installation

This is a **Node.js** module available through the [npm registry](https://www.npmjs.com/).

Before installing, [download and install Node.js](https://nodejs.org/en/download/).

Installation is done using the **npm install command**:

> npm install @baddas-team/formatted-cases-words

Or using the yarn:

> yarn add @baddas-team/formatted-cases-words

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
  "date_text": "2021-09-20T23:19:51.400Z",
  "array": [{ "array_text": "" }]
}
```
