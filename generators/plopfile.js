/* eslint strict: ["off"] */
function main(plop) {
    plop.addPrompt('directory', require('inquirer-directory'));
    plop.setGenerator('component', require('./component/index.js'));
}

module.exports = main;
