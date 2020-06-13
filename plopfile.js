module.exports = plop => {
  plop.setGenerator('component', {
    description: 'Create a reusable component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?'
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{kebabCase name}}/{{pascalCase name}}.tsx',
        templateFile:
          'plop-templates/Component/Component.js.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{kebabCase name}}/__tests__/{{pascalCase name}}.test.ts',
        templateFile:
          'plop-templates/Component/Component.test.js.hbs',
      },
      {
        type: 'add',
        path:
          'src/components/{{kebabCase name}}/styled.ts',
        templateFile:
          'plop-templates/Component/Component.styled.js.hbs',
      },
      {
        type: 'add',
        path:
          'src/components/{{kebabCase name}}/{{pascalCase name}}.stories.mdx',
        templateFile:
          'plop-templates/Component/Component.story.js.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{kebabCase name}}/index.ts',
        templateFile: 'plop-templates/Component/Component.index.js.hbs',
      },
    ],
  })
}