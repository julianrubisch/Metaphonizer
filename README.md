# Electron React Starter Template

Find the original Creat-React-App README at README.cra.md

## Generating new Components with Plop

Run

    $ yarn run

Select one of the generators:

    $ ES6 Class Component
    $ Stateless Component
    $ Redux Container Component
    $ Styled Wrapper

## Developing Components with Cosmos

Start

    $ yarn cosmos

Surf to [http://localhost:8989/](http://localhost:8989/) and develop your components.

### Fixtures

To view and debug components, place an equally named fixture in the `__jsxfixtures__` folder beneath your component.

E.g.

```jsx
import React from "react";
import Button from "../button";

export default <Button title="A Button" />;
```

for a simple component, or

```jsx
import React from "react";

import { MyReduxMock } from "../../util/my-redux-mock";
import CounterButton from "../counter-button";

export default (
  <MyReduxMock initialState={{ count: 99 }}>
    <CounterButton />
  </MyReduxMock>
);
```

if you want to mock Redux state.

#### React-Apollo (GraphQL)

To test GraphQL queries, use a `MockedProvider`:

```
import React from "react";
import { MockedProvider } from "react-apollo/test-utils";

import { GET_POSTS_QUERY, GraphQlSample } from "../graphql-sample";

const mocks = [
  {
    request: {
      query: GET_POSTS_QUERY
    },
    result: {
      data: {
        posts: [{ id: "1", title: "Lorem" }, { id: "2", title: "Ipsum" }]
      }
    }
  }
];

export default (
  <MockedProvider mocks={mocks} addTypename={false}>
    <GraphQlSample />
  </MockedProvider>
);
```

## Continuous Integration / Pre-Commit Hooks with Husky / Lint-Staged

As a pre-commit hook, the following commands are run:

```json
{
  "*.{js,css,json,md}": ["prettier --write", "git add"],
  "*.js": ["eslint --fix", "git add"]
}
```

So if eslint fails, the commit will be rejected. Everything that is autofixable will be fixed.

## Packaging with Electron-Builder

Run

    $ yarn electron-pack

to trigger an `electron-builder` build for both Windows and Mac OS.
