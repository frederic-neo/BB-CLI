const { generateGitIgnore } = require('./generate-gitignore')
const { generateIndex } = require('./generate-index')
const { generatePackageJson, generatePackageJsonWithoutLint } = require('./generate-packageJson')
const { generateFunctionReadme } = require('./generate-readme')
const { generateFunctionCommitlintRc } = require('./generate-commitlintrc')
const { generateFunctionEsLintRc } = require('./generate-eslintrc')
const { generateFunctionPrettierRc } = require('./generate-prettierrc')
const { generateFunctionBabelConfig } = require('./generate-babelconfig')
const { generateFunctionIndexTest } = require('./generate-indexTest')
module.exports = {
  generateGitIgnore,
  generatePackageJson,
  generateIndex,
  generateFunctionReadme,
  generateFunctionCommitlintRc,
  generateFunctionEsLintRc,
  generateFunctionPrettierRc,
  generatePackageJsonWithoutLint,
  generateFunctionBabelConfig,
  generateFunctionIndexTest,
}
