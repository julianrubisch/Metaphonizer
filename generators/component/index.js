/**
 * Component Generator from https://github.com/react-boilerplate/react-boilerplate
 */

/* eslint strict: ["off"] */

'use strict';

const appRoot = process.cwd();
module.exports = {
  description: 'Add an unconnected component',
  prompts: [{
    type: 'list',
    name: 'type',
    message: 'Select the type of component',
    default: 'ES6 Class Component',
    choices: () => ['ES6 Class Component', 'Stateless Component'],
  }, {
    type: 'directory',
    name: 'path',
    message: 'Where',
    basePath: `${appRoot}`,
  }, {
    type: 'input',
    name: 'name',
    message: 'What should it be called?',
    default: 'Button',
  }, {
    type: 'input',
    name: 'wrappedName',
    message: 'Does it wrap a component?',
    default: 'Button',
  }],
  actions: (data) => {
    let componentTemplate;

    switch (data.type) {
    case 'ES6 Class Component':
    {
      componentTemplate = './component/classComponent.hbs';
      break;
    }    
    case 'Stateless Component':
    {
      componentTemplate = './component/statelessComponent.hbs';
      break;
    }
    case 'Redux Container Component':
    {
      componentTemplate = './component/containerComponent.hbs';
      break;
    }
    default:
    {
      componentTemplate = './component/classComponent.hbs';
    }
    }
    const actions = [{
      type: 'add',
      path: `${appRoot}/{{path}}/{{dashCase name}}.js`,
      templateFile: componentTemplate,
      abortOnFail: true,
    }];
    return actions;
  },
};
