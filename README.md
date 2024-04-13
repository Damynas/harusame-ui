# Harusame UI

React component library to simplify your web development experience

## Storybook

<a href="https://damynas.github.io/harusame-ui/" target="_blank">Visit Harusame UI storybook</a>

## Installation

In order to use Harusame UI components in your project you'll need to follow these steps:

1. Create a Github personal access token:

   - Step 1: Sign in to GitHub<br>
     - If you don't have a GitHub account, you'll need to create one. If you already have an account, sign in to GitHub using your credentials.
   - Step 2: Access <i>Personal Access Tokens</i> settings<br>
     - Once logged in, navigate to your <b>GitHub Settings</b> by clicking on your profile picture in the top right corner of the page and selecting <b>Settings</b> from the dropdown menu.
     - In the left sidebar, click on <b>Developer settings</b>.
     - From the options that appear, click on <b>Personal access tokens</b>.
   - Step 3: Generate a token<br>
     - Click on the <b>Generate new token</b> button.
     - Provide a descriptive name for your token in the <i>Note</i> field. This will help you identify its purpose later.
     - Under <b>Select scopes</b> select the <b>read:packages</b> option.
     - Click the <b>Generate token</b> button at the bottom of the page to generate your access token.
   - <b>IMPORTANT</b>
     - Treat your token like a password. Do not share it publicly or store it in insecure locations such as code repositories.

2. Create <i>.nmprc</i> file in your project folder and add these lines in order to access the package:

```sh
@damynas:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_TOKEN
```

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Replace YOUR_TOKEN with your own GitHub personal access token.

3. Install the `@damynas/harusame-ui` package:

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
