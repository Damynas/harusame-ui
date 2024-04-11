# Harusame UI

React component library to simplify your web development experience

## Storybook

<a href="https://damynas.github.io/harusame-ui/" target="_blank">Visit Harusame UI storybook!</a>

## Installation

In order to use Harusame UI components in your project you'll need to follow these steps:

1. Create .nmprc file in your repository and add these lines in order to access the package:

```sh
@damynas:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=***REMOVED***
```

2. Install the `@damynas/harusame-ui` package:

```sh
# with npm
$ npm i @damynas/harusame-ui@latest

# with yarn
$ yarn add @damynas/harusame-ui@latest

# with pnpm
$ pnpm add @damynas/harusame-ui@latest
```

## Usage

Here is an example of how to use the `Harusame UI` library in your project:

```tsx
import { Button } from '@damynas/harusame-ui';

const Example = () => {
  return (
    <Button
      text='Button'
      variant='contained'
    />
  );
};

export { Example };
```
