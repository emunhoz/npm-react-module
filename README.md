## Template for NPM React Module + TypeScript <sup>[![Version Badge](http://versionbadg.es/emunhoz/npm-react-module.svg)](https://npmjs.org/package/your-name-example)</sup>

![Deploy Storybook](https://github.com/emunhoz/npm-react-module/workflows/Deploy%20Storybook/badge.svg)

#### About

A simple boilerplate to start building your own react library

What's included?

- [x] React
- [x] Typescript
- [x] Styled components with ThemeProvider 💅
- [x] Storybook with MDX Syntax
- [x] Testing library/react (Setup working with ThemeProvider)
- [x] Semantic release with commit-analyzer 

## 🛠 Setup

1. Clone this repo _(do not install all dependencies in this step)_
2. In `package.json` change `"name": "your-name-example"` to your lib name. Ex: `my-new-lib`
3. In `package.json` change the current version in `"version": "x.x.x"` to `"version": "0.0.0-development"`
4. Install all dependencies with `npm install`

## 🌎 Publishing

1. Create your Github repository: https://github.com/new
2. Link local repository to Github repository:

```
git remote add origin git@github.com:<username>/<repository-name>.git
git push -u origin master
```

In the next step we need to get Github and NPM tokens. This is needed in order for Semantic Release to be able to publish a new release for the Github repository and for the NPM registry.

3. [Create a token for Github](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line). You need to give the token repo scope permissions.

4. [Create a token in NPM](https://docs.npmjs.com/creating-and-viewing-authentication-tokens). You need to give the token Read and Publish access level.

Once you have the two tokens, you have to set them in your repository secrets config:

```
https://github.com/<username>/<repositoryname>/settings/secrets
```

Use `GH_TOKEN` and `NPM_TOKEN` as the secret names.

5. Create a new component with `npm run generate:component`. For example a Title component:

```
? What is your component name? Title => Type your component name here
✔  ++ /src/components/title/Title.tsx
✔  ++ /src/components/title/__tests__/Title.test.tsx
✔  ++ /src/components/title/styled.ts
✔  ++ /src/components/title/Title.stories.mdx
✔  ++ /src/components/title/index.ts
```

6. Add your new component at `src/index.ts`. For ex:
```
export { ThemeProvider } from 'styled-components'
export { default as theme, GlobalStyles } from './styles'

export * from './components/button'
export * from './components/title'
```

7. Commit and push changes

```
git add .
git commit -m "feat: add title component"
git push
```

8. If everything went well, you should see in the action results that every step was succesfully executed.

## 🚀 Development mode

1. Install all dependencies

   ```shell
   npm i
   ```

2. Show and build your components at `http://localhost:61622/`

   ```shell
   npm run storybook
   ```

## 🚨 Code standard

- [JavaScript Standard Style](https://standardjs.com/) - Javascript styleguide
- [Prettier](https://prettier.io/) - Code formatter
- [ESLint](https://eslint.org/) - Lint to quickly find problems
- [Stylelint](https://stylelint.io/) - A mighty, modern linter that helps you avoid errors and enforce conventions in your styles

## 🚥 Testing

- [Jest](https://jestjs.io/) - A delightful JavaScript Testing Framework with a focus on simplicity
- [Testing Library](https://testing-library.com/) - Simple and complete testing utilities that encourage good testing practices

### Others commands

`npm run generate:component` to create a component folder structure

`npm run test:ci` to run test code coverage

`npm run deploy-storybook` publish your storybook github pages
